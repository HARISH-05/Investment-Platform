import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import AccountMenu from "./accountmenu";
import Card from "./card";
import Mycard from "./card";
import Footer from "./footer";
export const Dashboard = (props) => {

    return (
    <div >

         <div className="navbar">
         <h1 className="h">UPGRADE</h1>
        < AccountMenu />
        </div>

        
    <div >
        <Mycard/>
        </div>

    <div>
        <Footer/>
        </div>

        </div>
    )
};