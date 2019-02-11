import React from "react";
import "./SideBarDropMenu.css";

class SideBarDropMenu extends React.Component {
    constructor(){
        super();
        this.state = {
            dropMenuOpen: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("test");
        this.setState(s => {
            return {
                dropMenuOpen: !s.dropMenuOpen
            }
        });
    }

    render(){
        const openClass = this.state.dropMenuOpen ? "sidebarSublinksContainer sscOpen" : "sidebarSublinksContainer";
        return (
            <div className="sidebarDropMenu">
                <h2 onClick={this.handleClick} className="sidebarCategoryTitle">{this.props.title}</h2>
                <div className={openClass}>
                    <a href="none">Link here</a>
                    <a href="none">Link here</a>
                    <a href="none">Link here</a>
                    <a href="none">Link here</a>
                </div>
            </div>
        );
    }
}

export default SideBarDropMenu;