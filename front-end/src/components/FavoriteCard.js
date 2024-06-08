import React from "react";
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {MdFavorite} from "react-icons/md";

const FavoriteCard = (props) => {
    const { grid,product, toggleFavorite } = props;
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return (
            <div className={`${grid != null ? `gr-${grid}` : "gr-3"}`}>
            <div className="product-card position-relative">
                <div className="favorite-icon position-absolute">
                    <div className="favorite-icon position-absolute" onClick={() => toggleFavorite(product._id)}>
                        <MdFavorite  style={{color: "red", cursor: "pointer"}}/>
                    </div>
                </div>
                <div className="product-image">
                    <Link to="/detail">
                        <img src={product.images.length > 0 ? product.images[0].url : 'images/default-product.jpg'} className="img-fluid" alt="product"/>
                    </Link>
                </div>
                <div className="product-details">
                <h6 className="brand">{product.brand}</h6>
                    <h5 className="product-title">{product.title}</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={product.totalrating}
                        activeColor="#ffd700" edit={false}/>
                    <p className="price">{formatter.format(product.price)}</p>

                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column">
                        <Link to="">
                            <img src="images/prodcompare.svg" alt="compare"/>
                        </Link>
                        <Link to="">
                            <img src="images/view.svg" alt="view"/>
                        </Link>
                        <Link to="">
                            <img src="images/add-cart.svg" alt="addcard"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FavoriteCard;
