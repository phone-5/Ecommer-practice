import React, { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../../pages/Shop.css";
import Heartbtn from "../heartbtn";
import { useQuery } from "@tanstack/react-query";
import { fetchCProducts } from "../../api/api";
import Loading from "../Loading";
import Showcase from "../Showcase";
const Cproduct = () => {
  const {
    data: cproducts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["cproducts"],
    queryFn: fetchCProducts,
  });
  if (isLoading) return <Loading />;
  if (isError) return `Error ${error.message}`;
  const dblock = "d-block";
  return (
    <div>
      <div className="container-xxl  shop-container  products-container d-flex flex-wrap mb-3 ">
        {cproducts.map((p) => (
          <Showcase p={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default Cproduct;
