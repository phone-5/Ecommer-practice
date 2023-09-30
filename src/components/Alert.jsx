import { useMutation } from "@tanstack/react-query";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { putProductToCart } from "../api/api";

const Alert = ({ p, setIsActive }) => {
  const navigate = useNavigate();
  const { status, error, mutate } = useMutation({
    mutationFn: putProductToCart,
  });
  const handleAddProduct = (data) => {
    mutate({
      id: data.id,
      image1: data.image1,
      image2: data.image1,
      price: data.price,
      category: data.category,
    });
  };
  return (
    <div className="position-relative">
      <div className={"alert"}>
        <h3>hello buy it now</h3>
        <h2>id:{p.id}</h2>
        <div className={`buttons`}>
          <button
            className="btn"
            onClick={() => {
              handleAddProduct(p);
              setIsActive(false);
            }}
          >
            buy
          </button>
          <button
            onClick={() => {
              setIsActive(false);
              p.category == "clothes"
                ? navigate(`/shop/clothes/${p.id}`)
                : navigate(`/shop/digital/${p.id}`);
            }}
            className="btn"
          >
            detail
          </button>
        </div>
        <FaTimes
          className="position-absolute cross-icon fs-5"
          onClick={() => {
            setIsActive(false);
          }}
        />
      </div>
    </div>
  );
};

export default Alert;
