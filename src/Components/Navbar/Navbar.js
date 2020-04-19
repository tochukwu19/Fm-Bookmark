import React from 'react';
import "./Navbar.css";
import logo from "../../Assets/images/logo-bookmark.svg";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav">
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                        <li className="redlink">Login</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;