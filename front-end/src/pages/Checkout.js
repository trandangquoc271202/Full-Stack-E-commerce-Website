import React from "react";
import Meta from "../components/Meta";
import {Link} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Checkout=()=>{
    return(
        <>
            <Meta title="Thanh toán"></Meta>
            {/*<BreadCrumb title="Thanh toán"></BreadCrumb>*/}
            <div className="checkout-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">DigiShop</h3>
                                <nav style={{"--bs-breadcrumb-divider": ">"}} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link className={"text-dark"} to="/">Giỏ
                                            hàng</Link></li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">Thông tin</li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">Vận chuyển</li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">Thanh toán</li>
                                    </ol>
                                </nav>
                                <h4 className="title total">Thông tin liên hệ</h4>
                                <p className="user-detail total">
                                    Tran Dang Quoc (trandangquoc@gmail.com)
                                </p>
                                <h4 className="mb-3">Địa chỉ vận chuyển</h4>
                                <form action="" className="d-flex gap-15 flex-wrap justify-content-between">
                                    <div className="w-100">
                                        <select name="" className="form-control form-select" id="">
                                            <option selected disabled>Chọn</option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="Họ" className={"form-control"}/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="Tên" className={"form-control"}/>
                                    </div>
                                    <div className="w-100">
                                        <input type="text" placeholder="Địa chỉ" className={"form-control"}/>
                                    </div>
                                    <div className="w-100">
                                        <input type="text" placeholder="Số nhà" className={"form-control"}/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="Thành phố" className={"form-control"}/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <select name="" className="form-control form-select" id="">
                                            <option selected disabled>Chọn</option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="Zip code"  className={"form-control"}/>
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to={"/cart"} className={"text-dark"}>
                                                <IoIosArrowBack className="me-3"/>
                                                Quay lại giỏ hàng
                                            </Link>
                                            <Link to={"/cart"} className={"button"}>Tiếp tục thanh toán</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="border-bottom py-4">
                                <div className="d-flex mb-3 gap-10 align-items-center">
                                    <div className="w-75 d-flex gap-10">
                                        <div className="w-25 position-relative">
                                            <span
                                                className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                            <img style={{top: "-10px", right: "2px"}} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_150_1_3.png"
                                                 className="img-fluid" alt="product"/>
                                        </div>
                                        <div>
                                            <h5 className="total-price">Marshall Minor 3</h5>
                                            <p className="total-price">Marshall</p>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5>3.000.000VND</h5>
                                    </div>
                                </div>
                                <div className="d-flex mb-3 gap-10 align-items-center">
                                    <div className="w-75 d-flex gap-10">
                                        <div className="w-25 position-relative">
                                            <span
                                                className="badge bg-secondary text-white rounded-circle p-2 position-absolute">2</span>
                                            <img style={{top: "-10px", right: "2px"}} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_10__3_11.png"
                                                 className="img-fluid" alt="product"/>
                                        </div>
                                        <div>
                                            <h5 className="total-price">MSI GF63</h5>
                                            <p className="total-price">MSI</p>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5>18.000.000VND</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom py-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="total">Tổng phụ</p>
                                    <p className="total-price">21.000.000 VND</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-0 total">Phí vận chuyển</p>
                                    <p className="mb-0 total-price">100.000 VND</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-nav-item border-bottom py-4">
                                <h4 className="total">Tổng</h4>
                                <h5 className="total-price">21.100.000 VND</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Checkout;
