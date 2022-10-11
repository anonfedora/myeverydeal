import React, { useState } from "react";
import FaceIcon from "@material-ui/icons/Face";
import MailOutline from "@material-ui/icons/MailOutline";
import LockOpen from "@material-ui/icons/LockOpen";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import "./Registeration.css";

const Registeration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  return (
    <>
      <div className="register-container">
        <div className="signup-box">
          <form action="" className="sign-up-form">
            <div className="sign-up-name">
              <FaceIcon />
              <input type="text" placeholder="Name" required name="name" />
            </div>
            <div className="sign-up-email">
              <MailOutline />
              <input type="email" placeholder="Email" required name="email" />
            </div>
            <div className="sign-up-password">
              <LockOpen />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
              />
            </div>
            <div className="register-image">
              <img src="" alt="" />
              <input type="file" name="avatar" accept="image/*" />
            </div>
            <input type="submit" className="sign-up-btn" value={"Register"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Registeration;
