import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {MdDeleteOutline} from "react-icons/md";
import {Link} from "react-router-dom";

const Cart = () => {
    return (
        <>
            <Meta title="Giỏ hàng"></Meta>
            <BreadCrumb title="Giỏ hàng"></BreadCrumb>
            <section className="cart-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header d-flex justify-content-between align-items-center">
                                <h4 className="cart-col-1">SẢN PHẨM</h4>
                                <h4 className="cart-col-2">GIÁ</h4>
                                <h4 className="cart-col-3">SỐ LƯỢNG</h4>
                                <h4 className="cart-col-4">TỔNG</h4>
                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_10__3_11.png" className="img-fluid" alt=""/>
                                    </div>
                                    <div className="w-75">
                                        <p>MSI GF63</p>
                                        <p>Màu sắc: Đen</p>
                                        <p>Kích thước: </p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">18.000.000VNĐ</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div>
                                        <input className="form-control" type="number" min={1} max={10} defaultValue={1}
                                               name="" id=""/>
                                    </div>
                                    <div>
                                        <MdDeleteOutline className="text-danger delete"/>
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">18.000.000VNĐ</h5>
                                </div>
                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_150_1_3.png" className="img-fluid" alt=""/>
                                    </div>
                                    <div className="w-75">
                                        <p>Marshall Minor 3</p>
                                        <p>Màu sắc: Đen</p>
                                        <p>Kích thước: </p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">3.000.000VNĐ</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div>
                                        <input className="form-control" type="number" min={1} max={10} defaultValue={1}
                                               name="" id=""/>
                                    </div>
                                    <div>
                                        <MdDeleteOutline className="text-danger delete"/>
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">3.000.000VNĐ</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-2 mt-4">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <Link className="button" to={"/store"}>Tiếp tục mua hàng</Link>
                            <div className="d-flex align-items-end flex-column">
                                <h4>Tổng tiền: 21.000.000 VNĐ</h4>
                                <p>Phí vận chuyển sẽ được tính toán tại trang thanh toán</p>
                                <Link className="button" to={"/checkout"}>Thanh toán</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;