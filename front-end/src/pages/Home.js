import React from "react";
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee"
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import {Container} from "react-bootstrap";

const Home = () => {
    return (
        <>

            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative">
                                <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="main banner"/>
                                <div className="main-banner-content position-absolute">
                                    <h4>SIÊU GIẢM GIÁ.</h4>
                                    <h5>Ipad S13+ Pro.</h5>
                                    <p>Từ 23 triệu hoặc 1 triệu/tháng.</p>
                                    <Link className="button">MUA NGAY</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10 justify-content-center align-items-center">
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-01.jpg" className="img-fluid rounded-3"
                                         alt="main banner"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>SIÊU GIẢM GIÁ.</h4>
                                        <h5>Ipad S13+ Pro.</h5>
                                        <p>Từ 23 triệu<br/> hoặc 1 triệu/tháng.</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-02.jpg" className="img-fluid rounded-3"
                                         alt="main banner"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>SIÊU GIẢM GIÁ.</h4>
                                        <h5>Ipad S13+ Pro.</h5>
                                        <p>Từ 23 triệu<br/> hoặc 1 triệu/tháng.</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-03.jpg" className="img-fluid rounded-3"
                                         alt="main banner"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>SIÊU GIẢM GIÁ.</h4>
                                        <h5>Ipad S13+ Pro.</h5>
                                        <p>Từ 23 triệu<br/> hoặc 1 triệu/tháng.</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-04.jpg" className="img-fluid rounded-3"
                                         alt="main banner"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>SIÊU GIẢM GIÁ.</h4>
                                        <h5>Ipad S13+ Pro.</h5>
                                        <p>Từ 23 triệu<br/> hoặc 1 triệu/tháng.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service.png" alt="services"/>
                                    <div>
                                        <h6>Miễn phí vận chuyển</h6>
                                        <p className="mb-0">cho tất cả đơn hàng trên 2,5 triệu</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-02.png" alt="services"/>
                                    <div>
                                        <h6>Ưu đãi bất ngờ hằng ngày</h6>
                                        <p className="mb-0">Tiết kiệm tới 25%</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-03.png" alt="services"/>
                                    <div>
                                        <h6>Hỗ trợ 24/7</h6>
                                        <p className="mb-0">Mua sắm cùng chuyên gia</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-04.png" alt="services"/>
                                    <div>
                                        <h6>Giá cả phải chăng</h6>
                                        <p className="mb-0">Giá trực tiếp tại xưởng</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-05.png" alt="services"/>
                                    <div>
                                        <h6>Thanh toán an toàn</h6>
                                        <p className="mb-0">100% bảo vệ thanh toán</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="camera"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/headphone.jpg" alt="camera"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/speaker.jpg" alt="camera"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="camera"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/headphone.jpg" alt="camera"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/speaker.jpg" alt="camera"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="marque-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className="d-flex">
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-01.png" alt="brand"/>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-02.png" alt="brand"/>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-03.png" alt="brand"/>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-04.png" alt="brand"/>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-05.png" alt="brand"/>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-03.png" alt="brand"/>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-02.png" alt="brand"/>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-03.png" alt="brand"/>
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Bộ sưu tập nổi bật</h3>
                        </div>
                        <ProductCard image="images/product1.png" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                        <ProductCard image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                        <ProductCard image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                        <ProductCard image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                    </div>
                </div>
            </section>
            <section className="blog-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Blog của chúng tôi</h3>
                        </div>
                        <BlogCard image="images/blog-1.jpg"/>
                        <BlogCard image="images/blog-1.jpg"/>
                        <BlogCard image="images/blog-1.jpg"/>
                        <BlogCard image="images/blog-1.jpg"/>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;