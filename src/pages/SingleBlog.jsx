import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "./SingleBlog.css";
const SingleBlog = () => {
  return (
    <div className="container-xxl p-5">
      <div className="d-center ">
        <div className="blogv-container d-flex flex-column">
          <div className="v-container d-center">
            <h2>blog video</h2>
          </div>

          <div className="blog-review">
            <h2>Unbelieveable price</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              unde repellendus voluptatum! Ipsum at, laudantium voluptatem eum
              facilis ex commodi? Eum optio, perferendis labore a commodi est
              placeat. Iste, nihil.
            </p>

            <p>111M view</p>

            <button className="icons">
              <FaThumbsUp className="up" />
              <FaThumbsDown className="down" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
