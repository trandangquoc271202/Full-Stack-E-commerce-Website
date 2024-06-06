const express = require("express");
const {
    createProduct,
    getAllProduct,
    updateProduct,
    findById
} = require("../controller/ProductController");
// const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.put("/:id", updateProduct);
router.get("/:id", findById);
module.exports = router;