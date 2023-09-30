import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="col-12">
      <Outlet>
        <Home />
        <About />
        <Shop />
        <Contact />
      </Outlet>
    </div>
  );
};

export default Layout;
