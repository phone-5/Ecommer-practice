import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="container-xxl">
      <div className="row">
        <div className="col-2">
          <div className="categorise">
            <h3>Products</h3>
            <li>
              <Link>Summer Clothes</Link>
            </li>
            <li>
              <Link>Rain coat</Link>
            </li>
            <li>
              <Link>TV</Link>
            </li>
            <li>
              <Link>Headphone</Link>
            </li>
            <li>
              <Link>Handphone</Link>
            </li>
          </div>
        </div>
        <div className="col-2">
          <div className="quick-link">
            <h3>Quick link</h3>
            <li>
              <Link>About us</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Return & Exchange</Link>
            </li>
          </div>
        </div>
        <div className="col-2">
          <div className="customer-service">
            <h3>Customer Service</h3>
            <li>
              <Link>Customer Support</Link>
            </li>
            <li>
              <Link>Shipping Information</Link>
            </li>
            <li>
              <Link>Order Tracking</Link>
            </li>
            <li>
              <Link>Size Guide</Link>
            </li>
          </div>
        </div>
        <div className="col-6">
          <form className="connect d-flex justify-content-end flex-column">
            <h2>Let's Stay Connected</h2>
            <p>Enter your email to send an email to us</p>
            <div className="input-email">
              <input
                type="text"
                name=""
                placeholder=" Your Email...."
                value={email}
                onChange={() => {
                  setEmail(e.target.value);
                }}
              />
              <button type="submit" className="">
                SUBMIT
              </button>
            </div>
          </form>
          <div className="follow d-flex flex-column justify-content-center align-items-center">
            <h2>Follow us</h2>
            <div className="icons d-flex">
              <Link>
                <FaFacebook />
              </Link>
              <Link>
                <FaTwitter />
              </Link>
              <Link>
                <FaPinterest />
              </Link>
              <Link>
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="policy">
        <p>
          <Link>Terms of Service | </Link>
          <Link>Privacy Policy | </Link>
          <Link>Refund Policy | </Link>
          <Link>Accessibility Policy</Link>
        </p>
      </div>
      <div className="copy">
        <p>&copy; 2023 Kazuma Design agency, Kazuma</p>
      </div>
    </footer>
  );
};

export default Footer;
