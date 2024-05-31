import React from "react";
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";

const SpecialProduct = () => {
    return (
        <>
            <div className="col-6 mb-3">
                <div className="special-product-card">
                    <div className="d-flex justify-content-between">
                        <div>
                            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-air-5.png" className="img-fluid" alt="watch"/>
                        </div>
                        <div className="special-product-content">
                            <h5 className="brand">Hevels</h5>
                            <h6 className="title">
                                GMW-B5000D-2
                            </h6>
                            <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                activeColor="#ffd700" edit={false}/>
                            <p className="price">
                                <span className="red-p">1.000.000</span>&nbsp;<strike>2.000.000</strike>
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
                                <p>Sản phẩm: 5</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{"width": "25%"}}
                                         aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <Link className="button" to={""}>Chi tiết</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default SpecialProduct;