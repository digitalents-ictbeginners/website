import React from "react";
//import ReactDOM from "react-dom";
import "./Landing.css";

class Landing extends React.Component {

    constructor(){
        super();
        this.state = {
            scrollIndMode: false //false: default, true: after scroll
        }
        this.handleScroll = this.handleScroll.bind(this);
        //this.DOMNode = null;
        this.wrapper = null;
    }

    componentDidMount(){
        //this.DOMNode = ReactDOM.findDOMNode(this);
        this.wrapper = document.querySelector(".App .contentWrapper");
        this.wrapper.addEventListener("scroll", this.handleScroll);
    }

    handleScroll(){
        if(this.wrapper.scrollTop > 80){
            setTimeout(() => {
                this.setState(s => {
                    return {
                        scrollIndMode: true
                    }
                });
            }, 50);
            this.wrapper.removeEventListener("scroll", this.handleScroll);
        }
    }

    render(){
        const data = this.props.data;
        const scrollIndClass = this.state.scrollIndMode ? "scrollIndicator scrollIndicatorStuck" : "scrollIndicator scrollIndicatorFixed";
        const scrollTextClass = this.state.scrollIndMode ? "scrollText scrollTextVisible" : "scrollText scrollTextHidden";
        return (
            <div className="landing">
                <div className="landingContent">
                    <h3>{data.title}</h3>
                    <h1>{data.slogan}</h1>
                    <h4>{data.subslogan}</h4>
                </div>
                <div className={scrollIndClass}>
                    <i className="fas fa-arrow-alt-circle-down fa-4x"></i>
                    <div className={scrollTextClass}>{data.scrollind}</div>
                </div>
            </div>
        );
    }
}

export default Landing;