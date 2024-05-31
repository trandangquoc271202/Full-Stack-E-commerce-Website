import React from "react";
import {Link, useLocation} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
    return (
        <div className={`${location.pathname == "/store" ? `gr-${grid}` : "gr-3"}`}>
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link to="">
                        <img src="images/wish.svg" alt="wishlist"/>
                    </Link>
                </div>
                <div className="product-image">
                    <Link to="/detail">
                    <img src={props.image} className="img-fluid" alt="product"/>
                    </Link>
                </div>
                <div className="product-details">
                <h6 className="brand">{props.brand}</h6>
                    <h5 className="product-title">{props.title}</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        activeColor="#ffd700" edit={false}/>
                    <p className="price">{props.price}</p>

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
export default ProductCard;