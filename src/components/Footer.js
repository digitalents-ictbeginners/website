import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
import dataFI from "../data/Footer_fi.json";
import dataEN from "../data/Footer_en.json";

class Footer extends React.Component {
  render() {
    const data = this.props.english ? dataEN : dataFI;
    const sitemapElems = this.props.navdata.map(e => {
      const sitemapSubElems = e.subLinks.map(se => {
        return (
          <Link key={se.id} to={se.link} className="ftSitemapLink">{se.name}</Link>
        );
      });
      return (
        <div key={e.id} className="ftSitemapSub">
          <h4>{e.title}</h4>
          {sitemapSubElems}
        </div>
      );
    });
    return (
      <footer>
        <div className="ftSitemap">
          {sitemapElems}
        </div>
        <div className="ftContent">
          <div className="ftPerson">
            <i className="fas fa-user fa-2x"></i>
            <h4>{data.person1.title}</h4>
            <h5>{data.person1.name}</h5>
            <h5>{data.person1.email}</h5>
            <h5>{data.person1.phone}</h5>
          </div>
          <div className="ftPerson">
            <i className="fas fa-user fa-2x"></i>
            <h4>{data.person2.title}</h4>
            <h5>{data.person2.name}</h5>
            <h5>{data.person2.email}</h5>
            <h5>{data.person2.phone}</h5>
          </div>
          <div className="ftLocation">
            <i className="fas fa-map-marker-alt fa-2x"></i><br/>
            <span>{data.streetaddress}</span><br/>
            <span>{data.postnumbercity}</span><br/>
            <span>{data.phonenum}</span><br/>
            <Link to="/yhteystiedot"><h2>{data.morecontacts}</h2></Link>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;