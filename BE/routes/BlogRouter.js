const express = require("express");
const {
    createBlog,
    updateBlog,
    getBlog,
    getAllBlogs,
    deleteBlog,
    liketheBlog,
    disliketheBlog,
    uploadImages,
} = require("../controller/BlogController");
// const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { blogImgResize, uploadPhoto } = require("../middlewares/uploadImage");
const router = express.Router();

router.post("/", createBlog);
router.put(
    "/upload/:id",
    uploadPhoto.array("images", 2),
    blogImgResize,
    uploadImages
);
// router.put("/likes", authMiddleware, liketheBlog);
// router.put("/dislikes", authMiddleware, disliketheBlog);
//
// router.put("/:id", authMiddleware, isAdmin, updateBlog);
//
// router.get("/:id", getBlog);
router.get("/", getAllBlogs);
//
// router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;