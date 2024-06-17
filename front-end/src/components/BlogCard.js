import React from "react";
import {Link, useLocation} from "react-router-dom";
const BlogCard = (props) => {
    const {grid, blog} = props;
    let location = useLocation();
    return (
        <div className={`${location.pathname == "/blogs" ? `gr-${grid}` : "gr-3"}`}>
            <div className="card">
                <Link to={"/blogs/" + blog.id}>
                    <div className="card">
                        <img src={blog.images.length > 0 ? blog.images[0].url : 'images/default-product.jpg'}
                             className="img-fluid" alt="product"/>
                    </div>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{blog.title.slice(0, 40)}...</h5>
                    <p className="card-text">{blog.description.slice(0, 200)}...</p>
                    <Link to={"/blogs/" + blog.id} className="button">Xem thêm</Link>
                </div>
            </div>
        </div>
    );
}
export default BlogCard;
