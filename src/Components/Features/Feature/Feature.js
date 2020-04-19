import React from "react";
import "./Feature.css";

const Feature = (props) => (
    <div className="card">
        <div><img src={props.src} alt={props.alt} /></div>
        <div>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
            <a href="#">More Info</a>
        </div>
    </div>
);

export default Feature;