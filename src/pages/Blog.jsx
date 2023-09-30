import React, { useState } from "react";
import "./Blog.css";
import { FaTimes } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/BreadCrumb/BreadCrumb";
const Blog = () => {
  const [blogs, setBlog] = useState([
    {
      img: "img/banner/b10.jpg",
      id: uuidv4(),
    },
    {
      img: "img/banner/b22.jpg",
      id: uuidv4(),
    },
    {
      img: "img/banner/b7.jpg",
      id: uuidv4(),
    },
    {
      img: "img/images/blog-1.jpg",
      id: uuidv4(),
    },
  ]);
  const [crossclick, setClick] = useState({
    All: true,
    New: false,
    Latest: false,
    porpular: false,
    brand: false,
    decent: false,
  });
  return (
    <div className="container-xxl p-3">
      <div className="row">
        <Breadcrumb
          items={[
            { lable: "Home", url: "/" },
            { lable: "Blog", url: "/blog" },
          ]}
        />
        <div className="col-2 tags-container">
          <div className="tags">
            <div
              className={crossclick.All ? " active-tag tag" : " tag"}
              onClick={() => {
                setClick({
                  All: false,
                  New: false,
                  Latest: false,
                  porpular: false,
                  brand: false,
                  decent: false,
                });
                setClick((prev) => ({ ...prev, All: !crossclick.All }));
              }}
            >
              All
            </div>
            <div
              className={crossclick.New ? " active-tag tag" : " tag"}
              onClick={() => {
                setClick({
                  All: false,
                  New: false,
                  Latest: false,
                  porpular: false,
                  brand: false,
                  decent: false,
                });
                setClick((prev) => ({ ...prev, New: !crossclick.New }));
              }}
            >
              News
            </div>
            <div
              className={crossclick.Latest ? " active-tag tag" : " tag"}
              onClick={() => {
                setClick({
                  All: false,
                  New: false,
                  Latest: false,
                  porpular: false,
                  brand: false,
                  decent: false,
                });
                setClick((prev) => ({ ...prev, Latest: !crossclick.Latest }));
              }}
            >
              Latest products
            </div>
            <div
              className={crossclick.porpular ? " active-tag tag" : " tag"}
              onClick={() => {
                setClick({
                  All: false,
                  New: false,
                  Latest: false,
                  porpular: false,
                  brand: false,
                  decent: false,
                });
                setClick((prev) => ({
                  ...prev,
                  porpular: !crossclick.porpular,
                }));
              }}
            >
              Porpular Products
            </div>
            <div
              className={crossclick.brand ? " active-tag tag" : " tag"}
              onClick={() => {
                setClick({
                  All: false,
                  New: false,
                  Latest: false,
                  porpular: false,
                  brand: false,
                  decent: false,
                });
                setClick((prev) => ({ ...prev, brand: !crossclick.brand }));
              }}
            >
              brands
            </div>
            <div
              className={crossclick.decent ? " active-tag tag" : " tag"}
              onClick={() => {
                setClick({
                  All: false,
                  New: false,
                  Latest: false,
                  porpular: false,
                  brand: false,
                  decent: false,
                });
                setClick((prev) => ({ ...prev, decent: !crossclick.decent }));
              }}
            >
              Decent Price
            </div>
          </div>
        </div>
        <div className="col-10">
          {blogs.map((blog) => (
            <div className="blog-container  d-flex" key={blog.id}>
              <div className="blog-img-b col position-relative">
                <img src={blog.img} alt="b-img" />
                <div className="video-time position-absolute">22:08</div>
              </div>
              <div className="blog-content col-7">
                <h2>The New Latest Products</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas voluptatum corrupti maiores voluptates saepe harum.
                </p>
                <div className="view">
                  <p>111M view</p>
                </div>
                <Link to={`/blog/${blog.id}`} className="btn">
                  Watch now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
