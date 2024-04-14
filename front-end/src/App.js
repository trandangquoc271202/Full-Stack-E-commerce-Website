import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import DetailProduct from "./pages/DetailProduct";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about"  element={<About/>}/>
          <Route path="Contact"  element={<Contact/>}/>
          <Route path="Login"  element={<Login/>}/>
          {/*<Route path="Detail/:id"  element={<DetailProduct/>}/>*/}
          <Route path="Detail"  element={<DetailProduct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
