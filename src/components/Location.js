import React from 'react'
import './Location.css'

export default class Location extends React.Component {
  render() {
    const map = `<iframe class="map" width="${document.documentElement.clientWidth}" height="500" width="100" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=24.919258654117588%2C60.16585541850837%2C24.92373794317246%2C60.16704165634451&amp;layer=mapnik&amp;marker=60.16644854277959%2C24.92149829864502"></iframe>`
    const html = {__html: map};

    return (
      <div className="location">
        <div className="locationInfo" id="sijainti">
          <h2>{this.props.data.location.title}</h2>
          <div className="locationAddressContainer">
            <div className="locationAddress">
              <span className="locationAddressTitle">{this.props.data.location.visitaddress.title}</span>
              <span className="locationText">{this.props.data.location.visitaddress.address}</span>
            </div>
            <div className="locationAddress">
              <span className="locationAddressTitle">{this.props.data.location.postaddress.title}</span>
              <span className="locationText">{this.props.data.location.postaddress.address}</span>
            </div>
          </div>
          <div className="locationDirections">
            <h3>{this.props.data.location.directions.title}</h3>
            <p>{this.props.data.location.directions.text}</p>
          </div>
          <div className="locationPublicTransit">
            <h3>{this.props.data.location.publictransit.title}</h3>
            <p>{this.props.data.location.publictransit.text}</p>
          </div>
        </div>
        <div className="map" dangerouslySetInnerHTML={html} ></div>
      </div>
    )
  }
}
