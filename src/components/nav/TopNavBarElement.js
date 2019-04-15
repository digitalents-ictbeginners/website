import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import "./TopNavBarElement.css";

class TopNavBarElement extends React.Component {
    constructor(props){
        super(props);
        this.selectSubNav = this.selectSubNav.bind(this);
    }

    //Just a less verbose alias for the function that sets this as the selected menu link thing.
    selectSubNav(){
        this.props.setSubNav(this.props.index);
    }

    render(){
        //CSS class based on whether this menu link is selected or not
        const elemClass = this.props.index === this.props.openid ? "tnbElem tnbElemOpen" : "tnbElem";

        //Link data for the menu link
        const toObj = {
            pathname: process.env.PUBLIC_URL + this.props.link,
            search: this.props.english ? "?lang=en" : "",
            hash: this.props.hash
        }

        //Render the link element
        return (
            <Link className={elemClass} to={toObj}>
                <div onMouseEnter={this.selectSubNav} onClick={this.selectSubNav}>
                    <span>{this.props.title}</span>
                </div>
            </Link>
        );
    }
}

export default TopNavBarElement;