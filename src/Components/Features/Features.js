import React,{Component} from 'react';
import "./Features.css";
import Feature from './Feature/Feature';
import Featureimage1 from "../../Assets/images/illustration-features-tab-1.svg";
import Featureimage2 from "../../Assets/images/illustration-features-tab-2.svg";
import Featureimage3 from "../../Assets/images/illustration-features-tab-3.svg";


class Features extends Component{

    state={
        show: "feature1",
        active: "active1"
    }
    render() {
        return (
            <div className="Features">
                <div className="Features-container">
                    <h1>Features</h1>
                    <p className="Featura">
                        Our aim is to make it quick and easy
                        for you to access your favourite websites.
                        Your bookmarks sync between your devices so you can access them on the go.
                    </p>
                    <div className="feature-links">
                        <ul>
                            <li onClick={() =>
                            this.setState({show: "feature1",
                                           active: "active1"
                            })}
                            className={`${this.state.active === "active1" ? "active" : ""}`}
                        >Simple Bookmarking</li>
                            <li onClick={() =>
                            this.setState({show: "feature2",
                            active: "active2"
                            })}
                            className={`${this.state.active === "active2" ? "active" : ""}`}
                        >Speedy Searching</li>
                            <li onClick={() =>
                                this.setState({show: "feature3",
                                               active: "active3"
                                })}
                                className={`${this.state.active === "active3" ? "active" : ""}`}
                                >Easy Sharing</li>
                        </ul>
                    </div>
                    { this.state.show === "feature1" ? <Feature 
                    text = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites" 
                    alt="feature1"
                    heading = "Bookmark in one click" 
                    src={Featureimage1}  /> : this.state.show === "feature2" ? <Feature 
                    text = "  Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks." 
                    alt="feature2"
                    heading = "Intelligent search" src={Featureimage2}  /> : this.state.show === "feature3" ? <Feature 
                    text = " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button." 
                    alt="feature3"
                    heading = "Share your bookmarks" 
                    src={Featureimage3}  /> : null}
                </div>
            </div>
        );
    }
}

export default Features;