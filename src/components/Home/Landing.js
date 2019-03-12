import React from "react";
//import ReactDOM from "react-dom";
import "./Landing.css";

class Landing extends React.Component {

    constructor(){
        super();
        this.state = {
            scrollIndText: false //false: default, true: after scroll
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

    componentWillUnmount(){
        this.wrapper.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll(){
        if(this.wrapper.scrollTop > 80 && !this.state.scrollIndText){
            this.setState(s => {
                return {
                    scrollIndText: true
                }
            });
        }
        else if(this.wrapper.scrollTop < 100 && this.state.scrollIndText){
            this.setState(s => {
                return {
                    scrollIndText: false
                }
            });
        }
    }

    render(){
        const data = this.props.data;
        const scrollTextClass = this.state.scrollIndText ? "scrollText scrollTextVisible" : "scrollText scrollTextHidden";
        return (
            <div className="landing">
                <div className="landingContent">
                    <h3>{data.title}</h3>
                    <h1>{data.slogan}</h1>
                    <h4>{data.subslogan}</h4>
                </div>
                <div className="scrollIndicator">
                    <i className="fas fa-arrow-alt-circle-down fa-4x"></i>
                    <div className={scrollTextClass}>{data.scrollind}</div>
                </div>
            </div>
        );
    }
}

export default Landing;