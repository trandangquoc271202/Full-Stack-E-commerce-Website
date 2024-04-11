import React from "react";
import {Link} from "react-router-dom";
import {BsLinkedin, BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src="images/newsletter.png" alt="newsletter"/>
                                <h2 className="text-white"> Đăng ký để nhận thông tin mới nhất</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group mb-0">
                                <input type="text" className="form-control py-1" placeholder="Địa chỉ email của bạn"
                                       aria-label="Địa chỉ email của bạn" aria-describedby="basic-addon2"/>
                                <span className="input-group-text p-2" id="basic-addon2">
                                Đăng ký
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Liên hệ</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1" to="">GigiShop</Link>
                                <address className="text-white py-2 mb-1" to="">Đại Học Nông Lâm TP.HCM</address>
                                <a className="text-white py-2 mb-1" href="tel: +84 38xxxxxx02">+84 38xxxxxx02</a>
                                <a className="text-white py-2 mb-1"
                                   href="mailto:digishop@gmail.com">digishop@gmail.com</a>
                                <div className="social_icons d-flex align-items-center gap-30">
                                    <a href="https://www.linkedin.com/">
                                        <BsLinkedin className="text-white fs-3"/>
                                    </a>
                                    <a href="https://www.facebook.com/">
                                        <BsFacebook className="text-white fs-3"/>
                                    </a>
                                    <a href="https://www.instagram.com/">
                                        <BsInstagram className="text-white fs-3"/>
                                    </a>
                                    <a href="https://www.youtube.com/">
                                        <BsYoutube className="text-white fs-3"/>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="col-3">
                            <h4 className="text-white mb-4">Thông tin</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1" to="">Chính sách bảo mật</Link>
                                <Link className="text-white py-2 mb-1" to="">Chính sách hoàn trả</Link>
                                <Link className="text-white py-2 mb-1" to="">Chính sách vận chuyển</Link>
                                <Link className="text-white py-2 mb-1" to="">Điều khoản dịch vụ</Link>
                                <Link className="text-white py-2 mb-1" to="">Blogs</Link>
                            </div>
                        </div>

                        <div className="col-3">
                            <h4 className="text-white mb-4">Tài khoản</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1" to="">Tìm kiếm</Link>
                                <Link className="text-white py-2 mb-1" to="">Thông tin</Link>
                                <Link className="text-white py-2 mb-1" to="">Câu hỏi thường gặp</Link>
                                <Link className="text-white py-2 mb-1" to="">Liên hệ</Link>
                            </div>
                        </div>

                        <div className="col-2">
                            <h4 className="text-white mb-4">Truy cập nhanh</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1" to="">Phụ kiện</Link>
                                <Link className="text-white py-2 mb-1" to="">Laptops</Link>
                                <Link className="text-white py-2 mb-1" to="">Tai nghe</Link>
                                <Link className="text-white py-2 mb-1" to="">Đồng hồ thông minh</Link>
                                <Link className="text-white py-2 mb-1" to="">Máy tính bảng</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
            <footer className="py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white"> &copy; {new Date().getFullYear()}; Design by
                                Developer's Corner</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;