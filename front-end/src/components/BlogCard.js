import React from "react";
import {Link, useLocation} from "react-router-dom";

const BlogCard = (props) => {
    const {grid} = props;
    let location = useLocation();
    return (
        <div className={`${location.pathname == "/blogs" ? `gr-${grid}` : "gr-3"}`}>
            <div className="card">
                <img src={props.image} className="img-fluid" alt="blog"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <Link to="" className="button">Xem thêm</Link>
                </div>
            </div>
        </div>
    );
}
export default BlogCard;
