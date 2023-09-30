import React, { useEffect, useState } from "react";
import "./Shop.css";
import { v4 as uuidv4 } from "uuid";

import Searchbar from "../components/searchbar/Searchbar";
import Cproduct from "../components/productsShop/Cproduct";
import Dproduct from "../components/productsShop/Dproduct";
import { useGlobalContext } from "../Context";
import Breadcrumb from "../components/BreadCrumb/BreadCrumb";

const Shop = () => {
  const { type, setType } = useGlobalContext();

  return (
    <div className="container-xxl position-relative">
      <div className="row">
        <div className="col-12 p-2">
          <div className="banner">
            <h3>#Unique Discount for This Season</h3>
          </div>
          <Breadcrumb
            items={[
              { lable: "Home", url: "/" },
              { lable: "Shop", url: "/shop" },
            ]}
          />
          <Searchbar />
          {type === "D" ? <Dproduct /> : <Cproduct />}
        </div>
      </div>
    </div>
  );
};

export default Shop;
