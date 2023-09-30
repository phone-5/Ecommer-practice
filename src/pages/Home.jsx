import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import DigitalProducts from "../components/products/DigitalProducts";
import Clothes from "../components/products/Clothes";
import Blog from "../components/Blog/Blog";

import ProductsDe from "../components/products/ProductsDe";
import AutoPlay from "../experiment.jsx/slilder";
import Searchbar from "../components/searchbar/Searchbar";
import { useGlobalContext } from "../Context";

const Home = () => {
  const [products, setProduct] = useState([]);
  const { type, setType } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Searchbar />
      <section
        className={
          type === "D"
            ? "main-container p p-3 container-xxl position-relative"
            : "main-container p-3 container-xxl position-relative"
        }
      >
        <div className="row">
          <div className="col-5 content d-flex flex-column position-absolute">
            <h5>Unique Price For This Season</h5>
            <h1>Clothes That can't Wet!</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              adipisci debitis quisquam impedit repellat non vero molestias
              fugiat sunt, illum labore veniam at voluptate nesciunt natus
              exercitationem? Non, ut tempore?
            </p>
            <p>
              <strike>
                <span className="really-price">$600</span>
              </strike>
              <span>$300</span> <span className="discount">50% off</span>
            </p>
            <div className="col-5 ">
              <Link to="/" className="btn">
                Buy now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-container py-3 d-flex justify-content-evenly align-items-center">
        <div className="feature">
          <div className="feature-img ">
            <img src="img\features\f1.png" alt="feature" />
          </div>
          <h4>Digital shopping</h4>
        </div>
        <div className="feature">
          <div className="feature-img">
            <img src="img\features\f2.png" alt="feature" />
          </div>
          <h4>Save time</h4>
        </div>
        <div className="feature">
          <div className="feature-img">
            <img src="img\features\f3.png" alt="feature" />
          </div>
          <h4>Save money</h4>
        </div>
        <div className="feature">
          <div className="feature-img">
            <img src="img\features\f4.png" alt="feature" />
          </div>
          <h4>Free shipping</h4>
        </div>
        <div className="feature">
          <div className="feature-img">
            <img src="img\features\f5.png" alt="feature" />
          </div>
          <h4>achieve things</h4>
        </div>
        <div className="feature">
          <div className="feature-img">
            <img src="img\features\f6.png" alt="feature" />
          </div>
          <h4>life experience</h4>
        </div>
      </section>
      <ProductsDe />
      <section className="logos py-3 d-flex align-items-center justify-content-evenly">
        <div className="logo-img">
          <img src="img/images/brand-01.png" alt="logo" />
        </div>
        <div className="logo-img">
          <img src="img/images/brand-02.png" alt="logo" />
        </div>
        <div className="logo-img">
          <img src="img/images/brand-03.png" alt="logo" />
        </div>
        <div className="logo-img">
          <img src="img/images/brand-04.png" alt="logo" />
        </div>
        <div className="logo-img">
          <img src="img/images/brand-05.png" alt="logo" />
        </div>
        <div className="logo-img">
          <img src="img/images/brand-06.png" alt="logo" />
        </div>
        <div className="logo-img">
          <img src="img/images/brand-07.png" alt="logo" />
        </div>
      </section>
      <section
        onClick={() => {
          navigate("/contact");
        }}
        className="home-banner"
      >
        <h2>#Contact us</h2>
      </section>
      <section className="blog-container container-xxl mb-3">
        <h3>Latest New</h3>
        <div className="row">
          <Blog />
        </div>
      </section>
    </div>
  );
};

export default Home;
