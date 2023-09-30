import React, { useState } from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlog] = useState([
    {
      img: "img/banner/b10.jpg",
    },
    {
      img: "img/banner/b22.jpg",
    },
    {
      img: "img/banner/b7.jpg",
    },
    {
      img: "img/images/blog-1.jpg",
    },
  ]);
  return (
    <div className="d-flex">
      {blogs.map((blog) => (
        <div className="blog-card p-2 col-3" key={uuidv4()}>
          <div className="blog-img mb-3">
            <img src={blog.img} alt="image" />
          </div>
          <div className="detail">
            <h4>Price are unbelievable here</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudianda amet velit beatae tenetur.
            </p>
          </div>
          <button
            className="btn"
            onClick={() => {
              navigate("/blog");
            }}
          >
            Read more
          </button>
        </div>
      ))}
    </div>
  );
};

export default Blog;
