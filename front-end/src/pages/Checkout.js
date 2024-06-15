import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import API_URL from "../env/Constants";
import { MdDeleteOutline } from "react-icons/md";

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(null);
    const [isLogin, setIsLogin] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const fetchProducts = async () => {
        if (localStorage.getItem("isLogin") !== "true") return;
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get(`${API_URL}/api/user/cart`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
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

    const getImages = (product) => {
        return product.product.images.length > 0 ? product.product.images[0].url : 'images/default-product.jpg';
    };

    const placeOrder = async () => {
        const token = localStorage.getItem('token');
        const orderData = {
            COD: true,
            couponApplied: true,
            address,
            phoneNumber,
            shipCost: 100000,
        };
        try {
            const response = await axios.post(`${API_URL}/api/user/cart/cash-order`, orderData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.data.message === 'success') {
                navigate('/cart');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const products = cart.products || [];
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("isLogin") !== "true") {
            navigate("/login");
        }
    }, []);

    return (
        <>
            {(localStorage.getItem("isLogin") !== "true")?navigate("/login") :""}
            <Meta title="Thanh toán"></Meta>
            <div className="checkout-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">DigiShop</h3>
                                <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link className={"text-dark"} to="/cart">Giỏ hàng</Link>
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">Thông tin</li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">Vận chuyển</li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">Thanh toán</li>
                                    </ol>
                                </nav>
                                <h4 className="title total">Thông tin liên hệ</h4>
                                <p className="user-detail total">
                                    {(localStorage.getItem("isLogin") === "true")?(localStorage.getItem("name")) : ""} ({(localStorage.getItem("isLogin") === "true")?(localStorage.getItem("email")) : ""})
                                </p>
                                <h4 className="mb-3">Địa chỉ vận chuyển</h4>
                                <form className="d-flex gap-15 flex-wrap justify-content-between">
                                    <div className="flex-grow-1">
                                        <input
                                            type="tel"
                                            placeholder="Số điện thoại"
                                            className={"form-control"}
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="w-100">
                                        <input
                                            type="text"
                                            placeholder="Địa chỉ"
                                            className={"form-control"}
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to={"/cart"} className={"text-dark"}>
                                                <IoIosArrowBack className="me-3" />
                                                Quay lại giỏ hàng
                                            </Link>
                                            <Link type="button" className={"button"} onClick={placeOrder}>
                                                Đặt hàng
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="border-bottom py-4">
                                {products.length > 0 ? products.map((product) => (
                                    <div className="d-flex mb-3 gap-10 align-items-center" key={product.product._id}>
                                        <div className="w-75 d-flex gap-10">
                                            <div className="w-25 position-relative">
                                                <span className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
                                                    {product.count}
                                                </span>
                                                <img
                                                    style={{ top: "-10px", right: "2px" }}
                                                    src={getImages(product)}
                                                    className="img-fluid"
                                                    alt="product"
                                                />
                                            </div>
                                            <div>
                                                <h5 className="total-price">{product.product.title}</h5>
                                                <p className="total-price">{product.product.brand}</p>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5>{formatter.format(product.price * product.count)}</h5>
                                        </div>
                                    </div>
                                )) : <p>Chưa có sản phẩm</p>}
                            </div>
                            <div className="border-bottom py-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="total">Tổng phụ</p>
                                    <p className="total-price">{formatter.format(cart.cartTotal)}</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-0 total">Phí vận chuyển</p>
                                    <p className="mb-0 total-price">100.000 VND</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-nav-item border-bottom py-4">
                                <h4 className="total">Tổng</h4>
                                <h5 className="total-price">{formatter.format(cart.cartTotal + 100000)}</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 total">Thanh toán khi nhận hàng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
