import React from "react";
import "./NavBar.css";

import NavBarDropMenu from "./NavBarDropMenu";

class NavBar extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="navBar">
                <NavBarDropMenu text="Dropmenu 1"/>
                <NavBarDropMenu text="Dropmenu 2"/>
                <NavBarDropMenu text="Dropmenu 3"/>
                <NavBarDropMenu text="Dropmenu 4"/>
                <NavBarDropMenu text="Dropmenu 5"/>
            </div>
        );
    }
}

export default NavBar;