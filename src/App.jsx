import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import State from "./experiment.jsx/state";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Product from "./pages/Product";
import SingleBlog from "./pages/SingleBlog";
import Searchbar from "./components/searchbar/Searchbar";
import Cart from "./pages/Cart";
import Fav from "./pages/Fav";
import Admin from "./pages/Admin";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Forgot from "./pages/Forgot";
import SideSlider from "./components/slider/SideSlider";
import Dashboard from "./pages/Dashboard";
import ProductD from "./pages/ProductD";
import Loading from "./components/Loading";
import SignUp from "./pages/SignUp";
import Enquires from "./components/Dashboard/Enquires";
import AddProduct from "./pages/AddProduct";
function App() {
  return (
    <div className="item-center">
      <Routes>
        <Route path="admin" element={<SideSlider />}>
          <Route index element={<Dashboard />} />
          <Route element={<Enquires />} />
          <Route path="product" element={<AddProduct />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="forgotpassword" element={<Forgot />} />

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Layout />
              <Footer />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="fav" element={<Fav />} />
          <Route path="/shop/clothes/:id" element={<Product />} />
          <Route path="/shop/digital/:id" element={<ProductD />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
