import React from "react";
import "./TopNavBar.css";
import "./TopNavBarElement";
import TopNavBarElement from "./TopNavBarElement";
import SubNavBar from "./SubNavBar";
import logo from "../imgs/logo_placeholder.png";

class TopNavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openIndex: 0
        }
        console.log(this.props.data);
    }
    render(){
        const navElements = [];
        const subNavBars = [];
        this.props.data.forEach(e => {
            navElements.push(<TopNavBarElement key={e.id} parent={this} index={e.id} openid={this.state.openIndex} title={e.title}/>);
            subNavBars.push(<SubNavBar data={e.subLinks}/>);
        });
        return (
            <div className="topNavBar">
            <img src={logo} alt="" width="64px" />
                <div className="navElementContainer">
                    {navElements}
                </div>
                {subNavBars[this.state.openIndex]}
            </div>
        );
    }
}

export default TopNavBar;