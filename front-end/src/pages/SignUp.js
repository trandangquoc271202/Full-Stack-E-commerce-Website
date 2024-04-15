import React from "react";
import {Link} from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const SignUp = () => {
    return (
        <>
            <Meta title="Đăng ký"></Meta>
            <BreadCrumb title="Đăng ký"></BreadCrumb>
            <div className="login-wrapper py-5 home-weapper-2">
                <div className="">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center">Đăng ký</h3>
                            <form action="" className="d-flex flex-column gap-30">
                                <div className="">
                                    <input type="text" name="name" placeholder="Họ và tên" className="form-control" required={true}/>
                                </div>
                                <div className="">
                                    <input type="email" name="email" placeholder="Email" className="form-control" required={true}/>
                                </div>
                                <div className="mt-1">
                                    <input type="password" name="password" placeholder="Mật khẩu"
                                           className="form-control" required={true}/>
                                </div>
                                <div className="mt-1">
                                    <input type="password" name="password" placeholder="Nhập lại mật khẩu"
                                           className="form-control" required={true}/>
                                </div>
                                <div className="">
                                    <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button btn btn-primary border-0">Đăng ký</button>
                                        <Link to="/login" className="button signup">Đăng nhập</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SignUp;