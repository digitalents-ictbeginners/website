import React from "react";
import "./SideBar.css";

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
        const buttonClass = "togglebutton" + (parentState.sidebarOpen ? " buttonOpen" : " buttonClose");
        return (
            <div className={openstateClass}>
                <button onClick={this.handleButton} className={buttonClass}>
                {parentState.sidebarOpen ? "⏴" : "⏵"}
                </button>
                <div className="sidebar">
                    <h2>Sidebar Item 1</h2>
                    <h2>Sidebar Item 2</h2>
                    <h2>Sidebar Item 3</h2>
                    <h2>Sidebar Item 4</h2>
                    <h2>Sidebar Item 5</h2>
                    <h2>Sidebar Item 6</h2>
                </div>
            </div>
        );
    }
}

export default SideBar;