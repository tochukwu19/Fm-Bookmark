import React from "react";
import "./extension-card.css";
import bgdot from '../../../Assets/images/bg-dots.svg'


const excard = (props) => (
    <div className={props.className + " " + "excard"}>
        <img src={props.src} alt={props.alt}/>
        <div className="brand">
            <h3>{props.brand}</h3>
            <p>{props.sub}</p>
        </div>
        <img src={bgdot} alt="bgdot"/>
        <a href="#">Add & Install Extension</a>
    </div>
);

export default excard;