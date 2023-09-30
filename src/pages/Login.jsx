import React from "react";
import CustomInput from "../components/Custom";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-5 login-container">
      <div className="w-25 my-5 bg-white mx-auto rounded-3 p-3">
        <br />

        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continous</p>
        <form action="" className="">
          <CustomInput type="email" label="Email" id="Email" />
          <CustomInput type="password" label="password" id="password" />
          <div className="forgotp">
            <Link to="/forgotpassword">Forgot password?</Link>
          </div>

          <Link
            to="/admin"
            type="submit"
            className=" btn px-2 py-3 border-0 login-btn w-100"
          >
            Login
          </Link>
          <div>
            <Link to={"/signup"}>Doesn't have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
