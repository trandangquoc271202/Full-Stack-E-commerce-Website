import React, {useEffect, useState} from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import API_URL from "../env/Constants";

const Store = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [grid, setGrid] = useState(3);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);

    const [productFavorite, setProductFavorite] = useState([]);
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
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${API_URL}/api/product`, {
                    params: {
                        page,
                        limit
                    }
                });
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProducts();
        if(isLogin){
            fetchFavorites();
        }
    }, [page, limit]);
    const isFavorite = (product) => {
      for(let i =0;i< productFavorite.length; i++){
          if(product._id === productFavorite[i]._id) return true;
      }
      return false;
    };
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Meta title="Sản phẩm"></Meta>
            <BreadCrumb title="Sản phẩm"></BreadCrumb>
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
                                        <li>Máy tính</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Lọc theo</h3>
                                <div>
                                    <h5 className="sub-title">Có sẵn</h5>
                                    <div className="form-check">
                                        <input className="form-check-input" type={"checkbox"} value="" id=""/>
                                        <label className="form-check-label" htmlFor="">Tất cả</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type={"checkbox"} value="" id=""/>
                                        <label className="form-check-label" htmlFor="">Còn hàng (13)</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type={"checkbox"} value="" id=""/>
                                        <label className="form-check-label" htmlFor="">Hết hàng (0)</label>
                                    </div>
                                </div>
                                <h3 className="sub-title">Giá</h3>
                                <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating">
                                        <input className="form-control" type={"number"} id=""/>
                                        <label className="form-check-label" htmlFor="">Từ</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" type={"number"} id=""/>
                                        <label className="form-check-label" htmlFor="">Đến</label>
                                    </div>
                                </div>
                                <h3 className="sub-title">Màu sắc</h3>
                                <div>
                                    <ul className="colors ps-0">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h3 className="sub-title">Kích thước</h3>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type={"checkbox"} value="" id=""/>
                                        <label className="form-check-label" htmlFor="">S (2)</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type={"checkbox"} value="" id=""/>
                                        <label className="form-check-label" htmlFor="">M (2)</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type={"checkbox"} value="" id=""/>
                                        <label className="form-check-label" htmlFor="">L (2)</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type={"checkbox"} value="" id=""/>
                                        <label className="form-check-label" htmlFor="">XL (2)</label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Thẻ sản phẩm</h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Tai nghe</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Máy tính</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Đồng hồ</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Máy tính bảng</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">TV</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Sản phẩm ngẫu nhiên</h3>
                                <div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" className="img-fluid" alt="watch"/>
                                        </div>
                                        <div className="w-50">
                                            <h5>GMW-B5000D-2</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                activeColor="#ffd700" edit={false}/>
                                            <p>2.000.000 VNĐ</p>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png" className="img-fluid" alt="watch"/>
                                        </div>
                                        <div className="w-50">
                                            <h5>Iphone 15</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                activeColor="#ffd700" edit={false}/>
                                            <p>22.000.000 VNĐ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 d-block" style={{width: "100px"}}>Sắp xếp</p>
                                        <select name="" id="" className="form-control form-select">
                                            <option defaultValue>Chọn</option>
                                            <option value="">Nổi bật</option>
                                            <option value="">Bán chạy</option>
                                            <option value="">A-Z</option>
                                            <option value="">Z-A</option>
                                            <option value="">Giá từ thấp đến cao</option>
                                            <option value="">Giá từ cao đến thấp</option>
                                        </select>
                                    </div>
                                    <div className="pagination align-items-center">
                                        <button className="button-pagination btn-primary border-0 m-lg-3" onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}
                                                disabled={page === 1}>Trước
                                        </button>
                                        <span>Trang {page}</span>
                                        <button className="button-pagination btn-primary border-0 m-lg-3" onClick={() => setPage(prevPage => prevPage + 1)}
                                                disabled={products.length < limit}>Sau
                                        </button>
                                        <select className="form-control form-select" style={{width: "70px"}} onChange={(e) => setLimit(e.target.value)} value={limit}>
                                            <option value={4}>4</option>
                                            <option value={8}>8</option>
                                            <option defaultValue={12}>12</option>
                                            <option value={16}>16</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="totalproducts mb-0">{products.length} sản phẩm</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img onClick={() => {
                                                setGrid(3)
                                            }} className="d-block img-fluid" src="images/gr4.svg" alt="grid"/>
                                            <img onClick={() => {
                                                setGrid(4)
                                            }} className="d-block img-fluid" src="images/gr3.svg" alt="grid"/>
                                            <img onClick={() => {
                                                setGrid(6)
                                            }} className="d-block img-fluid" src="images/gr2.svg" alt="grid"/>
                                            <img onClick={() => {
                                                setGrid(12)
                                            }} className="d-block img-fluid" src="images/gr.svg" alt="grid"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="product-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    {products.length > 0 ? products.map(product => (
                                        <ProductCard
                                            key={product._id}
                                            id={product._id}
                                            grid={grid}
                                            image={product.images.length > 0 ? product.images[0].url : 'images/default-product.jpg'}
                                            brand={product.brand}
                                            title={product.title}
                                            price={product.price}
                                            isFavorite={isFavorite(product)}
                                            toggleFavorite={toggleFavorite}
                                        />
                                    )) : <p>Loading...</p>}
                                </div>
                            </div>
                            <div className="pagination align-items-center justify-content-center">
                                <button className="button-pagination btn-primary border-0 m-lg-3" onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}
                                        disabled={page === 1}>Trước
                                </button>
                                <span>Trang {page}</span>
                                <button className="button-pagination btn-primary border-0 m-lg-3" onClick={() => setPage(prevPage => prevPage + 1)}
                                        disabled={products.length < limit}>Sau
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Store;
