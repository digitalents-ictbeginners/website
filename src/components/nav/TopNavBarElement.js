import React from "react";
import {HashLink as Link} from "react-router-hash-link";
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
        const toObj = {
            pathname: this.props.link,
            search: this.props.english ? "?lang=en" : "",
            hash: this.props.hash
        }
        return (
            <Link className={elemClass} to={toObj}>
                <div onMouseEnter={this.select} onClick={this.select}>
                    <span>{this.props.title}</span>
                </div>
            </Link>
        );
    }
}

export default TopNavBarElement;