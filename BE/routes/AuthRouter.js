const express = require("express");
const {
    createUser,
    getFavorite,
    userCart,
    getUserCart,
    deleteProductFromCart,
    updateQuantityCart,
    login
} = require("../controller/UserController");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/register", createUser);
router.post("/login", login);
router.get("/favorite",authMiddleware, getFavorite);
router.post("/cart",authMiddleware, userCart);
router.get("/cart",authMiddleware, getUserCart);
router.delete('/cart/:id',authMiddleware, deleteProductFromCart);
router.put('/cart', authMiddleware, updateQuantityCart);
module.exports = router;