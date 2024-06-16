const Category = require("../model/CategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../validation/validationMongoId");
const Product = require("../model/ProductModel");
const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deletedCategory = await Category.findByIdAndDelete(id);
        res.json(deletedCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getaCategory = await Category.findById(id);
        res.json(getaCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const getallCategory = asyncHandler(async (req, res) => {
    try {
        const getallCategory = await Category.find();
        res.json(getallCategory);
    } catch (error) {
        throw new Error(error);
    }
});
// const getProductByCate = asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     try {
//         const products = await Product.find({ category: id }).populate('category');
//         res.json(products);
//     } catch (error) {
//         console.error('Error fetching products by category:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
const getProductByCate = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
    const limit = parseInt(req.query.limit) || 10; // Số lượng sản phẩm mỗi trang, mặc định là 10

    try {
        const skip = (page - 1) * limit;
        const products = await Product.find({ category: id })
            .sort({ createdAt: -1 }) // Sắp xếp theo thứ tự mới nhất
            .skip(skip)
            .limit(limit)
            .populate('category');

        res.json(products);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getallCategory,
    getProductByCate
};