import React from "react";
import "./Footer.css";
import Logo from "../../Assets/images/logo-bookmark.svg";
import Facebook from "../../Assets/images/icon-facebook.svg";
import Twitter from "../../Assets/images/icon-twitter.svg";


const Footer = () => (
    <div className="footer">
        <div className="foot">
            <p>35,000+ already joined</p>
            <h2>Stay up-to-date with what we’re doing</h2>
            <div className="form">
                <input type="text"/>
                <a>Contact us</a>
            </div>
        </div>
        <div className="footer-container">
            <div>
                <li><img src={Logo} alt="logo"/></li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
            </div>
            <div>
                <img src={Facebook} alt="facebook"/>
                <img src={Twitter} alt="twitter"/>
            </div>
        </div>
    </div>
);

export default Footer;