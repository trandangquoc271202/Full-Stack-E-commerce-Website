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
import TestImage from "./pages/TestImage";
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
          <Route path="Login"  element={<Login/>}/>
          <Route path="Forgot-password"  element={<ForgotPassword/>}/>
          <Route path="Signup"  element={<SignUp/>}/>
          <Route path="test"  element={<TestImage/>}/>
          {/*<Route path="Detail/:id"  element={<DetailProduct/>}/>*/}
          <Route path="Detail"  element={<DetailProduct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
