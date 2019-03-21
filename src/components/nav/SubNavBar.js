import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./SubNavBar.css";

class SubNavBar extends React.Component {
    render(){
        const links = this.props.data.map(e => {
            const toObj = {
                pathname: e.link,
                search: this.props.english ? "?lang=en" : "",
                hash: e.hash
            }
            return (
                <div key={e.id}><Link to={toObj} onClick={this.props.closeFunc} scroll={el => el.scrollIntoView({ behavior: "smooth", block: "start"})}>{e.name}</Link></div>
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