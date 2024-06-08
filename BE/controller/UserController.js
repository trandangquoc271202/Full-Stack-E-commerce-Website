const User = require("../model/UserModel");
const asyncHandler = require("express-async-handler");
const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        throw new Error("User Already Exists");
    }
});

const getFavorite = asyncHandler(async (req, res) => {
    // const { _id } = req.user;
    const  _id  = "6662894c0178b420fe98e9bd";
    try {
        const findUser = await User.findById(_id).populate("favorite");
        res.json(findUser.favorite);
    } catch (error) {
        throw new Error(error);
    }
});
module.exports = {
    createUser,
    getFavorite
};