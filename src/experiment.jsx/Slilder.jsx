import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; // Make sure to adjust the path to your CSS file if needed
import { Card1, Card2 } from "../components/SpecialProducts/SpecialpDigital";

const AutoPlay = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="slide-show-container">
      <h2 className="none"></h2>
      <Slider {...settings}>
        <div>
          <Card1 />
        </div>
        <div>
          <Card2 />
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlay;
