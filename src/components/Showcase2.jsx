import React from "react";
import Heartbtn from "./heartbtn";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import Alert from "./Alert";
import { useMutation } from "@tanstack/react-query";

const Showcase2 = ({ p }) => {
  const [isActive, setIsActive] = useState(
    localStorage.getItem(`alert${p.id}`) === false
  );
  useEffect(() => {
    localStorage.setItem(`alert${p.id}`, isActive);
  }, [isActive]);

  return (
    <div className="showcase col-3" key={p.id}>
      <div className="product-container position-relative">
        <div className="simg-container d-flex flex-column">
          <img
            src={p.image1}
            alt="image"
            className={!p.image2 ? "d-block" : undefined}
          />
          <img
            src={p.image2}
            alt="image"
            className={!p.image2 ? "d-none" : undefined}
          />
        </div>
        <div className="id"></div>
        <Heartbtn
          key={p.id}
          className=""
          id={p.id}
          catagory={p.catagory}
        ></Heartbtn>
        <div className="detail">
          <h3>Galaxy 12A</h3>
          <p>Get a robot right in your hand!</p>
          <div>
            <FaStar className="star" />
            <span>4/5</span>
          </div>
          <p>
            price: <span>{p.price}$</span> <strike>5000$</strike>
          </p>
          <div className="m-3">
            <button
              className="btn"
              onClick={() => {
                setIsActive(true);
              }}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
      {isActive ? <Alert p={p} setIsActive={setIsActive} /> : null}
    </div>
  );
};

export default Showcase2;
