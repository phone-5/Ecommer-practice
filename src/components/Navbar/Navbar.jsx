import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="name">
        <Link to="/" className="text-white nav-link">
          PTKShop
        </Link>
      </div>
      <div className="me-lg-3 me-sm-0">
        <ul className="d-flex gap-30 mb-0 align-items-center">
          <li>
            <Link to="/" className="text-white nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="text-white nav-link">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-white nav-link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart className="cart" />
            </Link>
          </li>
          <li className="position-relative">
            <Link to="/login" className="login">
              <UserOutlined className="login" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
