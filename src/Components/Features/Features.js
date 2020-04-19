import React,{Component} from 'react';
import "./Features.css";
import Feature from './Feature/Feature';
import Featureimage1 from "../../Assets/images/illustration-features-tab-1.svg"

class Features extends Component{
    render() {
        return (
            <div className="Features">
                <div className="Features-container">
                    <h2>Features</h2>
                    <p className="Featura">
                        Our aim is to make it quick and easy
                        for you to access your favourite websites.
                        Your bookmarks sync between your devices so you can access them on the go.
                    </p>
                    <div className="feature-links">
                        <ul>
                            <li>Simple Bookmarking</li>
                            <li>Speedy Searching</li>
                            <li>Easy Sharing</li>
                        </ul>
                    </div>
                    <Feature text = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites." alt="feature1"
                    heading = "Bookmark in one click" src={Featureimage1}  />
                </div>
            </div>
        );
    }
}

export default Features;