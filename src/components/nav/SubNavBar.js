import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./SubNavBar.css";

class SubNavBar extends React.Component {
    render(){
        //Map link info from data to JSX
        const links = this.props.data.map(e => {
            //Link data object
            const toObj = {
                pathname: process.env.PUBLIC_URL + e.link,
                search: this.props.english ? "?lang=en" : "",
                hash: e.hash
            }
            //Render link component
            return (
                <Link className="snbLink" key={e.id} to={toObj} onClick={() => {this.props.setSubNav(0)}} scroll={el => el.scrollIntoView({ behavior: "smooth", block: "start"})}>{e.name}</Link>
            )
        });
        //Render the link menu bar, the link container element and the links themselves
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