import React, { useState } from "react";
import "./Searchbar.css";
import { FaSearch, FaHeart } from "react-icons/fa";
import { useGlobalContext } from "../../Context";
import { useNavigate } from "react-router-dom";
const Searchbar = () => {
  const [input, setInput] = useState("");
  const { type, setType } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <div className="s-container container-xxl p-0">
      <div className="row px-2">
        <div
          className={
            type === "D"
              ? "Digital categ active col-3 d-center"
              : "Digital categ  col-3 d-center"
          }
          onClick={() => {
            setType("D");
          }}
        >
          <h2>Digital product</h2>
        </div>
        <div className="d-center search-container col-5 d-flex justify-content-center align-items-center">
          <div className="shop-search position-relative m-3">
            <input
              name=""
              id=""
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
              className=" search-input p d-flex justify-content-center align-items-center"
              placeholder="Search Product....."
            />
            <div className=" search-icon position-absolute">
              <FaSearch className="s-icon" />
            </div>
          </div>
        </div>
        <div
          className={
            type === "C"
              ? "clothes categ active col-3 d-center"
              : "clothes categ  col-3 d-center"
          }
          onClick={() => {
            setType("C");
          }}
        >
          <h2>Clothes</h2>
        </div>
        <div
          className="fav col-1 d-flex"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/fav");
          }}
        >
          <div className="fav-icon">
            <div className="img  d-center">
              <FaHeart className="s-heart" />
            </div>

            <p className=" d-center fs-8">
              Favorite <br /> Wishlist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
