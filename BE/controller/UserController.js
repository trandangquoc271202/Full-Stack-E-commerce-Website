const User = require("../model/UserModel");
const asyncHandler = require("express-async-handler");
const validationMongoId = require("../validation/validationMongoId");
const Cart = require("../model/CartModel");
const Product = require("../model/ProductModel");
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

const userCart = asyncHandler(async (req, res) => {
    const { cart } = req.body;
    const product = req.body;
    // const { _id } = req.user;
    const _id = "6662894c0178b420fe98e9bd";
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
    // const { _id } = req.user;
    const  _id  = "6662894c0178b420fe98e9bd";
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

// const deleteProductFromCart = async (req, res) => {
//     // const { _id } = req.user;
//     // const userId = req.user.id;
//     const  userId  = "6662894c0178b420fe98e9bd";
//     const productId = req.params.id;
//
//     try {
//         // Tìm giỏ hàng của người dùng
//         let cart = await Cart.findOne({ orderby: userId });
//
//         if (!cart) {
//             return res.status(404).json({ message: 'Giỏ hàng không tồn tại' });
//         }
//
//         // Kiểm tra sản phẩm có trong giỏ hàng hay không
//         const productIndex = cart.products.findIndex(product => product.product.toString() === productId);
//
//         if (productIndex === -1) {
//             return res.status(404).json({ message: 'Sản phẩm không tồn tại trong giỏ hàng' });
//         }
//
//         // Xóa sản phẩm khỏi giỏ hàng
//         cart.products.splice(productIndex, 1);
//         cart.cartTotal = cart.products.reduce((acc, item) => acc + item.price * item.count, 0); // Cập nhật tổng tiền giỏ hàng
//
//         await cart.save();
//
//         return res.status(200).json(cart);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Có lỗi xảy ra khi xóa sản phẩm khỏi giỏ hàng' });
//     }
// };
const deleteProductFromCart = async (req, res) => {
    // const { _id } = req.user;
    // const userId = req.user.id;
    const userId = "6662894c0178b420fe98e9bd"; // Thay thế bằng req.user.id khi có xác thực người dùng
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
const updateProductQuantityInCart = async (req, res) => {
    // const userId = req.user.id; // Lấy user ID từ req.user khi có xác thực người dùng
    const cartProductId = req.params.id; // _id của sản phẩm trong giỏ hàng
    const { quantity } = req.body; // Số lượng mới

    if (!quantity || quantity < 1) {
        return res.status(400).json({ message: 'Số lượng phải lớn hơn hoặc bằng 1' });
    }

    try {
        // Tìm giỏ hàng của người dùng
        let cart = await Cart.findOne({ orderby: userId });

        if (!cart) {
            return res.status(404).json({ message: 'Giỏ hàng không tồn tại' });
        }

        // Tìm sản phẩm trong giỏ hàng
        const productIndex = cart.products.findIndex(product => product._id.toString() === cartProductId);

        if (productIndex === -1) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại trong giỏ hàng' });
        }

        // Cập nhật số lượng sản phẩm
        cart.products[productIndex].count = quantity;

        // Cập nhật tổng tiền giỏ hàng
        cart.cartTotal = cart.products.reduce((acc, item) => acc + item.price * item.count, 0);

        // Lưu thay đổi giỏ hàng
        await cart.save();

        return res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Có lỗi xảy ra khi cập nhật số lượng sản phẩm trong giỏ hàng' });
    }
};

module.exports = {
    createUser,
    getFavorite,
    userCart,
    getUserCart,
    deleteProductFromCart,
    updateProductQuantityInCart
};