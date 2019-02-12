import React from "react";
import "./TopNavBar.css";
import "./TopNavBarElement";
import TopNavBarElement from "./TopNavBarElement";
import SubNavBar from "./SubNavBar";
import logo from "../imgs/logo_placeholder.png";

class TopNavBar extends React.Component {
    constructor(){
        super();
        this.subNavBars = [
            <SubNavBar index={0}/>,
            <SubNavBar index={1}/>,
            <SubNavBar index={2}/>,
            <SubNavBar index={3}/>
        ];
        this.state = {
            openIndex: 0
        }
    }
    render(){
        return (
            <div className="topNavBar">
            <img src={logo} alt="" width="64px" />
                <div className="navElementContainer">
                    <TopNavBarElement parent={this} index={0} openid={this.state.openIndex}/>
                    <TopNavBarElement parent={this} index={1} openid={this.state.openIndex}/>
                    <TopNavBarElement parent={this} index={2} openid={this.state.openIndex}/>
                    <TopNavBarElement parent={this} index={3} openid={this.state.openIndex}/>
                </div>
                {this.subNavBars[this.state.openIndex]}
            </div>
        );
    }
}

export default TopNavBar;