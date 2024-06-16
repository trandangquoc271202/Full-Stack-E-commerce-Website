import React from "react";
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {MdFavorite} from "react-icons/md";

const OrderProduct = (props) => {
    const { grid,product } = props;
    return (
        <div className={`${grid != null ? `gr-${grid}` : "gr-3"}`}>
            <div className="product-card position-relative">
                <div className="product-image">
                    <Link to={"/products/"+product.product._id}>
                        <img src={product.product.images.length > 0 ? product.product.images[0].url : 'images/default-product.jpg'} className="img-fluid" alt="product"/>
                    </Link>
                </div>
                <div className="product-details">
                    <h6 className="brand">{product.product.brand}</h6>
                    <h5 className="product-title">{product.product.title}</h5>
                    <p className="price">Số lượng: {product.count}</p>
                    <p className="price">Màu sắc: {product.color}</p>
                </div>
            </div>
        </div>
    );
}
export default OrderProduct;
