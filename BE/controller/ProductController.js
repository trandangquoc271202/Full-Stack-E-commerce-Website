const Product = require("../model/productModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validationMongoId = require("../validation/validationMongoId");
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

const findById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    validationMongoId(id);
    try {
        const product = await Product.findById({_id: id});
        res.json(product);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Server error'});
    }
});

module.exports = {
    createProduct,
    getAllProduct,
    updateProduct,
    findById
};