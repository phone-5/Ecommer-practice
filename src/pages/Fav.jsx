import React from "react";
import { fetchFav } from "../api/api";
import { useQuery } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa6";
import Heartbtn from "../components/heartbtn";
import "./Fav.css";
import Breadcrumb from "../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";

const Fav = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["favproduct"],
    queryFn: fetchFav,
  });

  if (isLoading) return " Loading...";
  if (isError) return `Error ${error.message}`;
  return (
    <div>
      <Breadcrumb
        items={[
          { lable: "Home", url: "/" },
          { lable: "Favorite", url: "/fav" },
        ]}
      />
      <div className="container-xxl favs-container p-3  d-flex flex-wrap">
        {data.map((p) => (
          <div className="showcase-f col-3" key={p.id}>
            <div className="fav-container position-relative">
              <div className="fimg-container d-flex flex-column">
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
              <div className="id"></div>
              <Heartbtn
                key={p.id}
                className=""
                id={p.id}
                catagory={p.catagory}
              ></Heartbtn>
              <div className="detail">
                <h3>Galaxy 12A</h3>
                <p>Get a robot right in your hand!</p>
                <div>
                  <FaStar className="star" />
                  <span>4/5</span>
                </div>
                <h1>{p.category}</h1>
                <p>
                  price: <span>{p.price}$</span> <strike>5000$</strike>
                </p>
              </div>
              <Link to={``} className="btn">
                Add to cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fav;
