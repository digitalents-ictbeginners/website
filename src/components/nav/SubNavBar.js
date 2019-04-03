import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./SubNavBar.css";

class SubNavBar extends React.Component {
    constructor(){
        super()
        this.closeSubNav = this.closeSubNav.bind(this);
    }

    closeSubNav(){
        this.props.setSubNav(0); //0 means no subnav
    }

    render(){
        const links = this.props.data.map(e => {
            const toObj = {
                pathname: process.env.PUBLIC_URL + e.link,
                search: this.props.english ? "?lang=en" : "",
                hash: e.hash
            }
            return (
                <Link className="snbLink" key={e.id} to={toObj} onClick={this.closeSubNav} scroll={el => el.scrollIntoView({ behavior: "smooth", block: "start"})}>{e.name}</Link>
            )
        });
        return (
            <div className="subNavBar">
                <div className="snbLinks">
                    {links}
                </div>
            </div>
        );
    }
}

export default SubNavBar;