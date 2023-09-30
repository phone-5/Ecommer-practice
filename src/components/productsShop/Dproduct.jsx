import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../../pages/Shop.css";
import Heartbtn from "../heartbtn";
import { useQuery } from "@tanstack/react-query";
import { fetchDProducts } from "../../api/api";
import fetchD from "../fetchD";
import Loading from "../Loading";
import Showcase2 from "../showcase2";
const Dproduct = () => {
  const {
    data: dproducts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["dproducts"],
    queryFn: fetchDProducts,
  });
  if (isLoading) return <Loading />;
  if (isError) return `Error ${error.message}`;
  return (
    <div>
      <div className="container-xxl shop-container  products-container d-flex flex-wrap mb-3 ">
        {dproducts.map((p) => (
          <Showcase2 p={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default Dproduct;
