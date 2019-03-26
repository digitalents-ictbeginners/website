import React from "react";
import "./Landing.css";

class Landing extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            scrollIndText: false //false: default, true: after scroll
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.logoimg = require("../../imgs/" + this.props.data.logoimg)
    }

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll(){
        if(document.documentElement.scrollTop > 80 && !this.state.scrollIndText){
            this.setState(s => {
                return {
                    scrollIndText: true
                }
            });
        }
        else if(document.documentElement.scrollTop < 100 && this.state.scrollIndText){
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
            <div>
                <div className="landing">
                    <div className="landingContent">
                        <img className="landingLogo" alt="" src={this.logoimg} />
                        <h1>{data.slogan}</h1>
                    </div>
                </div>
                <div className="scrollIndicator">
                    <i className="fas fa-chevron-circle-down fa-3x"></i>
                    <div className={scrollTextClass}>{data.scrollind}</div>
                </div>
            </div>
        );
    }
}

export default Landing;