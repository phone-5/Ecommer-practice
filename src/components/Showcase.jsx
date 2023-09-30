import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Heartbtn from "./heartbtn";
import Alert from "./Alert";

const Showcase = ({ p }) => {
  const [isActive, setIsActive] = useState(
    localStorage.getItem(`alert${p.id}`) === false
  );
  useEffect(() => {
    localStorage.setItem(`alert${p.id}`, isActive);
  }, [isActive]);

  return (
    <>
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
          <Heartbtn
            Key={p.id}
            className=""
            id={p.id}
            category={p.category}
          ></Heartbtn>
          <div className="detail">
            <h3>Design clothes</h3>
            <p>wear everywhere</p>
            <div>
              <FaStar className="star" />
              <span>4/5</span>
            </div>
            <p>
              price: <span>{p.price}$</span> <strike>50$</strike>
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
      </div>
      {isActive ? <Alert p={p} setIsActive={setIsActive} /> : null}
    </>
  );
};

export default Showcase;
