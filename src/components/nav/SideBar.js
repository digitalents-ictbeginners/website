import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import "./SideBar.css";

class SideBar extends React.Component {
    render(){
        //CSS class for open or closed state
        const openstateClass = "sidebar" + (this.props.open ? " sidebarOpen" : " sidebarClosed");

        //Map link data from props to JSX
        const links = this.props.data.navdata.map(e =>{
            //link data object for top level link
            const mainto = {
                pathname: process.env.PUBLIC_URL + e.link,
                search: this.props.english ? "?lang=en" : "",
                hash: e.hash
            }
            //Map the sublink data to JSX
            const sublinks = e.subLinks.map(esub => {
                //link data object for sub level link
                const subto = {
                    pathname: process.env.PUBLIC_URL + esub.link,
                    search: this.props.english ? "?lang=en" : "",
                    hash: esub.hash
                }
                //return sublink component for rendering
                return (
                    <Link key={esub.id} className="sidebarLink" to={subto} onClick={this.props.toggle}>
                        <h4 className="sidebarSubLink">{esub.name}</h4>
                    </Link>
                );
            });
            //return element that contains main level link component and sublinks
            return (
                <div key={e.id}>
                    <Link className="sidebarLink" to={mainto} scroll={el => el.scrollIntoView({ behavior: "smooth", block: "start"})} onClick={this.props.toggle}>
                        <h2 className="sidebarMainLink">{e.title}</h2>
                    </Link>
                    <div className="sidebarSubLinkContainer">
                        {sublinks}
                    </div>
                </div>
            );
        });
        //link data object for the logo link
        const logoToObj = {
            pathname: process.env.PUBLIC_URL + this.props.data.navdata[0].link,
            search: this.props.english ? "?lang=en" : "",
            hash: this.props.data.navdata[0].hash
        };
        //render the parts of this component:
        //the top bar with the open button and a logo,
        //the background that covers the rest of the page when sidebar is open and
        //the sidebar itself which contains all the links, a close button the language switch button
        return (
            <div>

                <div className="sidebarTopBar">
                    <div className="sidebarOpener" onClick={this.props.toggle}>
                        <i className="fas fa-bars fa-2x"></i>
                    </div>
                    <Link to={logoToObj} scroll={el => el.scrollIntoView({ behavior: "smooth", block: "start"})}><img className="sidebarTopBarLogo" alt="" src={this.props.logo} /></Link>
                </div>


                <div className={"sidebarBackground" + (this.props.open ? " sidebarBgVisible" : "")} onClick={this.props.toggle}></div>


                <div className={openstateClass}>
                    <div className="sidebarHeader">
                        <div onClick={this.props.langToggle} className="sidebarLangSwitch">
                            <h4>{this.props.data.langswitch}</h4>
                        </div>
                        <div className="sidebarCloser" onClick={this.props.toggle}>
                            <i className="fas fa-times fa-2x"></i>
                        </div>
                    </div>
                    <div className="sidebarContentWrapper">
                        <div className="sidebarContent">
                            {links}
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default SideBar;