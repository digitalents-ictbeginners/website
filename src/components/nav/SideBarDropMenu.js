import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./SideBarDropMenu.css";

class SideBarDropMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dropMenuOpen: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(s => {
            return {
                dropMenuOpen: !s.dropMenuOpen
            }
        });
    }

    render(){
        const openClass = this.state.dropMenuOpen ? "sidebarSublinksContainer sscOpen" : "sidebarSublinksContainer";
        const links = this.props.data.map(e => {
            return(
                <div key={e.id}><Link to={e.link} scroll={el => el.scrollIntoView({ behavior: 'smooth' })}>{e.name}</Link></div>
            );
        });
        return (
            <div className="sidebarDropMenu">
                <h2 onClick={this.handleClick} className="sidebarCategoryTitle">{this.props.title}</h2>
                <div className={openClass}>
                    {links}
                </div>
            </div>
        );
    }
}

export default SideBarDropMenu;