import React, {useEffect, useState} from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import axios from "axios";
import API_URL from "../env/Constants";
import {Link, useNavigate, useParams} from "react-router-dom";
import {FaRegEye} from "react-icons/fa";
import FavoriteCard from "../components/FavoriteCard";
import OrderProduct from "../components/OrderProduct";

const DetailOrder = () => {
    const [grid, setGrid] = useState(2);
    const [order, setOrder] = useState({});
    const [paymentIntent, setPaymentIntent] = useState({});
    const [error, setError] = useState(null);
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const navigate = useNavigate();
    useEffect(() => {
        const fetchOrder = async () => {
            if (localStorage.getItem("isLogin") !== "true") return;
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get(`${API_URL}/api/user/order/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                setOrder(response.data);
                setProducts(response.data.products);
                setPaymentIntent(response.data.paymentIntent);
                console.log(response.data.paymentIntent);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchOrder();
    }, []);
    const convertDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        return formattedDate;
    }
    return (
        <>
            {(localStorage.getItem("isLogin") !== "true")? navigate("/") :""}
            <Meta title="Chi tiết đơn hàng"></Meta>
            <BreadCrumb title="Chi tiết đơn hàng"></BreadCrumb>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="description-wrapper py-5 home-wrapper-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <h4>Đơn hàng</h4>
                                <div className="bg-white p-3">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">Ngày đặt</th>
                                            <th scope="col">Tổng giá</th>
                                            <th scope="col">Trạng thái</th>
                                            <th scope="col">Địa chỉ</th>
                                            <th scope="col">Di động</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <th scope="row">{convertDate(paymentIntent.created)}</th>
                                        <td>{formatter.format(paymentIntent.amount)}</td>
                                        <td>{paymentIntent.status}</td>
                                        <td>{order.address}</td>
                                        <td>{order.phoneNumber}</td>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-xxl justify-content-center">
                    <div className="row gap-10 justify-content-lg-start">
                        {products.length > 0 ? products.map(product => (
                            <OrderProduct
                                key={product._id}
                                product={product}
                                grid={grid}
                            />
                        )) : <p>Loading...</p>}
                    </div>
                </div>
            </section>
        </>
    );
}
export default DetailOrder;
