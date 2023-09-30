import React from "react";
import CustomInput from "../components/Custom";
import "./Login.css";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="py-5 login-container">
      <div className="w-25 my-5 bg-white mx-auto rounded-3 p-3">
        <br />

        <h3 className="text-center">Reset password</h3>
        <p className="text-center">Please Enter your new password</p>
        <form action="" className="">
          <CustomInput type="password" label="New password" id="New password" />
          <CustomInput
            type="password"
            label="Comfirm password"
            id="Comfirm password"
          />

          <Link
            to="/admin"
            type="submit"
            className=" btn px-2 py-3 border-0 login-btn w-100"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
