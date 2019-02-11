import React from "react";
import "./TopNavBar.css";
import "./TopNavBarElement";
import TopNavBarElement from "./TopNavBarElement";

class TopNavBar extends React.Component {
    constructor(){
        super();
        this.state = {
            openIndex: 0
        }
        this.subNavBars = [
            "",
            <div className="subNavBar">Bar1</div>,
            <div className="subNavBar">Bar2</div>,
            <div className="subNavBar">Bar3</div>,
            <div className="subNavBar">Bar4</div>,
            <div className="subNavBar">Bar5</div>
        ];
    }
    render(){
        return (
            <div className="topNavBar">
                <div className="navElementContainer">
                    <TopNavBarElement parent={this} id={1} defaultOpen/>
                    <TopNavBarElement parent={this} id={2}/>
                    <TopNavBarElement parent={this} id={3}/>
                    <TopNavBarElement parent={this} id={4}/>
                    <TopNavBarElement parent={this} id={5}/>
                </div>
                {this.subNavBars[this.state.openIndex]}
            </div>
        );
    }
}

export default TopNavBar;