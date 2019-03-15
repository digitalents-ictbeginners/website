import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import "./SideBar.css";
import logoimg from "../../imgs/logo_placeholder.png";

class SideBar extends React.Component {
    
    render(){
        const openstateClass = "sidebar" + (this.props.open ? " sidebarOpen" : " sidebarClosed");
        const links = this.props.data.navdata.map(e =>{
            const mainto = {
                pathname: e.link,
                search: this.props.english ? "?lang=en" : "",
                hash: e.hash
            }
            const sublinks = e.subLinks.map(esub => {
                const subto = {
                    pathname: esub.link,
                    search: this.props.english ? "?lang=en" : "",
                    hash: esub.hash
                }
                return (
                    <Link key={esub.id} className="sidebarLink" to={subto} onClick={this.props.toggle}>
                        <h4 className="sidebarSubLink">{esub.name}</h4>
                    </Link>
                );
            });
            return (
                <div key={e.id}>
                    <Link className="sidebarLink" to={mainto} scroll={el => el.scrollIntoView({ behavior: 'smooth' })} onClick={this.props.toggle}>
                        <h2 className="sidebarMainLink">{e.title}</h2>
                        <div className="sidebarSubLinkContainer">
                            {sublinks}
                        </div>
                    </Link>
                </div>
            );
        });
        return (
            <div>
                <div className="sidebarTopBarWrapper">
                    <div className="sidebarTopBar">
                        <div className="sidebarOpener" onClick={this.props.toggle}>
                            <i className="fas fa-bars fa-2x"></i>
                        </div>
                        <img className="sidebarTopBarLogo" alt="" src={logoimg} />
                    </div>
                </div>
                <div className={"sidebarBackground" + (this.props.open ? " sidebarBgVisible" : "")} onClick={this.props.toggle}></div>
                <div className={openstateClass}>
                    <div className="sidebarLangSwitch">{this.props.data.langswitch}</div>
                    <div className="sidebarCloser" onClick={this.props.toggle}>
                        <i className="fas fa-times fa-2x"></i>
                    </div>
                    <div className="sidebarContent">
                        {links}
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;