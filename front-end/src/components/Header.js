import React from "react";
import {NavLink, Link} from "react-router-dom"
import {BsSearch} from "react-icons/bs";

const Header = () => {
    return <>

        <header className="header-top-strip py-3">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <p className="text-white mb-0"> Địa chỉ: Trường Đại Học Nông Lâm TP.HCM</p>
                    </div>
                    <div className="col-6">
                        <p className="text-end text-white mb-0">
                            Liên hệ: <a className="text-white" href="tel: +84 38xxxxxx02">+84 38xxxxxx02</a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
        <header className="header-upper py-3">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-2">
                        <h1 className="mb-0">
                            <Link to="/" className="text-white">DigitalShop</Link>
                        </h1>
                    </div>
                    <div className="col-5">
                        <div className="input-group mb-0">
                            <input type="text" className="form-control py-2" placeholder="Tìm kiếm sản phẩm tại đây"
                                   aria-label="Tìm kiếm sản phẩm tại đây" aria-describedby="basic-addon2"/>
                            <span className="input-group-text p-3" id="basic-addon2">
                                <BsSearch className="fs-6"/>
                            </span>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="header-upper-links d-flex align-items-center justify-content-between">
                            <div>
                                <Link className="d-flex align-items-center gap-10 text-white">
                                    <img src="images/compare.svg" alt="compare"/>
                                    <p className="mb-0">
                                        So sánh<br/>sản phẩm
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Link className="d-flex align-items-center gap-10 text-white">
                                    <img src="images/wishlist.svg" alt="wishlist"/>
                                    <p className="mb-0">
                                        Sản phẩm<br/>yêu thích
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Link to="/Login" className="d-flex align-items-center gap-10 text-white">
                                    <img src="images/user.svg" alt="user"/>
                                    <p className="mb-0">
                                        Đăng nhập
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Link className="d-flex align-items-center gap-10 text-white" to={"/cart"}>
                                    <img src="images/cart.svg" alt="cart"/>
                                    <div className="d-flex flex-column gap-10">
                                        <span className="badge bg-white text-dark">2</span>
                                        <p className="mb-0"></p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <header className="header-bottom py-3">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="menu-bottom d-flex align-items-center gap-30">
                            <div>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                        type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="images/menu.svg" alt=""/>
                                        <span className="me-5 d-inline-block"> Danh mục</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item text-white" to="#">Máy tính</Link></li>
                                        <li><Link className="dropdown-item text-white" to="#">Máy ảnh</Link></li>
                                        <li><Link className="dropdown-item text-white" to="#">Đồng hồ</Link></li>
                                        <li><Link className="dropdown-item text-white" to="#">Phụ kiện</Link></li>
                                        <li><Link className="dropdown-item text-white" to="#">TV</Link></li>
                                        <li><Link className="dropdown-item text-white" to="#">Máy tính bảng</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="menu-links">
                                <div className="align-items-center d-flex gap-15">
                                    <NavLink className="nav-item" to="/">Trang chủ</NavLink>
                                    <NavLink className="nav-item" to="/store">Sản phẩm</NavLink>
                                    <NavLink className="nav-item" to="/">Blog</NavLink>
                                    <NavLink className="nav-item" to="/contact">Liên hệ</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    </>
}
export default Header;