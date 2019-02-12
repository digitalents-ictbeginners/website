import React from "react";
import "./SubNavBar.css";

class SubNavBar extends React.Component {
    render(){
        return (
            <div className="subNavBar">
                <div><a href="link">Link{this.props.index}</a></div>
                <div><a href="link">Link{this.props.index}</a></div>
                <div><a href="link">Link{this.props.index}</a></div>
                <div><a href="link">Link{this.props.index}</a></div>
                <div><a href="link">Link{this.props.index}</a></div>
            </div>
        );
    }
}

export default SubNavBar;