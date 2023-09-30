import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchCProduct,
  fetchDProduct,
  putProductToCart,
  putProductToFav,
} from "../api/api";
import "./Product.css";
import { FaStar } from "react-icons/fa6";
import Breadcrumb from "../components/BreadCrumb/BreadCrumb";

const ProductD = () => {
  const [image, setImage] = useState("1");
  const { id } = useParams();
  const { status, error, mutate } = useMutation({
    mutationFn: putProductToCart,
  });
  const { data, isError, isLoading } = useQuery({
    queryKey: ["dproduct", id],
    queryFn: () => fetchDProduct(id),
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
      <Breadcrumb
        items={[
          { lable: "Home", url: "/" },
          { lable: "Shop", url: "/shop" },
          { lable: "Product", url: `/shop/digital/${id}` },
        ]}
      ></Breadcrumb>
      <div className="promote d-center p-3">
        <h2>Discount if you subscribed my channal</h2>
      </div>
      <div className="row p-3">
        <div className="col-6">
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
            <picture className="col-9 d-picture">
              <img src={image == "1" ? data.image1 : data.image2} alt="image" />
            </picture>
          </div>
        </div>
        <div className="col-6">
          <div className="detail-review col-7">
            <div className="review">
              <h1>Latest technologies</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                sequi nemo debitis inventore, architecto laboriosam itaque
                blanditiis quasi explicabo animi unde, maiores placeat!
                Exercitationem, inventore reprehenderit consequuntur eveniet
                dolorum rerum? 2 years insurance
              </p>

              <div className="rating d-flex">
                <FaStar className="star" />
                <p>4/5</p>
              </div>
              <div className="setting d-flex justify-content-between">
                <div className="price-brand">
                  <h6>Brand: Apple</h6>
                  <h6>
                    Price: <span>{data.price}$</span> <strike>300$</strike>
                  </h6>
                </div>
                <div className="color-container me-5 col-3">
                  <h5>Color</h5>
                  <div className="color col-12 d-flex justify-content-between align-items-center">
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                    <div className="black"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="color-size row d-flex justify-content-center  my-3">
              <button
                className="btn m-4 me-5 col-4"
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
    </div>
  );
};

export default ProductD;
