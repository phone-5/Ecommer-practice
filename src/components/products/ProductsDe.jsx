import React, { useState } from "react";
import SpecialClothes from "../SpecialProducts/SpecialClothes";
import Clothes from "./Clothes";
import DigitalProducts from "./DigitalProducts";
import SpecialpDigital from "../SpecialProducts/SpecialpDigital";
import { useGlobalContext } from "../../Context";

const ProductsDe = () => {
  const { type, setType } = useGlobalContext();
  return (
    <section className="products py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            {type === "D" ? (
              <div>
                <div className="special">
                  <h3 className="ms-3">Special products</h3>
                  <SpecialpDigital />
                </div>
                <div className="switch-btn">
                  <button
                    className={type === "C" ? "btn active" : "btn"}
                    onClick={() => {
                      setType("D");
                    }}
                  >
                    summer shirts
                  </button>
                  <button
                    className={type === "D" ? "btn active" : "btn "}
                    onClick={() => {
                      setType("C");
                    }}
                  >
                    Digital Products
                  </button>
                </div>
                <div className="popular p-3">
                  <h3>Porpular products</h3>
                  <DigitalProducts />
                </div>
              </div>
            ) : (
              <div>
                <div className="popular p-3">
                  <h3>Porpular products</h3>
                  <Clothes />
                </div>
                <div className="switch-btn">
                  <button
                    className={type === "C" ? "btn active" : "btn"}
                    onClick={() => {
                      setType("D");
                    }}
                  >
                    summer shirts
                  </button>
                  <button
                    className={type === "D" ? "btn active" : "btn "}
                    onClick={() => {
                      setType("C");
                    }}
                  >
                    Digital Products
                  </button>
                </div>
                <div className="shop">
                  <h3 className="ms-3">Shopping</h3>
                  <SpecialClothes />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDe;
