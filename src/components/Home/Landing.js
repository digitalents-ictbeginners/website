import React from "react";
import "./Landing.css";

class Landing extends React.Component {

    constructor(){
        super();
        this.state = {
            scrollIndVisible: true
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.wrapper = null;
        this.scrollcount = 0;
    }

    componentDidMount(){
        this.wrapper = document.querySelector(".App .contentWrapper");
        this.wrapper.addEventListener("scroll", this.handleScroll);
    }

    handleScroll(){
        this.scrollcount++;
        if(this.scrollcount > 10){
            this.setState(s => {
                return {
                    scrollIndVisible: false
                }
            });
            this.wrapper.removeEventListener("scroll", this.handleScroll);
        }
    }

    render(){
        const data = this.props.data;
        const scrollIndClass = this.state.scrollIndVisible ? "scrollIndicator" : "scrollIndicator siHidden";
        return (
            <div className="landing">
                <div className="landingContent">
                    <h3>{data.title}</h3>
                    <h1>{data.slogan}</h1>
                    <h4>{data.subslogan}</h4>
                </div>
                <div className={scrollIndClass}>O</div>
            </div>
        );
    }
}

export default Landing;