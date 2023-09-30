import React, { useState } from "react";
import "./products.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const DigitalProducts = () => {
  const [urls, setUrl] = useState([
    {
      img: "img/images/tab.jpg",
      id: "3",
      title: "SAMSUNG Note 10+ tablet",
      price: "1200",
      discount: "700",
      Rating: 3,
    },
    {
      img: "img/images/homeapp.jpg",
      id: "56",
      title: "SAMSUNG Note 10+ tablet",
      price: "1200",
      discount: "700",
      Rating: 4,
    },
    {
      img: "img/images/acc.jpg",
      id: "1",
      title: "SAMSUNG Note 10+ tablet",
      price: "1200",
      discount: "700",
      Rating: 5,
    },
    {
      img: "img/images/watch.jpg",
      id: "2",
      title: "SAMSUNG Note 10+ tablet",
      price: "1200",
      discount: "700",
      Rating: 4,
    },

    {
      img: "img/images/speaker.jpg",
      id: "4",
      title: "SAMSUNG Note 10+ tablet",
      price: "1200",
      discount: "700",
      Rating: 3,
    },
    {
      img: "img/images/laptop.jpg",
      id: "5",
      title: "SAMSUNG Note 10+ tablet",
      price: "1200",
      discount: "700",
      Rating: 3,
    },
  ]);
  return (
    <div className="digital-products p-3 d-flex justify-content-between align-items-center">
      {urls.map((url) => (
        <div key={url.id} className="digital-product px-3 col-2">
          <div className="img position-relative  d-flex justify-content-center mb-3  align-items-center">
            <img src={url.img} alt="image" />
            <FaHeart size={20} className="heart  position-absolute d-flex" />
          </div>

          <div className="product-details">
            <h5>{url.title}</h5>
            <div className="rating d-flex flex-row align-items-center">
              <FaStar size={16} className=" rate" />
              <p>{url.Rating}/5</p>
            </div>
            <p className="price">
              <span>{url.discount}$</span>
              <strike>{url.price}$</strike>
            </p>
          </div>
          <div className="add-to-cart">
            <Link className="btn">Add to cart</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DigitalProducts;
