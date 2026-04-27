import React from "react";
import { Link } from "react-router-dom";
import "./HomeNavbar.css"
const HomeNavbar = () => {
  return (
    <div className="main">
        <div className="cont">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/signin">Signin</Link></li>
      </ul>
    </div>
    </div>
  );
};

export default HomeNavbar;