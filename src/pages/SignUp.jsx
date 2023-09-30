import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/Custom";
import "./Login.css";

const SignUp = () => {
  return (
    <div className="py-5 login-container">
      <div className="w-25 my-5 bg-white mx-auto rounded-3 p-3">
        <br />

        <h3 className="text-center">Sign Up</h3>
        <p className="text-center">Create new account</p>
        <form action="" className="">
          <CustomInput type="name" label="Name" id="Name" />
          <CustomInput type="email" label="Email" id="Email" />
          <CustomInput type="password" label="password" id="password" />

          <Link
            to="/admin"
            type="submit"
            className=" btn px-2 py-3 border-0 login-btn w-100"
          >
            Sign In
          </Link>
          <div>
            <Link to={"/login"}>Already have an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
