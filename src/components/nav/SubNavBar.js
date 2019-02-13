import React from "react";
import {Link} from "react-router-dom";
import "./SubNavBar.css";

class SubNavBar extends React.Component {
    render(){
        const links = this.props.data.map(e => {
            return (
                <div key={e.id}><Link to={e.link}>{e.name}</Link></div>
            )
        });
        return (
            <div className="subNavBar">
                {links}
            </div>
        );
    }
}

export default SubNavBar;