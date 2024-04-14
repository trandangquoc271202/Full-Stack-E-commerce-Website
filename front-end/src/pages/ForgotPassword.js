import React from "react";
import {Link} from "react-router-dom";

const ForgotPassword = () => {
    return (
        <>
            <div className="login-wrapper py-5 home-weapper-2">
                <div className="">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center">Lấy lại mật khẩu</h3>
                            <p className="text-center mt-2 my-2">Chúng tôi sẽ gửi mã đến email của bạn</p>
                            <form action="" className="d-flex flex-column ">
                                <div className="">
                                    <input type="email" name="email" placeholder="Email" className="form-control"/>
                                </div>
                                <div className="">
                                    <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                                        <button className="button btn btn-primary border-0">Gửi</button>
                                        <Link to="/login" className="text-dark">Bỏ qua</Link>
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
export default ForgotPassword;