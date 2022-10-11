import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpen from "@material-ui/icons/LockOpen";
import "../Registeration/Registeration.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../layout/Loader/Loader";

const Login = () => {
  return (
    <>
      <div className="register-container">
        <div className="login-signup-box">
          <form action="" className="login-form">
            <div className="login-email">
              <MailOutlineIcon />
              <input type="text" placeholder="Email" required />
            </div>
            <div className="login-password">
              <LockOpen />
              <input type="password" placeholder="Password" required />
            </div>
            <Link className="forgot-password" to={"/password/forgot"}>Forgot Password ?</Link>
            <input type="submit" value={"Login"} className="login-btn" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
