import React from "react";
import "./TopNavBarElement.css";

class TopNavBarElement extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen: props.defaultOpen || false
        }
    }
    render(){
        const openClass = this.state.menuOpen ? "tnbElem tnbElemOpen" : "tnbElem tnbElemClosed";
        return (
            <div className={openClass}>
                Element
            </div>
        );
    }
}

export default TopNavBarElement;