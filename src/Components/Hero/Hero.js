import React from "react";
import "./Hero.css";
import heroimg from "../../Assets/images/illustration-hero.svg"

const Hero = () => {
    return (
        <div className="Hero">
            <div className="hero-container">
                <div className="hero-text">
                    <h1>A Simple Bookmark<br></br>Manager</h1>
                    <p>A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="linkgc">
                        <a href="#" className="linka">Get it on Chrome</a>
                        <a href="#" className="linkb">Get it on Firefox</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={heroimg} alt="hero-image"/>
                </div>
            </div>
        </div>
    );
}

export default Hero;