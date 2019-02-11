import React from "react";
import "./TopNavBarElement.css";

class TopNavBarElement extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen: props.defaultOpen || false
        }
        this.handleHover = this.handleHover.bind(this);
        this.handleUnHover = this.handleUnHover.bind(this);
    }

    handleHover(){
        this.setState(s => {
            return {
                menuOpen: true
            }
        });
        this.props.parent.setState(s => {
            return {
                openIndex: this.props.id
            }
        });
    }

    handleUnHover(){
        this.setState(s => {
            return {
                menuOpen: false
            }
        });
    }

    render(){
        const openClass = this.state.menuOpen ? "tnbElem tnbElemOpen" : "tnbElem tnbElemClosed";
        return (
            <div onMouseEnter={this.handleHover} onMouseLeave={this.handleUnHover} className={openClass}>
                Element
            </div>
        );
    }
}

export default TopNavBarElement;