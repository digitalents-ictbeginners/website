import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import "./TopNavBar.css";
import "./TopNavBarElement";
import TopNavBarElement from "./TopNavBarElement";
import SubNavBar from "./SubNavBar";

class TopNavBar extends React.Component {
    render(){
        //Array of the links that open up sub menus
        const navElements = [];
        const subNavBars = [""]; //first element is empty, index 0 -> no subnavbar
        
        //For each object in data, create a TopNavBarElement and a SubNavBar
        this.props.data.navdata.forEach(e => {
            navElements.push(<TopNavBarElement key={e.id} index={e.id+1} setSubNav={this.props.setSubNav} openid={this.props.openTab} link={e.link} hash={e.hash} title={e.title} english={this.props.english}/>);
            subNavBars.push(<SubNavBar setSubNav={this.props.setSubNav} english={this.props.english} data={e.subLinks}/>);
        });

        //Link data object for the logo link in the top bar
        const logoToObj = {
            pathname: process.env.PUBLIC_URL + this.props.data.navdata[0].link,
            search: this.props.english ? "?lang=en" : "",
            hash: this.props.data.navdata[0].hash
        };

        //Render the parts:
        //The actual bar at the top that contains all the sub menu nav links and the language switcher, and
        //the currently active sub nav menu
        return (
            <div className="topNavBar" onMouseLeave={() => {this.props.setSubNav(0)}}>

                <div className="navElementWrapper">
                    <Link to={logoToObj} scroll={el => el.scrollIntoView({ behavior: "smooth", block: "start"})}><img className="navLogo" src={this.props.logo} alt=""/></Link>
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