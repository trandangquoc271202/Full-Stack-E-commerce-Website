const express = require("express");
const {
    createBlog,
    updateBlog,
    getAllBlogs,
    getBlogById,
    deleteBlog,
    likeBlog,
    dislikeBlog,
    uploadImages,
} = require("../controller/BlogController");
// const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { blogImgResize, uploadPhoto } = require("../middlewares/uploadImage");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/",authMiddleware, isAdmin, createBlog);
router.put("/upload/:id",authMiddleware, isAdmin,
    uploadPhoto.array("images", 2),
    blogImgResize,
    uploadImages
);
router.put("/likes",authMiddleware, likeBlog);
router.put("/dislikes",authMiddleware, dislikeBlog);
router.put("/:id",authMiddleware, isAdmin, updateBlog);
router.get("/:id", getBlogById);
router.get("/", getAllBlogs);
router.delete("/:id",authMiddleware, isAdmin, deleteBlog);

module.exports = router;