import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";

const BlogList = () => {
    return (
        <>
            <Meta title="Tin tức"></Meta>
            <BreadCrumb title="Tin tức"></BreadCrumb>
            <div className="store-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Danh mục</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Đồng hồ</li>
                                        <li>TV</li>
                                        <li>Máy ảnh</li>
                                        <li>Công nghệ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">

                            <div className="product-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <BlogCard title="So Sánh Copilot, Copilot Pro" content="Microsoft đang dốc sức đầu tư vào lĩnh vực trí tuệ nhân tạo (AI), khẳng định đây là hướng đi chiến lược cho tương lai của công ty. Bắt đầu với Copilot ra mắt..." image="https://cellphones.com.vn/sforum/_next/image?url=https%3A%2F%2Fcdn-media.sforum.vn%2Fstorage%2Fapp%2Fmedia%2Fthanhhoang%2FPh%C3%A2n%20bi%E1%BB%87t%20Copilot%2Fcropped-images%2Fphan-biet-copilot-copilot-pro-copilot-cover-0-0-0-0-1717061654.jpg&w=1080&q=75"/>
                                    <BlogCard title="Đi du lịch từ nay không phải rườm rà..." content="Là một iFan chân chính, sử dụng đồng thời cả iPhone, Apple Watch, AirPods thì việc mang theo một mớ cáp sạc khi đi du lịch có thể khiến bạn cảm thấy..." image="https://cellphones.com.vn/sforum/_next/image?url=https%3A%2F%2Fcdn-media.sforum.vn%2Fstorage%2Fapp%2Fmedia%2Ftiz%2Ftren-tay-de-sac-magsafe-mophie-3-in1-travel-cover.jpg&w=1080&q=75"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default BlogList;