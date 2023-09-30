import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SpecialClothes = () => {
  const navigate = useNavigate();
  return (
    <div className="s-clothes container-xxl">
      <div className="row">
        <div
          className="col-6 p-3"
          onClick={() => {
            navigate("/shop");
          }}
        >
          <div className="s-img position-relative">
            <img src="img/banner/b18.jpg" alt="image" />
            <div className="sc-detail col-7 position-absolute">
              <h3>Comfort in modren design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, dolorum!
              </p>
              <Link className="btn" to="/shop">
                Go now
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-6 p-3"
          onClick={() => {
            navigate("/shop");
          }}
        >
          <div className="s-img position-relative">
            <img src="img/banner/b16.jpg" alt="image" />
            <div className="sc-detail col-7 position-absolute">
              <h3>Comfort in modren design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, dolorum!
              </p>
              <Link className="btn" to="/shop">
                Go now
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-6 p-3"
          onClick={() => {
            navigate("/shop");
          }}
        >
          <div className="s-img position-relative">
            <img src="img/banner/b17.jpg" alt="image" />
            <div className="sc-detail col-7 position-absolute">
              <h3>Comfort in modren design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, dolorum!
              </p>
              <Link className="btn" to="/shop">
                Go now
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-6 p-3"
          onClick={() => {
            navigate("/shop");
          }}
        >
          <div className="s-img position-relative">
            <img src="img/banner/b10.jpg" alt="image" />
            <div className="sc-detail col-7 position-absolute">
              <h3>Comfort in modren design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, dolorum!
              </p>
              <Link className="btn" to="/shop">
                Go now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialClothes;
