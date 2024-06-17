import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import API_URL from "../env/Constants";
import axios from "axios";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== repassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/api/user/register`, {
                name,
                email,
                mobilePhone: phone,
                password,
            });
            console.log(response.data.status);
            if (response.data.status==="true") {
                navigate("/login");
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <>
            <Meta title="Đăng ký"></Meta>
            <BreadCrumb title="Đăng ký"></BreadCrumb>
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center">Đăng ký</h3>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSignUp} className="d-flex flex-column gap-30">
                                <div className="">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Họ và tên"
                                        className="form-control"
                                        required
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="">
                                    <input
                                        type="tel"
                                        name="tel"
                                        placeholder="Phone number"
                                        className="form-control"
                                        required
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="mt-1">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Mật khẩu"
                                        className="form-control"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mt-1">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Nhập lại mật khẩu"
                                        className="form-control"
                                        required
                                        onChange={(e) => setRepassword(e.target.value)}
                                    />
                                </div>
                                <div className="">
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button type="submit" className="button btn btn-primary border-0">
                                            Đăng ký
                                        </button>
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
};

export default SignUp;
