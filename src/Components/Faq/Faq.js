import React, { Component } from "react";
import "./Faq.css";
import arrow from "../../Assets/images/icon-arrow.svg"

class Faq extends Component{
    state={
        answer: ""
    }
    render(){
        return(
            <div className="Faq">
                <div className="Faq-container">
                    <h2>Frequently Asked Questions</h2>
                    <p>Here are some of our FAQs. If you have any other questions you’d like 
          answered please feel free to email us.</p>
                    <div className="qa">
                        <div className="question" 
                        onClick={()=> this.setState({answer: this.state.answer === "" ? "answer1" : ""})
                        }><p>What is bookmark?</p>
                        <img src={arrow} alt="arrow" />
                        </div>
                        { this.state.answer === "answer1" ? <div className="answer"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p></div> : null}
                        <div className="question" 
                        onClick={()=> this.setState({answer: this.state.answer === "" ? "answer2" : ""})}
                        ><p>How can I request a new browser?</p>
                        <img src={arrow} alt="arrow" />
                        </div>
                        { this.state.answer === "answer2" ? <div className="answer"><p>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p></div> : null}
                        <div className="question"
                        onClick={()=> this.setState({answer: this.state.answer === "" ? "answer3" : ""})}
                        ><p>What about other Chromium browsers?</p>
                        <img src={arrow} alt="arrow" />
                        </div>
                        { this.state.answer === "answer3" ? <div className="answer"><p>Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                        vitae neque eget nisl gravida pellentesque non ut velit.
                        </p></div> : null}
                        <div className="question"
                        onClick={()=> this.setState({answer: this.state.answer === "" ? "answer4" : ""})}
                        ><p>Is there a mobile app?</p>
                        <img src={arrow} alt="arrow" />
                        </div>
                        { this.state.answer === "answer4" ? <div className="answer"><p>  Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                        sollicitudin ex et ultricies bibendum.</p></div> : null}
                    </div>
                    <a>More info</a>
                </div>
            </div>
        );
    }
} 


export default Faq;