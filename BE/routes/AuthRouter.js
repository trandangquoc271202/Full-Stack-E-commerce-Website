const express = require("express");
const {
    createUser,
    getFavorite,
    userCart,
    getUserCart,
    deleteProductFromCart,
    updateQuantityCart
} = require("../controller/UserController");
const router = express.Router();
router.post("/register", createUser);
router.get("/favorite", getFavorite);
router.post("/cart", userCart);
router.get("/cart", getUserCart);
router.delete('/cart/:id', deleteProductFromCart);
router.put('/cart', updateQuantityCart);
module.exports = router;