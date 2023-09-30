import React, { useState } from "react";
import "./products.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Clothes = () => {
  const [urls, setUrl] = useState([
    {
      img: "img/products/f1.jpg",
      id: "3",
      title: "Summer shirt Coolest Design",
      price: "200",
      discount: "150",
      Rating: 3,
    },
    {
      img: "img/products/f2.jpg",
      id: "56",
      title: "Summer shirt Coolest Design",
      price: "200",
      discount: "150",
      Rating: 4,
    },
    {
      img: "img/products/f3.jpg",
      id: "1",
      title: "Summer shirt Coolest Design",
      price: "200",
      discount: "150",
      Rating: 5,
    },
    {
      img: "img/products/f4.jpg",
      id: "2",
      title: "Summer shirt Coolest Design",
      price: "200",
      discount: "150",
      Rating: 4,
    },

    {
      img: "img/products/f5.jpg",
      id: "4",
      title: "Summer shirt Coolest Design",
      price: "200",
      discount: "150",
      Rating: 3,
    },
    {
      img: "img/products/f6.jpg",
      id: "5",
      title: "Summer shirt Coolest Design",
      price: "200",
      discount: "150",
      Rating: 3,
    },
  ]);
  return (
    <div className="digital-products p-3 d-flex flex-wrap justify-content-between align-items-center">
      {urls.map((url) => (
        <div key={url.id} className="digital-product p-3 col-lg-2 col-sm-4">
          <div className="img position-relative  d-flex justify-content-center mb-3 align-items-center">
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

export default Clothes;
