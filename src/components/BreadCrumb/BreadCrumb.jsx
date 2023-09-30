import React from "react";
import "./Breadcrumb.css";
import { Link, useNavigate } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  const navigate = useNavigate();
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <span key={index} className="breadcrumb-item">
          <Link to={item.url}>{item.lable}</Link>

          {index < items.length - 1 && (
            <span className="breadcrumb-separator">&gt;</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
