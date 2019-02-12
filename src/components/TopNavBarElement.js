import React from "react";
import "./TopNavBarElement.css";

class TopNavBarElement extends React.Component {
    constructor(props){
        super(props);
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(){
        this.props.parent.setState(s => {
            return {
                openIndex: this.props.index
            }
        });
    }

    render(){
        const openClass = this.props.index === this.props.openid ? "tnbElem tnbElemOpen" : "tnbElem tnbElemClosed";
        return (
            <div onMouseEnter={this.handleHover} className={openClass}>
                Element
            </div>
        );
    }
}

export default TopNavBarElement;