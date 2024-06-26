import React, {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from '../model/ReactImageZoom';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import API_URL from "../env/Constants";
import color from "../components/Color";

const DetailProduct = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [orderProduct, setOrderProduct] = useState(true);
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [ratings, setRatings] = useState([]);
    const [error, setError] = useState(null);
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [star, setStar] = useState(0);
    const navigate = useNavigate();
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const handleChangeColor = (e) => {
        setSelectedColor(e.target.value);
    };

    const handleChangeQuantity = (e) => {
        setQuantity(e.target.value);
    };
    const changeStar = (newRating) => {
        setStar(newRating);
    };
    const handleAddToCart = async () => {
        if (localStorage.getItem("isLogin") !== "true") {
            navigate("/login");
            return;
        }
        const token = localStorage.getItem('token');
        const cartItem = {
            _id: product._id,
            count: quantity,
            color: selectedColor,
        };
        if (selectedColor === "") {
            alert("Vui lòng chọn màu sắc");
        } else {
            if (quantity == null || quantity < 1) {
                alert("Vui lòng chọn lại số lượng");
            } else {
                try {
                    const response = await axios.post(`${API_URL}/api/user/cart`, cartItem,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        });
                    if (response.status === 200) {
                        alert("Sản phẩm đã thêm thành công");
                    } else {
                        alert("Đã xảy ra lỗi, vui lòng thử lại sau.");
                    }
                } catch (error) {
                    console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
                }
            }
        }
    };
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/product/` + id);
            setProduct(response.data);
            setRatings(response.data.ratings);
        } catch (error) {
            setError(error.message);
        }
    };
    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Loading...</div>;
    }
    const commentProduct = async () => {
        if (localStorage.getItem("isLogin") !== "true") {
         navigate("/login");
         return;
        }
        const token = localStorage.getItem('token');
        const body = {
            star: star,
            comment: comment,
            prodId: id
        };
        try {
            const response = await axios.put(`${API_URL}/api/product/rating`, body, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(

            );
            setRatings(response.data);
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <>
            <Meta title="Chi tiết sản phẩm"></Meta>
            <BreadCrumb title="Chi tiết sản phẩm"></BreadCrumb>
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <img
                                        src={product.images.length > 0 ? product.images[0].url : 'images/default-product.jpg'}
                                        className="img-fluid" alt="product"/>
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div><img src="images/product1.png" alt="" className=""/></div>
                                <div><img src="images/product1.png" alt="" className=""/></div>
                                <div><img src="images/product1.png" alt="" className=""/></div>
                                <div><img src="images/product1.png" alt="" className=""/></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className="title">
                                        {product.title}
                                    </h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">{formatter.format(product.price)}</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={product.totalrating}
                                            activeColor="#ffd700" edit={false}/>
                                        <p className="mb-0 mb-0 text-review">({product.ratings.length} đánh giá)</p>
                                    </div>
                                    <a className="review-button" href="#review"> Viết đánh giá</a>
                                </div>
                                <div className="border-bottom">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Thương hiệu: </h3>
                                        <p className="product-data">{product.brand}</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Danh mục: </h3>
                                        <p className="product-data">{product.category===null?"":product.category.title}</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Thẻ: </h3>
                                        <p className="product-data">{product.tags}</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Có sẵn: </h3>
                                        <p className="product-data">{product.quantity}</p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className="product-heading">Size: </h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            {product.color.length > 0 ? product.color.map(color => (
                                                <div className="d-flex justify-content-center">
                                                    <input type="radio" id="red" name="color" value={color.name}
                                                           checked={selectedColor === `${color.name}`}
                                                           onChange={handleChangeColor} style={{"width": "20px"}}/>
                                                    <span
                                                        className="badge border-1 bg-white text-dark border-secondary border">{color.name}</span>
                                                </div>
                                            )) : ""}
                                        </div>
                                        <div>
                                            <p>Bạn đã chọn màu: {selectedColor}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                        <h3 className="product-heading">Số lượng: </h3>
                                        <div className="">
                                            <input className="form-control" type="number" min={1} max={product.quantity}
                                                   required={true} value={quantity} onChange={handleChangeQuantity}
                                                   style={{width: "70px"}}/>
                                        </div>
                                        <div className="d-flex align-items-center gap-30">
                                            <button className="button btn btn-primary border-0"
                                                    onClick={handleAddToCart}>Thêm vào giỏ hàng
                                            </button>
                                            {/*<button className="button border-0 signup">Mua ngay</button>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Mô tả</h4>
                            <div className="bg-white p-3">
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Đánh giá</h4>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div className="">
                                        <h4 className="mb-2">Đánh giá khách hàng</h4>
                                        <div className="d-flex gap-10 align-items-center">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={product.totalrating}
                                                activeColor="#ffd700" edit={false}/>
                                            <p className="mb-0">Dựa trên {product.ratings.length} đánh giá</p>
                                        </div>
                                    </div>
                                    <div>
                                        {orderProduct && (
                                            <div>
                                                <a className="text-dark text-decoration-none" href="">Viết đánh giá</a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div id="review" className="review-form py-4">
                                    <h4 className="mb-2">Viết đánh giá</h4>
                                    <form className="d-flex flex-column gap-15" action="">
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={star}
                                                activeColor="#ffd700" edit={true}
                                                onChange={changeStar}
                                            />
                                        </div>
                                        <div>
                                            <textarea id="" name="" className="form-control w-100" cols="30" rows="4"
                                                      placeholder="Nội dung" onChange={(e) => setComment(e.target.value)}/>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <Link className="button border-0" onClick={commentProduct}>Gửi</Link>
                                        </div>
                                    </form>

                                </div>
                                <div className="reviews mt-4">
                                    {ratings.length > 0 ? ratings.map(rating => (
                                        <div className="review">
                                            <div className="d-flex gap-10 align-items-center">
                                                <h6 className="mb-0">{rating._id}</h6>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={rating.star}
                                                    activeColor="#ffd700" edit={false}/>
                                            </div>
                                            <p className="mt-3">{rating.comment}</p>
                                        </div>
                                    )) : <p>Chưa có đánh giá</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Sản phẩm phổ biến của chúng tôi</h3>
                        </div>
                    </div>
                    <div className="row">
                        {/*<ProductCard image="images/product1.png" brand="G-SHOCK" title="GMW-B5000D-2"*/}
                        {/*             price="22.000.000 VNĐ"/>*/}
                        {/*<ProductCard image="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/tecno-pova-5_2_.png" brand="TECNO" title="TECNO POVA"*/}
                        {/*             price="4.000.000 VNĐ"/>*/}
                        {/*<ProductCard image="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/tecno-spark-20-pro-plus_1__2.png" brand="TECNO" title="TECNO SPARK"*/}
                        {/*             price="5.050.000 VNĐ"/>*/}
                        {/*<ProductCard image="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple_m3_slot.png" brand="APPLE" title="Air M3"*/}
                        {/*             price="27.190.000 VNĐ"/>*/}
                    </div>
                </div>
            </section>
        </>
    );
}
export default DetailProduct;
