import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import API_URL from "../env/Constants";
const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}/api/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password}),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "Something went wrong.");
                return;
            }
            const data = await response.json();
            const {token, _id, name, email: userEmail} = data;

            localStorage.setItem("token", token);
            localStorage.setItem("_id", _id);
            localStorage.setItem("isLogin", true);
            localStorage.setItem("email", userEmail);
            localStorage.setItem("name", name);
            handleLogin();
            setEmail("");
            setPassword("");
            setError(null);
            navigate("/");
        } catch (error) {
            setError("Login không thành công");
        }
    };
    return (
        <>
            {(localStorage.getItem("isLogin") === "true")?navigate("/") :""}
            <Meta title="Đăng nhập"></Meta>
            <BreadCrumb title="Đăng nhập"></BreadCrumb>
            <div className="login-wrapper py-5 home-weapper-2">
                <div className="">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center">Đăng nhập</h3>
                            <form onSubmit={handleFormSubmit} className="d-flex flex-column gap-30">
                                <div className="">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mt-1">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Mật khẩu"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="">
                                    <Link className="text-dark" to="/forgot-password">
                                        Quên mật khẩu?
                                    </Link>
                                    <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button type="submit" className="button btn btn-primary border-0">
                                            Đăng nhập
                                        </button>
                                        <Link to="/Signup" className="button signup">
                                            Đăng ký
                                        </Link>
                                    </div>
                                </div>
                            </form>
                            {error && <div className="text-danger mt-3">{error}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
