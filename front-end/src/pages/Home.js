import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee"
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import {Container} from "react-bootstrap";
import SpecialProduct from "../components/SpecialProduct";
import axios from "axios";
import API_URL from "../env/Constants";

const Home = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [products, setProducts] = useState([]);
    const [productsPopular, setProductsPopular] = useState([]);
    const [productsFeature, setProductsFeature] = useState([]);
    const [productFavorite, setProductFavorite] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(4);
    const fetchFavorites = () => {
        axios.get(`${API_URL}/api/user/favorite`)
            .then(response => {
                setProductFavorite(response.data);
            })
            .catch(error => {
                setError(error.message);
            });
    };
    const toggleFavorite = (productId) => {
        axios.put(`${API_URL}/api/product/favorite`, {prodId: productId })
            .then(response => {
                // Sau khi xoa se goi lai ham ferchFavorite de cap nhat lai danh sach yeu thich
                fetchFavorites()
            })
            .catch(error => {
                setError(error.message);
            });
    };
    const isFavorite = (product) => {
        for(let i =0;i< productFavorite.length; i++){
            if(product._id === productFavorite[i]._id) return true;
        }
        return false;
    };
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/product/tag`, {
                    params: {
                        page,
                        limit,
                        tag:"special"
                    }
                });
                setProducts(response.data);
            } catch (error) {
                setError(error.message);
            }
        };
        const fetchProductsPopular = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/product/tag`, {
                    params: {
                        page,
                        limit,
                        tag:"popular"
                    }
                });
                setProductsPopular(response.data);
            } catch (error) {
                setError(error.message);
            }
        };
        const fetchProductsFeature = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/product/tag`, {
                    params: {
                        page,
                        limit,
                        tag:"feature"
                    }
                });
                setProductsFeature(response.data);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchProducts();
        fetchProductsPopular();
        fetchProductsFeature();
        if(isLogin){
            fetchFavorites();
        }
    }, [page, limit]);
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative">
                                <img src="https://cdn.tgdd.vn/Files/2023/03/17/1518606/1-290923-143626.jpg"  className="img-fluid rounded-3 " alt="main banner"/>
                                <div className="main-banner-content position-absolute">
                                    <h4>SIÊU GIẢM GIÁ.</h4>
                                    <h5>Iphone 15</h5>
                                    <p>Trả góp 1 triệu/tháng.</p>
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
                                        <p>10 sản phẩm</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart Tv</h6>
                                        <p>10 sản phẩm</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="camera"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart watches</h6>
                                        <p>10 sản phẩm</p>
                                    </div>
                                    <img src="images/headphone.jpg" alt="camera"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 sản phẩm</p>
                                    </div>
                                    <img src="images/speaker.jpg" alt="camera"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart Phone</h6>
                                        <p>10 sản phẩm</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart Tv</h6>
                                        <p>10 sản phẩm</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="camera"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart watches</h6>
                                        <p>10 sản phẩm</p>
                                    </div>
                                    <img src="images/headphone.jpg" alt="camera"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 sản phẩm</p>
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
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row justify-content-between">
                        <div className="col-12">
                            <h3 className="section-heading">Bộ sưu tập phổ biến</h3>
                        </div>
                    </div>
                    <div className="row">
                        {productsPopular.length > 0 ? productsPopular.map(product => (
                            <ProductCard
                                key={product._id}
                                id={product._id}
                                product={product}
                                isFavorite={isFavorite(product)}
                                toggleFavorite={toggleFavorite}
                            />
                        )) : <p>Loading...</p>}
                    </div>
                </div>
            </section>
            <section className="special-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Sản phẩm đặc biệt</h3>
                        </div>
                        <div className="row">
                            {products.length > 0 ? products.map(product => (
                                <SpecialProduct
                                    key={product._id}
                                    product={product}
                                />
                            )) : <p>Loading...</p>}
                        </div>
                    </div>
                </div>

            </section>
            <section className="featured-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row justify-content-between">
                        <div className="col-12">
                            <h3 className="section-heading">Bộ sưu tập nổi bật</h3>
                        </div>
                        {productsFeature.length > 0 ? productsFeature.map(product => (
                            <ProductCard
                                key={product._id}
                                id={product._id}
                                product={product}
                                isFavorite={isFavorite(product)}
                                toggleFavorite={toggleFavorite}
                            />
                        )) : <p>Loading...</p>}
                    </div>
                </div>
            </section>
            {/*<section className="famous-wrapper py-5 home-wrapper-2">*/}
            {/*    <div className="container-xxl">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-3">*/}
            {/*                <div className="famous-card bg-dark">*/}
            {/*                    <img src="images/tab.jpg" alt="famous" />*/}
            {/*                    <h5>Màn hình lớn</h5>*/}
            {/*                    <h6>Đồng hồ thông minh dòng 7</h6>*/}
            {/*                    <p>Từ 1.000.000 đến 5.000.000 VNĐ</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section className="blog-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Blog của chúng tôi</h3>
                        </div>
                        <BlogCard title="So Sánh Copilot, Copilot Pro" content="Microsoft đang dốc sức đầu tư vào lĩnh vực trí tuệ nhân tạo (AI), khẳng định đây là hướng đi chiến lược cho tương lai của công ty. Bắt đầu với Copilot ra mắt..." image="https://cellphones.com.vn/sforum/_next/image?url=https%3A%2F%2Fcdn-media.sforum.vn%2Fstorage%2Fapp%2Fmedia%2Fthanhhoang%2FPh%C3%A2n%20bi%E1%BB%87t%20Copilot%2Fcropped-images%2Fphan-biet-copilot-copilot-pro-copilot-cover-0-0-0-0-1717061654.jpg&w=1080&q=75"/>
                        <BlogCard title="Đi du lịch từ nay không phải rườm rà..." content="Là một iFan chân chính, sử dụng đồng thời cả iPhone, Apple Watch, AirPods thì việc mang theo một mớ cáp sạc khi đi du lịch có thể..." image="https://cellphones.com.vn/sforum/_next/image?url=https%3A%2F%2Fcdn-media.sforum.vn%2Fstorage%2Fapp%2Fmedia%2Ftiz%2Ftren-tay-de-sac-magsafe-mophie-3-in1-travel-cover.jpg&w=1080&q=75"/>
                        <BlogCard title="So Sánh Copilot, Copilot Pro" content="Microsoft đang dốc sức đầu tư vào lĩnh vực trí tuệ nhân tạo (AI), khẳng định đây là hướng đi chiến lược cho tương lai của công ty. Bắt đầu với Copilot ra mắt..." image="https://cellphones.com.vn/sforum/_next/image?url=https%3A%2F%2Fcdn-media.sforum.vn%2Fstorage%2Fapp%2Fmedia%2Fthanhhoang%2FPh%C3%A2n%20bi%E1%BB%87t%20Copilot%2Fcropped-images%2Fphan-biet-copilot-copilot-pro-copilot-cover-0-0-0-0-1717061654.jpg&w=1080&q=75"/>
                        <BlogCard title="Đi du lịch từ nay không phải rườm rà..." content="Là một iFan chân chính, sử dụng đồng thời cả iPhone, Apple Watch, AirPods thì việc mang theo một mớ cáp sạc khi đi du lịch có thể..." image="https://cellphones.com.vn/sforum/_next/image?url=https%3A%2F%2Fcdn-media.sforum.vn%2Fstorage%2Fapp%2Fmedia%2Ftiz%2Ftren-tay-de-sac-magsafe-mophie-3-in1-travel-cover.jpg&w=1080&q=75"/>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;
