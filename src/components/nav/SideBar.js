import React from "react";
import "./SideBar.css";
import SideBarDropMenu from "./SideBarDropMenu";
import menuimg from "../../imgs/menu.png";
import ximg from "../../imgs/x.png";
import logoimg from "../../imgs/logo_placeholder.png";

class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(){
        this.props.toggleFunc();
    }

    render(){
        const openstateClass = "sidebarWrapper" + (this.props.open ? " sidebarOpen" : " sidebarClosed");
        const buttonClass = "togglebutton" + (this.props.open ? " buttonOpen" : " buttonClosed");
        const buttonImg = this.props.open ? ximg : menuimg;
        const categories = this.props.data.map(e =>{
            return (
                <SideBarDropMenu key={e.id} toggleFunc={this.props.toggleFunc} title={e.title} data={e.subLinks}/>
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