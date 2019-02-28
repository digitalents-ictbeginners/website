import React from 'react'
import './Footer.css'
import logo from '../imgs/logo_placeholder.png'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="contactInfo">
          <p>
            Lapinlahdenkatu 16
            <br />
            00180 HELSINKI
            <br />
            sähköposti@email.fi
          </p>
        </div>
        <img className="footLogo" src={logo} alt="logo" width="200px" />
      </footer>
    )
  }
}

export default Footer;