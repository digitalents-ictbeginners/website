import React from "react";
import "./SideBar.css";
import SideBarDropMenu from "./SideBarDropMenu";
import menuimg from "../imgs/menu.png";
import ximg from "../imgs/x.png";
import logoimg from "../imgs/logo_placeholder.png";

class SideBar extends React.Component {
    constructor(props){
        super(props);
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
        const categories = this.props.data.map(e =>{
            return (
                <SideBarDropMenu key={e.id} title={e.title} data={e.subLinks}/>
            );
        });
        return (
            <div className={openstateClass}>
                <button onClick={this.handleButton} className={buttonClass}>
                    <img src={buttonImg} width="32px" alt=""/>
                </button>
                <img src={logoimg} width="240px" alt=""/>
                <div className="sidebar">
                    {categories}
                </div>
            </div>
        );
    }
}

export default SideBar;