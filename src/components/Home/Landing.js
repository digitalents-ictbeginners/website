import React from "react";
import "./Landing.css";

class Landing extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            scrollIndText: false, //false: default, true: after scroll
            scrollIndVis: true
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
        if(window.scrollY > 80 && !this.state.scrollIndText){
            this.setState(s => {
                s.scrollIndText = true;
                return s;
            });
        }
        if(window.scrollY < 100 && this.state.scrollIndText){
            this.setState(s => {
                s.scrollIndText = false;
                return s;
            });
        }
        if(window.scrollY > 500 && this.state.scrollIndVis){
            this.setState(s => {
                s.scrollIndVis = false;
                return s;
            });
        }
        if(window.scrollY < 400 && !this.state.scrollIndVis){
            this.setState(s => {
                s.scrollIndVis = true;
                return s;
            });
        }
    }

    render(){
        const data = this.props.data;
        const scrollTextClass = this.state.scrollIndText ? "scrollText scrollTextVisible" : "scrollText scrollTextHidden";
        const scrollIndClass = this.state.scrollIndVis ? "scrollIndicator" : "scrollIndicator scrollIndHidden";
        return (
            <div>
                <div className="landing">
                    <div className="landingBg"></div>
                    <div className="landingContent">
                        <img className="landingLogo" alt="" src={this.props.logo} />
                        <div className="sloganContainer">
                            <h1>{data.slogan}</h1>
                        </div>
                        
                    </div>
                </div>
                <div className={scrollIndClass}>
                    <i className="fas fa-chevron-circle-down fa-3x"></i>
                    <div className={scrollTextClass}>{data.scrollind}</div>
                </div>
            </div>
        );
    }
}

export default Landing;