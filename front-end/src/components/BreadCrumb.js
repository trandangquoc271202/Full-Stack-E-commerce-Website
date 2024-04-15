import React from "react";
import {Link} from "react-router-dom";

const BreadCrumb = (props) => {
    return (
        <div className=" py-4 bg-white">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center mb-0">
                            <Link to="/" className="text-dark">Trang chủ &nbsp; {" "}</Link>{" "} / {props.title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadCrumb;