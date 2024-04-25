import React, {useState} from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const Store = () => {
    const [grid, setGrid] = useState(3);
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
                                <h3 className="filter-title">Giá</h3>
                                <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating mb-3">
                                        <input className="form-control" type={"number"} id=""/>
                                        <label className="form-check-label" htmlFor="">Từ</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" type={"number"} id=""/>
                                        <label className="form-check-label" htmlFor="">Đến</label>
                                    </div>
                                </div>
                                <h3 className="filter-title">Màu sắc</h3>
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
                                <h3 className="filter-title">Kích thước</h3>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Thẻ sản phẩm</h3>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Sản phẩm ngẫu nhiên</h3>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 d-block" style={{width:"100px"}}>Sắp xếp</p>
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
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="totalproducts mb-0">21 sản phẩm</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img onClick={() =>{setGrid(3)}} className="d-block img-fluid" src="images/gr4.svg" alt="grid"/>
                                            <img onClick={() =>{setGrid(4)}} className="d-block img-fluid" src="images/gr3.svg" alt="grid"/>
                                            <img onClick={() =>{setGrid(6)}} className="d-block img-fluid" src="images/gr2.svg" alt="grid"/>
                                            <img onClick={() =>{setGrid(12)}} className="d-block img-fluid" src="images/gr.svg" alt="grid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard grid={grid} image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                                    <ProductCard grid={grid} image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                                    <ProductCard grid={grid} image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                                    <ProductCard grid={grid} image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                                    <ProductCard grid={grid} image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                                    <ProductCard grid={grid} image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                                    <ProductCard grid={grid} image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                                    <ProductCard grid={grid} image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                                    <ProductCard grid={grid} image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                                    <ProductCard grid={grid} image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                                    <ProductCard grid={grid} image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                                    <ProductCard grid={grid} image="images/watch.jpg" brand="G-SHOCK" title="GMW-B5000D-2" price="22.000.000 VNĐ"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Store;