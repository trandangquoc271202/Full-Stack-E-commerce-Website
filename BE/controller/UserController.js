const User = require("../model/UserModel");
const asyncHandler = require("express-async-handler");
const validationMongoId = require("../validation/validationMongoId");
const Cart = require("../model/CartModel");
const Product = require("../model/ProductModel");
const { generateToken } = require("../config/jwtToken");
const { generateRefreshToken } = require("../config/refreshtoken");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

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
    const { _id } = req.user;
    // const  _id  = "6662894c0178b420fe98e9bd";
    try {
        const findUser = await User.findById(_id).populate("favorite");
        res.json(findUser.favorite);
    } catch (error) {
        throw new Error(error);
    }
});

const userCart = asyncHandler(async (req, res) => {
    const { cart } = req.body;
    const product = req.body;
    const { _id } = req.user;
    // const _id = "6662894c0178b420fe98e9bd";
    validationMongoId(_id);
    try {
        const user = await User.findById(_id);
        const alreadyExistCart = await Cart.findOne({ orderby: user._id });

        if (alreadyExistCart) {
            let products = alreadyExistCart.products;
            let productExists = false;
            let { price } = await Product.findById(product._id).select("price").exec();

            for (let i = 0; i < products.length; i++) {
                if (products[i].product.toString() === product._id && products[i].color === product.color) {
                    products[i].count += product.count;
                    productExists = true;
                    break;
                }
            }

            if (!productExists) {
                alreadyExistCart.products.push({ product: product._id, count: product.count, color: product.color, price: price });
            }

            let cartTotal = 0;
            for (let i = 0; i < products.length; i++) {
                cartTotal += products[i].price * products[i].count;
            }

            alreadyExistCart.cartTotal = cartTotal;
            const updatedCart = await alreadyExistCart.save();
            res.json(updatedCart);
        } else {
            let products = [];
            let object = {};
            object.product = product._id;
            object.count = product.count;
            object.color = product.color;
            let { price } = await Product.findById(product._id).select("price").exec();
            object.price = price;
            products.push(object);

            let cartTotal = price * product.count;
            let newCart = await new Cart({
                products,
                cartTotal,
                orderby: user?._id,
            }).save();
            res.json(newCart);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    // const  _id  = "6662894c0178b420fe98e9bd";
    validationMongoId(_id);
    try {
        const user = await User.findById(_id);
        const alreadyExistCart = await Cart.findOne({ orderby: user._id });
        if (alreadyExistCart) {
            const cart = await Cart.findOne({ orderby: _id }).populate(
                "products.product"
            );
            res.json(cart);
        }else{
            let cartTotal = 0;
            let products = [];
            let newCart = await new Cart({
                products,
                cartTotal,
                orderby: user?._id,
            }).save();
            const cart = await Cart.findOne({ orderby: _id }).populate(
                "products.product"
            );
            res.json(cart);
        }

    } catch (error) {
        throw new Error(error);
    }
});

const deleteProductFromCart = async (req, res) => {
    // const { _id } = req.user;
    const userId = req.user.id;
    // const userId = "6662894c0178b420fe98e9bd"; // Thay thế bằng req.user.id khi có xác thực người dùng
    const cartProductId = req.params.id; // Đây là _id của sản phẩm trong giỏ hàng

    try {
        // Tìm giỏ hàng của người dùng
        let cart = await Cart.findOne({ orderby: userId });

        if (!cart) {
            return res.status(404).json({ message: 'Giỏ hàng không tồn tại' });
        }

        // Kiểm tra sản phẩm có trong giỏ hàng hay không
        const productIndex = cart.products.findIndex(product => product._id.toString() === cartProductId);

        if (productIndex === -1) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại trong giỏ hàng' });
        }

        // Xóa sản phẩm khỏi giỏ hàng
        cart.products.splice(productIndex, 1);
        cart.cartTotal = cart.products.reduce((acc, item) => acc + item.price * item.count, 0); // Cập nhật tổng tiền giỏ hàng

        await cart.save();

        return res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Có lỗi xảy ra khi xóa sản phẩm khỏi giỏ hàng' });
    }
};
const updateQuantityCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    // const  _id  = "6662894c0178b420fe98e9bd";
    const { newCount, idProductInCart } = req.body;
    validationMongoId(_id);
    try {
        const user = await User.findById(_id);
        const alreadyExistCart = await Cart.findOne({ orderby: user._id });
        if (alreadyExistCart) {
            let products = alreadyExistCart.products;

            for (let i = 0; i < products.length; i++) {
                if (products[i]._id.toString() === idProductInCart) {
                    products[i].count = newCount;
                    break;
                }
            }
            let cartTotal = 0;
            for (let i = 0; i < products.length; i++) {
                cartTotal += products[i].price * products[i].count;
            }

            alreadyExistCart.cartTotal = cartTotal;
            const updatedCart = await alreadyExistCart.save();
            res.json(updatedCart);
        }else{

            res.json("Cart not exist");
        }

    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check if user exists or not
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser?._id);
        const updateuser = await User.findByIdAndUpdate(
            findUser.id,
            {
                refreshToken: refreshToken,
            },
            { new: true }
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
            _id: findUser?._id,
            name: findUser?.name,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        });
    } else {
        throw new Error("Invalid Credentials");
    }
});

module.exports = {
    createUser,
    getFavorite,
    userCart,
    getUserCart,
    deleteProductFromCart,
    updateQuantityCart,
    login
};