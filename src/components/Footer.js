import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import "./Footer.css";
import HelLogo from "../imgs/heltunnus_valk.png";
import DTHLogo from "../imgs/digitalents_logo.png";

class Footer extends React.Component {
  render() {
    //alias for contact data from props
    const data = this.props.contactData;
    //alias for the people part of the data
    const people = data.people.peoplecards;

    //Map data from navdata to JSX to build sitemap
    const sitemapElems = this.props.navdata.navdata.map(e => {

      //Map data to JSX for sub links
      const sitemapSubElems = e.subLinks.map(se => {

        //Link data for sublinks
        const toObj = {
          pathname: process.env.PUBLIC_URL + se.link,
          search: this.props.english ? "?lang=en" : "",
          hash: se.hash
        }
        //return link element for rendering
        return (
          <Link key={se.id} to={toObj} className="ftSitemapLink" scroll={el => el.scrollIntoView({ behavior: "smooth", block: "start"})}>{se.name}</Link>
        );
      });
      //return list of links for a page
      return (
        <div key={e.id} className="ftSitemapSub">
          <h4>{e.title}</h4>
          {sitemapSubElems}
        </div>
      );
    });

    //Link data object for shortcut link to contacts page
    const toContacts = {
      pathname: process.env.PUBLIC_URL + "/yhteystiedot",
      search: this.props.english ? "?lang=en" : "",
      hash: "#top"
    }

    //Render all the parts:
    //The sitemap,
    //The important contacts, and
    //The Helsinki logo
    return (
      <footer>

        <div className="ftSitemap">
          {sitemapElems}
        </div>

        <div className="ftContacts">
          <div className="ftPerson">
            <i className="fas fa-user fa-2x"></i>
            <h4>{people[0].title}</h4>
            <h5>{people[0].name}</h5>
            <h5>{people[0].email}</h5>
            <h5>{people[0].mobile}</h5>
          </div>
          <div className="ftPerson">
            <i className="fas fa-user fa-2x"></i>
            <h4>{people[1].title}</h4>
            <h5>{people[1].name}</h5>
            <h5>{people[1].email}</h5>
            <h5>{people[1].mobile}</h5>
          </div>
          <div className="ftLocation">
            <i className="fas fa-map-marker-alt fa-2x"></i><br/>
            <span>{data.location.visitaddress.address}</span><br/>
            <Link className="ftMoreContacts" to={toContacts}><h2>{this.props.navdata.ftMoreContacts}</h2></Link>
          </div>
        </div>

        <div className="ftLogos">
          <img className="ftDTHLogo" alt="" src={DTHLogo} />
          <img className="ftHelLogo" alt="" src={HelLogo} />
        </div>

      </footer>
    )
  }
}

export default Footer;