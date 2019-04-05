import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import "./Footer.css";
import HelLogo from "../imgs/heltunnus_valk.png";
import WaveImg from "../imgs/wave.svg";

class Footer extends React.Component {
  render() {
    const data = this.props.contactData;
    const people = data.people.peoplecards;
    const sitemapElems = this.props.navdata.navdata.map(e => {
    const sitemapSubElems = e.subLinks.map(se => {
      const toObj = {
        pathname: process.env.PUBLIC_URL + se.link,
        search: this.props.english ? "?lang=en" : "",
        hash: se.hash
      }
      return (
        <Link key={se.id} to={toObj} className="ftSitemapLink" scroll={el => el.scrollIntoView({ behavior: "smooth", block: "start"})}>{se.name}</Link>
      );
    });
      return (
        <div key={e.id} className="ftSitemapSub">
          <h4>{e.title}</h4>
          {sitemapSubElems}
        </div>
      );
    });
    const toContacts = {
      pathname: process.env.PUBLIC_URL + "/yhteystiedot",
      search: this.props.english ? "?lang=en" : "",
      hash: "#top"
    }
    return (
      <footer>
        <img className="ftWave" alt="" src={WaveImg} />
        <div className="ftSitemap">
          {sitemapElems}
        </div>
        <div className="ftContent">
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
        <img className="ftHelLogo" alt="" src={HelLogo} />
      </footer>
    )
  }
}

export default Footer;