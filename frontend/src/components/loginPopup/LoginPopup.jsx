import React, { useState } from "react";
import "./loginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" ? (
            <input type="text" placeholder="Your name" required />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create an Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currentState === "Sign Up" ? (
          <p>
            Already have an account{" "}
            <span onClick={() => setCurrentState("Login")}>login here</span>
          </p>
        ) : (
          <p>
            Create a new account{" "}
            <span onClick={() => setCurrentState("Sign Up")}>click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
