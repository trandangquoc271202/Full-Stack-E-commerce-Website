import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="login-wrapper py-5 home-weapper-2">
                <div className="">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center">Đăng nhập</h3>
                            <form action="" className="d-flex flex-column gap-30">
                                <div className="">
                                    <input type="email" name="email" placeholder="Email" className="form-control"/>
                                </div>
                                <div className="mt-1">
                                    <input type="password" name="password" placeholder="Password"
                                           className="form-control"/>
                                </div>
                                <div className="">
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                    <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button btn btn-primary border-0">Login</button>
                                        <Link to="/Signup" className="button signup">SignUp</Link>
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