const express = require("express");
const {
    createProduct,
    getAllProduct,
    updateProduct,
    findById,
    deleteProduct,
    addFavorite,
    rating,
    uploadImagesProduct,
    getAllProductTag,
    addColorToProduct,
    searchProductsByName
} = require("../controller/ProductController");

const {uploadPhoto, productImgResize} = require("../middlewares/uploadImage");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.put("/favorite",authMiddleware, addFavorite);
router.put("/rating",authMiddleware, rating);
router.put("/:id",authMiddleware,isAdmin, updateProduct);
router.get("/tag", getAllProductTag);
router.get("/search", searchProductsByName);
router.get("/:id", findById);
router.delete("/:id",authMiddleware, isAdmin, deleteProduct);
router.post(
    "/upload/:id",
    authMiddleware, isAdmin,
    uploadPhoto.array("images", 10),
    productImgResize,
    uploadImagesProduct
);
router.put("/color/:id",authMiddleware, isAdmin, addColorToProduct);

module.exports = router;