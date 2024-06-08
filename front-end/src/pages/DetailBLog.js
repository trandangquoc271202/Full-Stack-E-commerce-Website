import React, {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from '../model/ReactImageZoom';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import {useParams} from "react-router-dom";
import axios from "axios";
import API_URL from "../env/Constants";
import {AiFillDislike, AiFillLike} from "react-icons/ai";

const DetailBlog = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { id } = useParams();
    const [blog, setBlog] = useState();
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/blog/` + id);
                setBlog(response.data);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchBlog();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!blog) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Meta title="Chi tiết tin tức"></Meta>
            <BreadCrumb title="Chi tiết tin tức"></BreadCrumb>
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">

                        <div className="col-12">
                            <AiFillLike />
                            <AiFillDislike />
                        </div>
                        <div className="col-12">
                            <div className="main-product-image">
                                <img src={blog.images.length > 0 ? blog.images[0].url :'images/default-product.jpg'} className="img-fluid" alt="blog"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white p-3">
                                <p>{blog.description}</p>
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
                                                value={4}
                                                activeColor="#ffd700" edit={false}/>
                                            <p className="mb-0">Dựa trên 2 đánh giá</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="review" className="review-form py-4">
                                    <h4 className="mb-2">Viết đánh giá</h4>
                                    <form className="d-flex flex-column gap-15" action="">
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={0}
                                                activeColor="#ffd700" edit={true}/>
                                        </div>
                                        <div>
                                            <textarea id="" name="" className="form-control w-100" cols="30" rows="4"
                                                      placeholder="Nội dung"/>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="button border-0">Gửi</button>
                                        </div>
                                    </form>

                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">Trần Đặng Quốc</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={5}
                                                activeColor="#ffd700" edit={false}/>
                                        </div>
                                        <p className="mt-3">Toẹt zời. Sản phẩm quá ok.</p>
                                    </div>
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">Gâu Gâu</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={5}
                                                activeColor="#ffd700" edit={false}/>
                                        </div>
                                        <p className="mt-3">ok, quá suất xắc thiết kế đẹp k khác gì hàng 5 triệu thậm
                                            chí còn hơn vì có dynamic như iphone 14 15 vậy,pj dùng khá là ok ,shop đóng
                                            gói cẩn thận, giao hàng nhanh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default DetailBlog;
