const express = require("express");
const {
    createUser,
    getFavorite
} = require("../controller/UserController");
const router = express.Router();
router.post("/register", createUser);
router.get("/favorite", getFavorite);
module.exports = router;