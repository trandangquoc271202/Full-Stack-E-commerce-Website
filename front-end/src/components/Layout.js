import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({isLoggedIn, handleLogout}) => {
    return <>
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Outlet/>
        <Footer/>
    </>
}
export default Layout;
