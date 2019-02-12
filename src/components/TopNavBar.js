import React from "react";
import "./TopNavBar.css";
import "./TopNavBarElement";
import TopNavBarElement from "./TopNavBarElement";
import SubNavBar from "./SubNavBar";

class TopNavBar extends React.Component {
    constructor(){
        super();
        this.state = {
            openIndex: 0
        }
        this.subNavBars = [
            "",
            <SubNavBar index={1}/>,
            <SubNavBar index={2}/>,
            <SubNavBar index={3}/>,
            <SubNavBar index={4}/>,
            <SubNavBar index={5}/>
        ];
    }
    render(){
        return (
            <div className="topNavBar">
                <div className="navElementContainer">
                    <TopNavBarElement parent={this} index={1} defaultOpen/>
                    <TopNavBarElement parent={this} index={2}/>
                    <TopNavBarElement parent={this} index={3}/>
                    <TopNavBarElement parent={this} index={4}/>
                    <TopNavBarElement parent={this} index={5}/>
                </div>
                {this.subNavBars[this.state.openIndex]}
            </div>
        );
    }
}

export default TopNavBar;