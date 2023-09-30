import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCProduct, putProductToCart, putProductToFav } from "../api/api";
import "./Product.css";
import { FaStar } from "react-icons/fa6";
import Breadcrumb from "../components/BreadCrumb/BreadCrumb";

const Product = () => {
  const [image, setImage] = useState("1");
  const { id } = useParams();

  const { status, error, mutate } = useMutation({
    mutationFn: putProductToCart,
  });
  const { data, isError, isLoading } = useQuery({
    queryKey: ["cproduct", id],
    queryFn: () => fetchCProduct(id),
    enabled: true, // Set this to false if you want to manually trigger fetching
    refetchOnWindowFocus: false,
  });

  if (isLoading) return " Loading...";
  if (isError) return `Error ${error.message}`;

  const handleAddProduct = () => {
    mutate({
      id: data.id,
      image1: data.image1,
      image2: data.image1,
      price: data.price,
      category: data.category,
    });
  };
  return (
    <div className="container-xxl p-3">
      <div className="promote d-center p-3">
        <h2>Discount if you subscribed my channal</h2>
      </div>
      <Breadcrumb
        items={[
          { lable: "Home", url: "/" },
          { lable: "Shop", url: "/shop" },
          { lable: "Product", url: `/shop/clothes/${id}` },
        ]}
      />
      <div className="row">
        <div className="col-5">
          <div className="row">
            <div className="image-s col-3">
              <div
                onClick={() => {
                  setImage("1");
                }}
              >
                <img src={data.image1} alt="image" />
              </div>
              <div
                onClick={() => {
                  setImage("2");
                }}
              >
                <img src={data.image2} alt="image" />
              </div>
            </div>
            <picture className="col-9">
              <img src={image == "1" ? data.image1 : data.image2} alt="image" />
            </picture>
          </div>
        </div>
        <div className="col-7">
          <div className="detail-review col-7">
            <div className="review">
              <h1>Hotest summer Shirt</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                sequi nemo debitis inventore, architecto laboriosam itaque
                blanditiis quasi explicabo animi unde, maiores placeat!
                Exercitationem, inventore reprehenderit consequuntur eveniet
                dolorum rerum?
              </p>
              <div className="rating d-flex">
                <FaStar className="star" />
                <p>4/5</p>
              </div>
              <div className="price-brand">
                <h6>Brand: ASOS</h6>
                <h6>
                  Price: <span>{data.price}$</span> <strike>300$</strike>
                </h6>
              </div>
            </div>

            <div className="color-size row my-3">
              <div className="color-container me-5 col-3">
                <h5>Color</h5>
                <div className="color col-12 d-flex justify-content-between align-items-center">
                  <div className="red"></div>
                  <div className="yellow"></div>
                  <div className="green"></div>
                  <div className="black"></div>
                </div>
              </div>
              <div className="size-container col-6">
                <h5>Size</h5>
                <div className="size-detail col-8 d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column">
                    <label htmlFor="ML">ML</label>
                    <input type="radio" className="radio" id="ML" name="size" />
                  </div>
                  <div className="d-flex flex-column">
                    <label htmlFor="M">M</label>
                    <input type="radio" className="radio" id="M" name="size" />
                  </div>
                  <div className="d-flex flex-column">
                    <label htmlFor="XL">XL</label>
                    <input type="radio" className="radio" id="XL" name="size" />
                  </div>
                  <div className="d-flex flex-column">
                    <label htmlFor="X">X</label>
                    <input type="radio" className="radio" id="X" name="size" />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn m-4 col-4"
              onClick={() => {
                handleAddProduct();
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
