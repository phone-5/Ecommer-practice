import React from "react";
import "./Sproduct.css";
import AutoPlay from "../../experiment.jsx/slilder";

export const Card1 = () => (
  <div className="s-img position-relative">
    <img src="img/images/main-banner-1.jpg" alt="image" />
    <div className="s-detail col-7 position-absolute">
      <h6>Season discount 45% off</h6>
      <h2>
        SAMSAUND Note +20 <br /> super Carmera
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur nisi doloremque? Nam, neque! Iste
        recusandae praesentium quos laudantium!
      </p>
      <p>
        <span>800$</span> <strike>1300$</strike>
      </p>
      <div className="s-btn ">
        <button className="btn">Add to cart</button>
      </div>
    </div>
  </div>
);
export const Card2 = () => (
  <div className="s-img position-relative">
    <img src="img/images/main-banner.jpg" alt="image" />
    <div className="s-detail col-7 position-absolute">
      <h6>Season discount 45% off</h6>
      <h2>
        SAMSAUND Note +20 <br /> super Carmera
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur nisi doloremque? Nam, neque! Iste
        recusandae praesentium quos laudantium!
      </p>
      <p>
        <span>800$</span> <strike>1300$</strike>
      </p>
      <div className="s-btn ">
        <button className="btn">Add to cart</button>
      </div>
    </div>
  </div>
);

const SpecialpDigital = () => {
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-6 p-2">
          <div className="row d-flex">
            <AutoPlay />
          </div>
        </div>
        <div className="col-6">
          <div className="row d-flex flex-wrap">
            <div className="col-6 p-2">
              <div className="s2-img position-relative">
                <img src="img/images/catbanner-01.jpg" alt="image" />
                <div className="s2-detail col-6 position-absolute">
                  <h4>Max laptop 7+</h4>
                  <p>Lorem ipsum dolor sit elit. Vero, non?</p>
                </div>
              </div>
            </div>
            <div className="col-6 p-2">
              <div className="s2-img position-relative">
                <img src="img/images/catbanner-04.jpg" alt="image" />
                <div className="s2-detail col-6 position-absolute">
                  <h4>Max laptop 7+</h4>
                  <p>Lorem ipsum dolor sit elit. Vero, non?</p>
                </div>
              </div>
            </div>
            <div className="col-6 p-2">
              <div className="s2-img position-relative">
                <img src="img/images/catbanner-03.jpg" alt="image" />
                <div className="s2-detail col-6 position-absolute">
                  <h4>Max laptop 7+</h4>
                  <p>Lorem ipsum dolor sit elit. Vero, non?</p>
                </div>
              </div>
            </div>
            <div className="col-6 p-2">
              <div className="s2-img position-relative">
                <img src="img/images/catbanner-02.jpg" alt="image" />
                <div className="s2-detail col-6 position-absolute">
                  <h4>Max laptop 7+</h4>
                  <p>Lorem ipsum dolor sit elit. Vero, non?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialpDigital;
