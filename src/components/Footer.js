import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
import data from "../Footer.json";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="ftContent">
          <div className="ftPerson">
            <h4>{data.person1.title}</h4>
            <div className="ftFaceImg"></div>
            <h4>{data.person1.name}</h4>
          </div>
          <div className="ftPerson">
            <h4>{data.person2.title}</h4>
            <div className="ftFaceImg"></div>
            <h4>{data.person2.name}</h4>
          </div>
          <div className="ftLocation">
            <i className="fas fa-map-marker-alt fa-3x"></i><br/>
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