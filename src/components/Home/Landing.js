import React from "react";
//import ReactDOM from "react-dom";
import "./Landing.css";
//import BgImg from "../../imgs/landingbg.png";

class Landing extends React.Component {

    constructor(){
        super();
        this.state = {
            scrollIndText: false //false: default, true: after scroll
        }
        this.handleScroll = this.handleScroll.bind(this);
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

/*
<div className="landingBg">
    <img alt="" src={BgImg}/>
</div>
*/