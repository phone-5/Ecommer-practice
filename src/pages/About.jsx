import React from "react";
import "./About.css";
import Breadcrumb from "../components/BreadCrumb/BreadCrumb";

const About = () => {
  return (
    <div className="container-xxl">
      <Breadcrumb
        items={[
          { lable: "Home", url: "/" },
          { lable: "About", url: "/about" },
        ]}
      />
      <div className="row">
        <div className="col-6 banner-img">
          <img src="img/about/a6.jpg" alt="image" />
        </div>
        <div className="col-6 about-content d-flex flex-column align-items-center justify-content-center">
          <h2>I'm just a beginner web developer</h2>
          <p className="col-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in
            possimus, repellendus assumenda non nulla, voluptates est culpa
            error rem nobis tempora. Eos nulla porro nostrum assumenda
            laudantium enim nesciunt, blanditiis accusantium facilis quam iste.
            Sequi modi amet totam incidunt voluptatem repudiandae, vero maxime
            ut beatae dolor. Quibusdam, quia velit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
