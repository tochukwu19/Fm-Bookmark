/* eslint-disable react/prop-types */
import React from "react";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";


const Layout = (props) => {
    return (
        <>
        <Navbar />
        <div>
            {props.children}
        </div>
        </>
    );
}

export default Layout;