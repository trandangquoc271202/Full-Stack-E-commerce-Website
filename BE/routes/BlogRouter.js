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
const router = express.Router();

router.post("/", createBlog);
router.put("/upload/:id",
    uploadPhoto.array("images", 2),
    blogImgResize,
    uploadImages
);
router.put("/likes", likeBlog);
router.put("/dislikes", dislikeBlog);
router.put("/:id", updateBlog);
router.get("/:id", getBlogById);
router.get("/", getAllBlogs);
router.delete("/:id", deleteBlog);

module.exports = router;