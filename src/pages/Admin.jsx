import React from "react";
import SideSlider from "../components/slider/SideSlider";
import "./Admin.css";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { lable: "Home", url: "/" },
          { lable: "Admin", url: "/admin" },
        ]}
      />
      <Link to={"/shop"}>shop</Link>
      <Link to={"/home"}>home</Link>
      <Link to={"/cart"}>cart</Link>
      <SideSlider />
    </div>
  );
};

export default Admin;
