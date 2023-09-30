import React from "react";
import CustomInput from "../components/Custom";
import "./Login.css";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div className="py-5 login-container">
      <div className="w-25 my-5 bg-white mx-auto rounded-3 p-3">
        <br />

        <h3 className="text-center">Forgot password?</h3>
        <p className="text-center">
          Please Enter your register email to get reset password email
        </p>
        <form action="" className="">
          <CustomInput
            type="email"
            placeholder="Enter your email"
            label="Email"
            id="email"
          />

          <Link
            to="/resetpassword"
            type="submit"
            className=" btn px-2 py-3 border-0 login-btn w-100"
          >
            Send link
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
