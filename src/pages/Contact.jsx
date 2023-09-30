import React from "react";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import "./Contact.css";
import Breadcrumb from "../components/BreadCrumb/BreadCrumb";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="container-xxl">
        <div className="banner-c position-relative">
          <img src="img/about/banner.png" alt="image" />
          <div className="talk  position-absolute">let's_create_together</div>
        </div>
        <Breadcrumb
          items={[
            { lable: "Home", url: "/" },
            { lable: "Contact", url: "/contact" },
          ]}
        />
        <div className="row d-flex justify-content-center align-items-center p-3">
          <div className="col-6">
            <ul className="">
              <h2>Visit me</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                aliquam autem ullam minus quae, nisi a sunt provident est
                doloribus?
              </p>
              <li className="mb-3 d-flex gap-10 align-items-center justify-content-start">
                <MdLocationOn />
                <div className="detail-c"> somewhere in myanmar</div>
              </li>
              <li className="mb-3 d-flex gap-10 align-items-center justify-content-start">
                <FaPhone />
                <div className="detail-c">09 9024895945</div>
              </li>
              <li className="mb-3 d-flex gap-10 align-items-center justify-content-start">
                <AiOutlineMail />
                <div className="detail-c">phone@dev.com</div>
              </li>
              <li className="mb-3 d-flex gap-10 align-items-center justify-content-start">
                <IoMdGlobe />
                <div className="detail-c">my website.com</div>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813886.184178297!2d96.51723125625!3d21.012741686786487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6d23f0d27411%3A0x24146be01e4e5646!2sMandalay!5e0!3m2!1sen!2smm!4v1692376486843!5m2!1sen!2smm"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
