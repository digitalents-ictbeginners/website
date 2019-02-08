import React from "react";
import "./NavBarDropMenu.css";

class NavBarDropMenu extends React.Component {
    constructor(){
        super();
        this.state = {
            menuOpen: false
        }
        this.hoverEnter = this.hoverEnter.bind(this);
        this.hoverExit = this.hoverExit.bind(this);
    }

    hoverEnter(){
        console.log(this.props.text +" now open");
    }

    hoverExit(){
        console.log(this.props.text +" now closed");
    }
    
    render(){
        return (
            <div className="dropMenuHeader">
                <h2 className="dropMenuTitle" onMouseEnter={this.hoverEnter}
                onMouseLeave={this.hoverExit}>
                    {this.props.text}
                </h2>
                <div className="dropMenuContainer">
                
                </div>
            </div>
        );
    }
}

export default NavBarDropMenu;