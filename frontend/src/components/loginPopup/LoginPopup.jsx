import React, { useContext, useState } from "react";
import axios from "axios";
import "./loginPopup.css";
import { assets } from "../../assets/assets";
import { storeContext } from "../../context/storeContext";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const { url, setToken } = useContext(storeContext);
  const onChangeHanlder = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };
  return (
    <div className="login-popup">
      <form
        action=""
        className="login-popup-container"
        onSubmit={onSubmitHandler}
      >
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
            <input
              type="text"
              placeholder="Your name"
              name="name"
              value={data.name}
              onChange={onChangeHanlder}
              required
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={data.email}
            onChange={onChangeHanlder}
            required
          />
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value={data.password}
            onChange={onChangeHanlder}
            required
          />
        </div>
        <button type="submit">
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
