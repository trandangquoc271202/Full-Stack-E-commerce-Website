const express = require("express");
const {
    createProduct,
    getAllProduct
} = require("../controller/ProductController");
// const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
module.exports = router;