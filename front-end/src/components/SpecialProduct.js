import React from "react";
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";

const SpecialProduct = (props) => {
    const {product} = props;
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const percent = (product.quantity/product.quantity) + product.sold *100;
    console.log(percent);
    return (
        <>
            <div className="col-6 mb-3">
                <div className="special-product-card">
                    <div className="d-flex justify-content-between">
                        <div>
                            <Link to={"/products/"+product._id}>
                            <img src={product.images.length > 0 ? product.images[0].url : 'images/default-product.jpg'}
                                 className="img-fluid" alt="product"/>
                            </Link>
                        </div>
                        <div className="special-product-content">
                            <h5 className="brand">{product.brand}</h5>
                            <h6 className="title">
                                {product.title}
                            </h6>
                            <ReactStars
                                count={5}
                                size={24}
                                value={product.totalrating}
                                activeColor="#ffd700" edit={false}/>
                            <p className="price">
                                <span className="red-p">{formatter.format(product.price)}</span>&nbsp;<strike>{}</strike>
                            </p>
                            <div className="discount-till d-flex align-items-center">
                                <p><b>5 </b>ngày</p>
                                <div className="d-flex gap-10 align-items-center">
                                    <span className="badge rounded-circle p-3 bg-danger">1</span>:
                                    <span className="badge rounded-circle p-3 bg-danger">1</span>:
                                    <span className="badge rounded-circle p-3 bg-danger">1</span>
                                </div>
                            </div>
                            <div className="prod-count my-3">
                                <p>Sản phẩm: {product.quantity}</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar"  style={{width: (product.sold/product.quantity)*100 +"%"}}
                                         aria-valuenow={product.quantity/product.quantity + product.sold *100} aria-valuemin={product.quantity} aria-valuemax={product.quantity + product.sold}></div>
                                </div>
                            </div>
                            <Link className="button" to={"/products/"+product._id}>Chi tiết</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default SpecialProduct;
