const Blog = require("../model/BlogModel");
const User = require("../model/UserModel");
const asyncHandler = require("express-async-handler");
const validationMongoId = require("../validation/validationMongoId");
const {cloudinaryUploadImg} = require("../service/Cloudinary");
const fs = require("fs");
const Product = require("../model/ProductModel");
const createBlog = asyncHandler(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.json(newBlog);
    } catch (error) {
        throw new Error(error);
    }
});

const getBlogById = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validationMongoId(id);
    try {
        const getBlog = await Blog.findById(id)
            .populate("likes")
            .populate("dislikes");
        const updateViews = await Blog.findByIdAndUpdate(
            id,
            {
                $inc: {numViews: 1},
            },
            {new: true}
        );
        res.json(getBlog);
    } catch (error) {
        throw new Error(error);
    }
});
const getAllBlogs = asyncHandler(async (req, res) => {
    try {
        const queryObj = {...req.query};
        const excludeFields = ["page", "limit"];
        excludeFields.forEach((el) => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

        let query = Blog.find(JSON.parse(queryStr));

        // sap xep theo moi nhat
        query = query.sort("-createdAt");

        // phân trang

        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const productCount = await Blog.countDocuments();
            if (skip >= productCount) throw new Error("This Page does not exists");
        }
        const blog = await query;
        res.json(blog);
    } catch (error) {
        throw new Error(error);
    }
});
const updateBlog = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validationMongoId(id);
    try {
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateBlog);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteBlog = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validationMongoId(id);
    try {
        const deletedBlog = await Blog.findByIdAndDelete(id);
        res.json(deletedBlog);
    } catch (error) {
        throw new Error(error);
    }
});

const likeBlog = asyncHandler(async (req, res) => {
    const {blogId} = req.body;
    validationMongoId(blogId);
    const blog = await Blog.findById(blogId);
    // const loginUserId = req?.user?._id;
    // const loginUserId = "6662894c0178b420fe98e9bd";
    const loginUserId = req?.user?._id;
    const isLiked = blog?.isLiked;
    const alreadyDisliked = blog?.dislikes?.find(
        (userId) => userId?.toString() === loginUserId?.toString()
    );
    if (alreadyDisliked) {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: {dislikes: loginUserId},
                isDisliked: false,
            },
            {new: true}
        );
        res.json(blog);
    }
    if (isLiked) {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: {likes: loginUserId},
                isLiked: false,
            },
            {new: true}
        );
        res.json(blog);
    } else {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $push: {likes: loginUserId},
                isLiked: true,
            },
            {new: true}
        );
        res.json(blog);
    }
});
const dislikeBlog = asyncHandler(async (req, res) => {
    const {blogId} = req.body;
    validationMongoId(blogId);
    const blog = await Blog.findById(blogId);
    const loginUserId = req?.user?._id;
    // const loginUserId = "6662894c0178b420fe98e9bd";
    const isDisLiked = blog?.isDisliked;
    const alreadyLiked = blog?.likes?.find(
        (userId) => userId?.toString() === loginUserId?.toString()
    );
    if (alreadyLiked) {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: {likes: loginUserId},
                isLiked: false,
            },
            {new: true}
        );
        res.json(blog);
    }
    if (isDisLiked) {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: {dislikes: loginUserId},
                isDisliked: false,
            },
            {new: true}
        );
        res.json(blog);
    } else {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $push: {dislikes: loginUserId},
                isDisliked: true,
            },
            {new: true}
        );
        res.json(blog);
    }
});


const uploadImages = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validationMongoId(id);
    try {
        const uploader = (path) => cloudinaryUploadImg(path, "images");
        const urls = [];
        const files = req.files;
        for (const file of files) {
            const {path} = file;
            const newpath = await uploader(path);
            console.log(newpath);
            urls.push(newpath);
            // fs.unlinkSync(path);
        }
        const findBlog = await Blog.findByIdAndUpdate(
            id,
            {
                images: urls.map((file) => {
                    return file;
                }),
            },
            {
                new: true,
            }
        );
        res.json(findBlog);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createBlog,
    updateBlog,
    getBlogById,
    getAllBlogs,
    deleteBlog,
    likeBlog,
    dislikeBlog,
    uploadImages,
};