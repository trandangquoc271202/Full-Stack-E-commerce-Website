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
    addColorToProduct
} = require("../controller/ProductController");

const {uploadPhoto, productImgResize} = require("../middlewares/uploadImage");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.put("/favorite",authMiddleware, addFavorite);
router.put("/rating", rating);
router.put("/:id", updateProduct);
router.get("/tag", getAllProductTag);
router.get("/:id", findById);
router.delete("/:id", deleteProduct);
router.post(
    "/upload/:id",
    uploadPhoto.array("images", 10),
    productImgResize,
    uploadImagesProduct
);
router.put("/color/:id", addColorToProduct);
module.exports = router;