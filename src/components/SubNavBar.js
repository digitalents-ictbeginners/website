import React from "react";
import "./SubNavBar.css";

class SubNavBar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const links = this.props.data.map(e => {
            return (
                <div><a href={e.link}>{e.name}</a></div>
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