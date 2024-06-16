const express = require("express");
const {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getallCategory,
    getProductByCate
} = require("../controller/CategoryController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createCategory);
router.put("/:id", authMiddleware, updateCategory);
router.delete("/:id", authMiddleware, deleteCategory);
router.get("/:id", getCategory);
router.get("/", getallCategory);
router.get("/product/:id", getProductByCate);
module.exports = router;