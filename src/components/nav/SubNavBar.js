import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./SubNavBar.css";

class SubNavBar extends React.Component {
    render(){
        const links = this.props.data.map(e => {
            return (
                <div key={e.id}><Link to={e.link} onClick={this.props.closeFunc} scroll={el => el.scrollIntoView({ behavior: 'smooth' })}>{e.name}</Link></div>
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