import React from "react"
import {Link} from "react-router-dom";
import "./Footer.css"

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="ftContent">
          <div className="ftPerson">
            <h4>Työvalmentaja</h4>
            <div className="ftFaceImg"></div>
            <h4>Arto Aitta</h4>
          </div>
          <div className="ftPerson">
            <h4>Kouluttaja</h4>
            <div className="ftFaceImg"></div>
            <h4>Krishna Regmi</h4>
          </div>
          <div className="ftLocation">
            <i class="fas fa-map-marker-alt fa-3x"></i><br/>
            <span>Lapinlahdenkatu 16</span><br/>
            <span>00180 HELSINKI</span><br/>
            <span>Puh. 09 123 4567</span><br/>
            <Link to="/yhteystiedot">Lisää yhteystietoja</Link>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;