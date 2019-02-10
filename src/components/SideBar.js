import React from "react";
import "./SideBar.css";
import menuimg from "../imgs/menu.png";
import ximg from "../imgs/x.png";
import logoimg from "../imgs/logo_placeholder.png";

class SideBar extends React.Component {
    constructor(){
        super();
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(){
        this.props.parent.setState(s => {
            return {
                sidebarOpen: !s.sidebarOpen
            }
        });
    }

    render(){
        const parentState = this.props.parent.state;
        const openstateClass = "sidebarWrapper" + (parentState.sidebarOpen ? " sidebarOpen" : " sidebarClosed");
        const buttonClass = "togglebutton" + (parentState.sidebarOpen ? " buttonOpen" : " buttonClosed");
        const buttonImg = parentState.sidebarOpen ? ximg : menuimg;
        return (
            <div className={openstateClass}>
                <button onClick={this.handleButton} className={buttonClass}>
                    <img src={buttonImg} width="32px" alt=""/>
                </button>
                <img src={logoimg} width="240px" alt=""/>
                <div className="sidebar">
                    <h2>Nuorille</h2>
                    <h2>Yrityksille</h2>
                    <h2>Yhteistyötahoille</h2>
                </div>
            </div>
        );
    }
}

export default SideBar;