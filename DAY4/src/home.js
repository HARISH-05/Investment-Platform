import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
export const Home = (props) => {
    return (
      <div className="b1">
         <div className="navbar">
      <div className="links">
        <h1 className="h">Home</h1>
        <h1 className="h1">UPGRADE</h1>
        <Link to="/login"> Login </Link>
        <Link to="/register"> Register </Link>
      </div>
    </div>
    <h1><center>Welcome to our Investment Platform</center></h1><br/>
    <h2><center>"An investment in knowledge pays the best interest." — Benjamin Franklin</center></h2>
</div>
    )
};