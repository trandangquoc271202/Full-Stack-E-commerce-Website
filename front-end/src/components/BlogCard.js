import React from "react";
import {Link, useLocation} from "react-router-dom";

const BlogCard = (props) => {
    const {grid, blog} = props;
    let location = useLocation();
    return (
        <div className={`${location.pathname == "/blogs" ? `gr-${grid}` : "gr-3"}`}>
            <div className="card">
                <img src={blog.images.length > 0 ? blog.images[0].url : 'images/default-product.jpg'}
                     className="img-fluid" alt="product"/>
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                    <Link to="" className="button">Xem thêm</Link>
                </div>
            </div>
        </div>
    );
}
export default BlogCard;
