const express = require("express");
const {
    createProduct,
    getAllProduct,
    updateProduct,
    findById,
    deleteProduct,
    addFavorite,
    rating,
    uploadImagesProduct
} = require("../controller/ProductController");

const {uploadPhoto, productImgResize} = require("../middlewares/uploadImage");
const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.put("/favorite", addFavorite);
router.put("/rating", rating);
router.put("/:id", updateProduct);
router.get("/:id", findById);
router.delete("/:id", deleteProduct);
router.post(
    "/upload/:id",
    uploadPhoto.array("images", 10),
    productImgResize,
    uploadImagesProduct
);
module.exports = router;