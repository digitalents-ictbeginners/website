import React from "react";
import "./SubNavBar.css";

class SubNavBar extends React.Component {
    render(){
        const links = this.props.data.map(e => {
            return (
                <div key={e.id}><a href={e.link}>{e.name}</a></div>
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