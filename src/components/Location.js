import React from 'react'
import './Location.css'

export default class Location extends React.Component {
  render() {
    const map = `<iframe class="locationMap" width="${document.documentElement.clientWidth}" height="500" width="100" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=24.919258654117588%2C60.16585541850837%2C24.92373794317246%2C60.16704165634451&amp;layer=mapnik&amp;marker=60.16644854277959%2C24.92149829864502"></iframe>`
    const html = {__html: map};
    const data = this.props.data;
    return (
      <div id="sijainti" className="location">

        <h1>{data.location.title}</h1>
        <div className="locationInfo">
          <div className="locationAddressContainer">
            <div className="locationAddress">
              <span className="locationAddressTitle">{data.location.visitaddress.title}</span>
              <span className="locationText">{data.location.visitaddress.address}</span>
            </div>
            <div className="locationAddress">
              <span className="locationAddressTitle">{data.location.postaddress.title}</span>
              <span className="locationText">{data.location.postaddress.address}</span>
            </div>
          </div>

          <h2 className="locationDirectionsTitle">{data.location.directions.title}</h2>
          <div className="locationDirections">
            <div>
              <h3>{data.location.directions.byfoot.title}</h3>
              <p className="locationText">{data.location.directions.byfoot.text}</p>
            </div>
            <div>
              <h3>{data.location.directions.bycar.title}</h3>
              <p className="locationText">{data.location.directions.bycar.text}</p>
            </div>
            <div>
              <h3>{data.location.directions.bypublictransit.title}</h3>
              <p className="locationText">{data.location.directions.bypublictransit.text}</p>
            </div>
          </div>

        </div>

        <div className="locationMapsContainer">
          <div className="locationDirectionsGraphic">Helpful arrival graphic here</div>
          <div className="locationMapWrapper" dangerouslySetInnerHTML={html} ></div>
        </div>

      </div>
    )
  }
}
