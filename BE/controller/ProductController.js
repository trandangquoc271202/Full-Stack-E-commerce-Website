const Product = require("../model/ProductModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validationMongoId = require("../validation/validationMongoId");
const User = require("../model/UserModel");
const {cloudinaryUploadImg} = require("../service/Cloudinary");
const fs = require("fs");
const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllProduct = asyncHandler(async (req, res) => {
    try {
        // Filtering
        const queryObj = {...req.query};
        const excludeFields = ["page", "sort", "limit", "fields"];
        excludeFields.forEach((el) => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

        let query = Product.find(JSON.parse(queryStr));

        // Sorting

        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt");
        }

        // limiting the fields

        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields);
        } else {
            query = query.select("-__v");
        }

        // pagination

        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount) throw new Error("This Page does not exists");
        }
        const product = await query;
        res.json(product);
    } catch (error) {
        throw new Error(error);
    }
});

const updateProduct = asyncHandler(async (req, res, next) => {
    const {id} = req.params; // Lấy giá trị id từ req.params
    validationMongoId(id); // Gọi hàm validateMongoDbId để kiểm tra tính hợp lệ của id
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true, // Trả về tài liệu đã cập nhật thay vì tài liệu gốc
            runValidators: true, // Chạy validators trên tài liệu được cập nhật
        });

        if (!updatedProduct) {
            return res.status(404).json({message: "Product not found"});
        } else {
            return res.json(updatedProduct);
        }
    } catch (error) {
        throw new Error(error);
    }
});

const deleteProduct = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validationMongoId(id);
    try {
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.json(true);
    } catch (error) {
        throw new Error(error);
    }
});

const findById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    validationMongoId(id);
    try {
        const product = await Product.findById({_id: id});
        product.ratings = product.ratings.reverse();
        res.json(product);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Server error'});
    }
});

const addFavorite = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    // const _id = "6662894c0178b420fe98e9bd";
    const {prodId} = req.body;
    try {
        const user = await User.findById(_id);
        const alreadyadded = user.favorite.find((id) => id.toString() === prodId);
        if (alreadyadded) {
            let user = await User.findByIdAndUpdate(
                _id,
                {
                    $pull: {favorite: prodId},
                },
                {
                    new: true,
                }
            );
            res.json(user);
        } else {
            let user = await User.findByIdAndUpdate(
                _id,
                {
                    $push: {favorite: prodId},
                },
                {
                    new: true,
                }
            );
            res.json(user);
        }
    } catch (error) {
        throw new Error(error);
    }
});

const rating = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    // const _id = "6662894c0178b420fe98e9bd";
    const {star, prodId, comment} = req.body;
    try {
        const product = await Product.findById(prodId);
        let alreadyRated = product.ratings.find(
            (userId) => userId.postedby.toString() === _id.toString()
        );
        if (alreadyRated) {
            const updateRating = await Product.updateOne(
                {
                    ratings: {$elemMatch: alreadyRated},
                },
                {
                    $set: {"ratings.$.star": star, "ratings.$.comment": comment},
                },
                {
                    new: true,
                }
            );
        } else {
            const rateProduct = await Product.findByIdAndUpdate(
                prodId,
                {
                    $push: {
                        ratings: {
                            star: star,
                            comment: comment,
                            postedby: _id,
                        },
                    },
                },
                {
                    new: true,
                }
            );
        }
        const getallratings = await Product.findById(prodId);
        let totalRating = getallratings.ratings.length;
        let ratingsum = getallratings.ratings
            .map((item) => item.star)
            .reduce((prev, curr) => prev + curr, 0);
        let actualRating = Math.round(ratingsum / totalRating);
        let finalproduct = await Product.findByIdAndUpdate(
            prodId,
            {
                totalrating: actualRating,
            },
            {new: true}
        );
        res.json(finalproduct.ratings.reverse());
    } catch (error) {
        throw new Error(error);
    }
});

const uploadImagesProduct = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const uploader = (path) => cloudinaryUploadImg(path, "images");
        const urls = [];
        const files = req.files;
        for (const file of files) {
            const {path} = file;
            const newpath = await uploader(path);
            urls.push(newpath);
            // fs.unlinkSync(path);
        }
        const images = urls.map((file) => {
            return file;
        });

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {$push: {images: {$each: images}}},
            {new: true}
        );
        res.json(images);
    } catch (error) {
        throw new Error(error);
    }
});
const getAllProductSpecial = asyncHandler(async (req, res) => {
    try {
        // Filtering
        const queryObj = {...req.query};
        const excludeFields = ["page", "sort", "limit", "fields"];
        excludeFields.forEach((el) => delete queryObj[el]);

        // Add the condition to filter by special tag
        queryObj.tags = {$in: ["special"]};

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

        let query = Product.find(JSON.parse(queryStr));

        // Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt");
        }

        // Limiting the fields
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields);
        } else {
            query = query.select("-__v");
        }

        // Pagination
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 10;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);

        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount) throw new Error("This Page does not exist");
        }

        const product = await query;
        res.json(product);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});
const getAllProductTag = asyncHandler(async (req, res) => {
    try {
        // Filtering
        const queryObj = {...req.query};
        const excludeFields = ["page", "sort", "limit", "fields", "tag"];
        excludeFields.forEach((el) => delete queryObj[el]);

        // Add the condition to filter by tag if provided
        if (req.query.tag) {
            queryObj.tags = {$in: [req.query.tag]};
        }

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

        let query = Product.find(JSON.parse(queryStr));

        // Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt");
        }

        // Limiting the fields
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields);
        } else {
            query = query.select("-__v");
        }

        // Pagination
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 10;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);

        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount) throw new Error("This Page does not exist");
        }

        const product = await query;
        res.json(product);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});
const addColorToProduct = asyncHandler(async (req, res) => {
    const {id} = req.params;
    const color = req.body;
    try {
        const product = await Product.findById(id);

        if (!product) {
            res.status(404).json({ message: "Không tìm thấy sản phẩm" });
            return;
        }

        const colorExists = product.color.some((c) => c.name.toLowerCase() === color.name.toLowerCase());

        if (colorExists) {
            res.status(400).json({ message: "Màu sắc đã tồn tại" });
            return;
        }

        product.color.push({ name: color.name });
        const updatedProduct = await product.save();

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = {
    createProduct,
    getAllProduct,
    updateProduct,
    findById,
    deleteProduct,
    addFavorite,
    rating,
    uploadImagesProduct,
    getAllProductTag,
    addColorToProduct
};