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
    }
    render(){
        return (
            <div className="topNavBar">
                <div className="navElementContainer">
                    <TopNavBarElement defaultOpen/>
                    <TopNavBarElement />
                    <TopNavBarElement />
                    <TopNavBarElement />
                    <TopNavBarElement />
                </div>
                
            </div>
        );
    }
}

export default TopNavBar;