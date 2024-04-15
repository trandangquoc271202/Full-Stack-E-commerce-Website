import React from "react";
import {Link} from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Login = () => {
    return (
        <>
            <Meta title="Đăng nhập"></Meta>
            <BreadCrumb title="Đăng nhập"></BreadCrumb>
            <div className="login-wrapper py-5 home-weapper-2">
                <div className="">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center">Đăng nhập</h3>
                            <form action="" className="d-flex flex-column gap-30">
                                <div className="">
                                    <input type="email" name="email" placeholder="Email" className="form-control" required={true}/>
                                </div>
                                <div className="mt-1">
                                    <input type="password" name="password" placeholder="Mật khẩu"
                                           className="form-control" required={true}/>
                                </div>
                                <div className="">
                                    <Link className="text-dark" to="/forgot-password">Quên mật khẩu?</Link>
                                    <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button btn btn-primary border-0">Đăng nhập</button>
                                        <Link to="/Signup" className="button signup">Đăng ký</Link>
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
export default Login;