import React, {useEffect, useState} from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import axios from "axios";
import API_URL from "../env/Constants";

const BlogList = () => {
    const [grid, setGrid] = useState(6);
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(4);
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/blog`, {
                    params: {
                        page,
                        limit
                    }
                });
                setBlogs(response.data);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchBlogs();
    }, [page, limit]);
    console.log(blogs.length)
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
                            <div className="filter-sort-grid mb-4">
                                <div className="pagination justify-content-center align-items-center">
                                    <button className="button-pagination btn-primary border-0 m-lg-3"
                                            onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}
                                            disabled={page === 1}>Trước
                                    </button>
                                    <span>Trang {page}</span>
                                    <button className="button-pagination btn-primary border-0 m-lg-3"
                                            onClick={() => setPage(prevPage => prevPage + 1)}
                                            disabled={blogs.length < limit}>Sau
                                    </button>
                                    <select className="form-control form-select" style={{width: "70px"}}
                                            onChange={(e) => setLimit(e.target.value)} value={limit}>
                                        <option defaultValue={4}>4</option>
                                        <option value={8}>8</option>
                                        <option value={12}>12</option>
                                        <option value={16}>16</option>
                                    </select>
                                </div>
                            </div>
                            <div className="product-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    {blogs.length > 0 ? blogs.map(blog => (
                                        <BlogCard
                                            key={blog._id}
                                            grid={grid}
                                            blog={blog}
                                        />
                                    )) : <p>Loading...</p>}
                                </div>
                                <div className="pagination justify-content-center align-items-center">
                                    <button className="button-pagination btn-primary border-0 m-lg-3"
                                            onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}
                                            disabled={page === 1}>Trước
                                    </button>
                                    <span>Trang {page}</span>
                                    <button className="button-pagination btn-primary border-0 m-lg-3"
                                            onClick={() => setPage(prevPage => prevPage + 1)}
                                            disabled={blogs.length < limit}>Sau
                                    </button>
                                    <select className="form-control form-select" style={{width: "70px"}}
                                            onChange={(e) => setLimit(e.target.value)} value={limit}>
                                        <option defaultValue={4}>4</option>
                                        <option value={8}>8</option>
                                        <option value={12}>12</option>
                                        <option value={16}>16</option>
                                    </select>
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
