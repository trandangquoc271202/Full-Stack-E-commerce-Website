import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import API_URL from "../env/Constants";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(null);
    const [isLogin, setIsLogin] = useState(true);
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/user/cart`);
            setCart(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        if (isLogin) {
            fetchProducts();
        }
    }, [isLogin]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/api/user/cart/${id}`);
            fetchProducts(); // Refresh the cart after deletion
        } catch (error) {
            setError(error.message);
        }
    };

    const handleQuantityChange = async (productId, newCount, max) => {
        if(newCount<=0){
            newCount = 1;
        }
        if(newCount > max){
            newCount = max;
        }
        try {
            await axios.put(`${API_URL}/api/user/cart`, {
                idProductInCart: productId,
                newCount: newCount
            });
            fetchProducts(); // Refresh the cart after update
        } catch (error) {
            setError(error.message);
        }
    };
    const handleQuantity = async (newCount, max) => {
        if(newCount<=0){
            return 1;
        }
        if(newCount > max){
            return max;
        }
    };
    const products = cart.products || [];

    const getImages = (product) => {
        return product.product.images.length > 0 ? product.product.images[0].url : 'images/default-product.jpg';
    };
    return (
        <>
            <Meta title="Giỏ hàng"></Meta>
            <BreadCrumb title="Giỏ hàng"></BreadCrumb>
            <section className="cart-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header d-flex justify-content-between align-items-center">
                                <h4 className="cart-col-1">SẢN PHẨM</h4>
                                <h4 className="cart-col-2">GIÁ</h4>
                                <h4 className="cart-col-3">SỐ LƯỢNG</h4>
                                <h4 className="cart-col-4">TỔNG</h4>
                            </div>
                            {products.length > 0 ? products.map((product) => (
                                <div key={product._id} className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                    <div className="cart-col-1 gap-15 d-flex align-items-center">
                                        <div className="w-25">
                                            <img
                                                src={getImages(product)}
                                                className="img-fluid" alt="product" />
                                        </div>
                                        <div className="w-75">
                                            <p>{product.product.title}</p>
                                            <p>Màu sắc: {product.color}</p>
                                        </div>
                                    </div>
                                    <div className="cart-col-2">
                                        <h5 className="price">{formatter.format(product.price)}</h5>
                                    </div>
                                    <div className="cart-col-3 d-flex align-items-center gap-15">

                                        <input className="form-control w-50" type="number" min={1} max={product.product.quantity}
                                               value={product.count}
                                               onChange={(e) => handleQuantityChange(product._id, Number(e.target.value), product.product.quantity)}
                                               name="" id="" />

                                        <MdDeleteOutline className="text-danger delete" onClick={() => handleDelete(product._id)} />
                                    </div>
                                    <div className="cart-col-4">
                                        <h5 className="price">{formatter.format(product.price * product.count)}</h5>
                                    </div>
                                </div>
                            )) : <p>Chưa có sản phẩm</p>}
                        </div>
                        <div className="col-12 py-2 mt-4">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <Link className="button" to={"/products"}>Tiếp tục mua hàng</Link>
                                <div className="d-flex align-items-end flex-column">
                                    <h4>Tổng tiền: {formatter.format(cart.cartTotal)}</h4>
                                    <p>Phí vận chuyển sẽ được tính toán tại trang thanh toán</p>
                                    <Link className="button" to={"/checkout"}>Thanh toán</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;
