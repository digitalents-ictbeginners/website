import React from "react";
import "./TopNavBar.css";
import "./TopNavBarElement";
import TopNavBarElement from "./TopNavBarElement";
import SubNavBar from "./SubNavBar";

class TopNavBar extends React.Component {
    render(){
        const navElements = [];
        const subNavBars = [""]; //first element is empty, index 0 -> no subnavbar
        this.props.data.navdata.forEach(e => {
            navElements.push(<TopNavBarElement key={e.id} app={this.props.parent} index={e.id+1} openid={this.props.openTab} link={e.link} hash={e.hash} title={e.title} english={this.props.english}/>);
            subNavBars.push(<SubNavBar closeFunc={this.props.closeFunc} english={this.props.english} data={e.subLinks}/>);
        });
        //the wrapper element is just for the underline border
        return (
            <div className="topNavBar" onMouseLeave={this.props.closeFunc}>
                <div className="navElementWrapper">
                    <img className="navLogo" src={this.props.logo} alt=""/>
                    <div className="navElementContainer">
                        {navElements}
                    </div>
                    <div className="langSelector" onClick={this.props.langToggle}>{this.props.data.langswitch}</div>
                </div>
                {subNavBars[this.props.openTab]}
            </div>
        );
    }
}

export default TopNavBar;