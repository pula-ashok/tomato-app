import React from "react";
import { assets } from "../../assets/assets";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="log" />
      <img src={assets.profile_image} alt="" className="log" />
    </div>
  );
};

export default Navbar;
