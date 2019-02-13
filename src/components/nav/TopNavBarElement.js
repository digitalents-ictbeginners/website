import React from "react";
import "./TopNavBarElement.css";

class TopNavBarElement extends React.Component {
    constructor(props){
        super(props);
        this.select = this.select.bind(this);
    }

    select(){
        this.props.parent.setState(s => {
            return {
                openIndex: this.props.index
            }
        });
    }

    render(){
        const openClass = this.props.index === this.props.openid ? "tnbElem tnbElemOpen" : "tnbElem tnbElemClosed";
        return (
            <div onMouseEnter={this.select} onClick={this.select} className={openClass}>
                {this.props.title}
            </div>
        );
    }
}

export default TopNavBarElement;