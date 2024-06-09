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
import {MdFavorite} from "react-icons/md";

const DetailBlog = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { id } = useParams();
    const [blog, setBlog] = useState();
    const [error, setError] = useState(null);
    const like = () => {
        if (!isLogin) return;
        axios.put(`${API_URL}/api/blog/likes`, {blogId: id })
            .then(response => {
                // Sau khi xoa se goi lai ham ferchFavorite de cap nhat lai danh sach yeu thich
                fetchBlog();
            })
            .catch(error => {
                setError(error.message);
            });
    };
    const dislike = () => {
        if (!isLogin) return;
        axios.put(`${API_URL}/api/blog/dislikes`, {blogId: id })
            .then(response => {
                fetchBlog();
            })
            .catch(error => {
                setError(error.message);
            });
    };
    const fetchBlog = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/blog/` + id);
            setBlog(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchBlog();
    }, [fetchBlog, id]);

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
                        <div className="filter-sort-grid mb-4">
                            {blog.isLiked ? <AiFillLike className="m-lg-3" style={{"width": "40px", "height": "40px", "color":"blue"}} onClick={() => like()}/> : <AiFillLike className="m-lg-3" style={{"width": "40px", "height": "40px"}} onClick={() => like()}/>}
                            {blog.likes.length}
                            {blog.isDisliked ? <AiFillDislike className="m-lg-3" style={{"width": "40px", "height": "40px", "color":"blue"}} onClick={() => dislike()}/> : <AiFillDislike className="m-lg-3" style={{"width": "40px", "height": "40px"}} onClick={() => dislike()}/>}
                            {blog.dislikes.length}
                        </div>
                        <div className="col-12">
                            <div className="main-product-image">
                                <img src={blog.images.length > 0 ? blog.images[0].url : 'images/default-product.jpg'}
                                     className="img-fluid" alt="blog"/>
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

        </>
    );
}
export default DetailBlog;
