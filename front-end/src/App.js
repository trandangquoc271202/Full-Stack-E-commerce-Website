import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import DetailProduct from "./pages/DetailProduct";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BlogList from "./pages/BlogList";
import Favorite from "./pages/Favorite";
import DetailBlog from "./pages/DetailBLog";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about"  element={<About/>}/>
          <Route path="Contact"  element={<Contact/>}/>
          <Route path="store"  element={<Store/>}/>
          <Route path="blogs"  element={<BlogList/>}/>
          <Route path="Login"  element={<Login/>}/>
          <Route path="Forgot-password"  element={<ForgotPassword/>}/>
          <Route path="Signup"  element={<SignUp/>}/>
          <Route path="Products/:id"  element={<DetailProduct/>}/>
          <Route path="Cart"  element={<Cart/>}/>
          <Route path="Checkout"  element={<Checkout/>}/>
          <Route path="favorite" element={<Favorite/>}/>
          <Route path="blogs/:id" element={<DetailBlog/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
