const express = require("express");
const {
    createUser,
    getFavorite,
    userCart,
    getUserCart,
    deleteProductFromCart,
    updateQuantityCart,
    login,
    createOrder,
    getOrders,
    updateOrderStatus,
    getAllOrders,
    getOrderByUserId,
    getOrderById
} = require("../controller/UserController");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/register", createUser);
router.post("/login", login);
router.get("/favorite",authMiddleware, getFavorite);
router.post("/cart",authMiddleware, userCart);
router.post("/cart/cash-order", authMiddleware, createOrder);
router.get("/get-orders", authMiddleware, getOrders);

router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.get("/order/:id", authMiddleware, getOrderById);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getOrderByUserId);
router.put("/order/update-order/:id", authMiddleware, isAdmin, updateOrderStatus);

router.get("/cart",authMiddleware, getUserCart);
router.delete('/cart/:id',authMiddleware, deleteProductFromCart);
router.put('/cart', authMiddleware, updateQuantityCart);
module.exports = router;