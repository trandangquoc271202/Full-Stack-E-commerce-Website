import React, {useState} from "react";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";

const DetailProduct = () => {
    const [orderProduct, setorderProduct] = useState(true);
    return (
        <>
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-6"></div>
                            <div className="col-6"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Mô tả</h4>
                            <div className="bg-white p-3">
                                <p>Tín hiệu hiệu chỉnh thời gian
                                    Tên trạm: DCF77 (Mainflingen, Đức)
                                    Tần số: 77,5 kHz
                                    Tên trạm: MSF (Anthorn, Anh)
                                    Tần số: 60,0 kHz
                                    Tên trạm: WWVB (Fort Collins, Hoa Kỳ)
                                    Tần số: 60,0 kHz
                                    Tên trạm: JJY (Fukushima, Fukuoka/Saga, Nhật)
                                    Tần số: 40,0 kHz (Fukushima) / 60,0 kHz (Fukuoka/Saga)
                                    Tên trạm: BPC (Thành phố Thương Khâu, Tỉnh Hồ Nam, Trung Quốc)
                                    Tần số: 68,5 kHz
                                    Nhận tín hiệu hiệu chỉnh thời gian
                                    Tự động nhận tín hiệu lên đến sáu* lần một ngày (những lần nhận tín hiệu còn lại tự
                                    động
                                    hủy ngay sau khi nhận thành công một tín hiệu)
                                    *5 lần một ngày cho tín hiệu hiệu chỉnh thời gian Trung Quốc
                                    Nhận tín hiệu thủ công
                                    Kết quả nhận tín hiệu mới nhất</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Đánh giá</h4>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div className="">
                                        <h4 className="mb-2">Đánh giá khách hàng</h4>
                                        <div className="d-flex gap-10 align-items-center">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                activeColor="#ffd700" edit={false}/>
                                            <p className="mb-0">Dựa trên 2 đánh giá</p>
                                        </div>
                                    </div>
                                    <div>
                                        {orderProduct && (
                                            <div>
                                                <a className="text-dark text-decoration-none" href="">Viết đánh giá</a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="review-form py-4">
                                    <h4 className="mb-2">Viết đánh giá</h4>
                                    <form className="d-flex flex-column gap-15" action="">
                                        {/*<div>*/}
                                        {/*    <input id="" name="" type="text" className="form-control" placeholder="Tên"/>*/}
                                        {/*</div>*/}
                                        {/*<div>*/}
                                        {/*    <input id="" name="" type="email" className="form-control" placeholder="Email"/>*/}
                                        {/*</div>*/}
                                        {/*<div>*/}
                                        {/*    <input id="" name="" type="tel" className="form-control" placeholder="Số điện thoại"/>*/}
                                        {/*</div>*/}
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={0}
                                                activeColor="#ffd700" edit={true}/>
                                        </div>
                                        <div>
                                            <textarea id="" name="" className="form-control w-100" cols="30" rows="4" placeholder="Nội dung"/>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="button border-0">Gửi</button>
                                        </div>
                                    </form>

                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">Trần Đặng Quốc</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={5}
                                                activeColor="#ffd700" edit={false}/>
                                        </div>
                                        <p className="mt-3">Toẹt zời. Sản phẩm quá ok.</p>
                                    </div>
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">Gâu Gâu</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={5}
                                                activeColor="#ffd700" edit={false}/>
                                        </div>
                                        <p className="mt-3">ok, quá suất xắc thiết kế đẹp k khác gì hàng 5 triệu thậm chí còn hơn vì có dynamic như iphone 14 15 vậy,pj dùng khá là ok ,shop đóng gói cẩn thận, giao hàng nhanh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Sản phẩm phổ biến của chúng tôi</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard image="images/product1.png" brand="G-SHOCK" title="GMW-B5000D-2"
                                     price="22.000.000 VNĐ"/>
                        <ProductCard image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2"
                                     price="22.000.000 VNĐ"/>
                        <ProductCard image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2"
                                     price="22.000.000 VNĐ"/>
                        <ProductCard image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2"
                                     price="22.000.000 VNĐ"/>
                    </div>
                </div>
            </section>
        </>
    );
}
export default DetailProduct;