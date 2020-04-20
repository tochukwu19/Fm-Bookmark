import React from "react";
import "./Extension.css";
import Excard from "./extension-card/extension-card.js";
import chrome from "../../Assets/images/logo-chrome.svg";
import firefox from "../../Assets/images/logo-firefox.svg";
import opera from "../../Assets/images/logo-opera.svg";


const Extension = () => (
    <div className="extension">
        <h2>Download the extension</h2>
        <p className="pdown">We’ve got more browsers in the pipeline. Please do let us know if you’ve 
        got a favourite you’d like us to prioritize.</p>
        <div className="excards">
            <Excard src={chrome} alt="chrome" brand="Add to chrome" sub="Minimum version 62"/>
            <Excard src={firefox} alt="firefox" brand="Add to Firefox" sub="Minimum version 55" className="card2"/>
            <Excard src={opera} alt="opera" brand="Add to Opera" sub="Minimum version 46" className="card3"/>
        </div>    
    </div>
);

export default Extension;