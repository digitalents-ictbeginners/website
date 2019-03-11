import React from "react";
import {Link} from "react-router-dom";
import "./TopNavBarElement.css";

class TopNavBarElement extends React.Component {
    constructor(props){
        super(props);
        this.select = this.select.bind(this);
    }

    select(){
        this.props.app.setState(s => {
            return {
                navTab: this.props.index
            }
        });
    }

    render(){
        const elemClass = this.props.index === this.props.openid ? "tnbElem tnbElemOpen" : "tnbElem";
        return (
            <Link className={elemClass} to={this.props.link}>
                <div onMouseEnter={this.select} onClick={this.select}>
                    {this.props.title}
                </div>
            </Link>
        );
    }
}

export default TopNavBarElement;