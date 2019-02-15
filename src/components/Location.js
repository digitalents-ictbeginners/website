import React from 'react'
import './Location.css'

export default class Location extends React.Component {
  render() {
    const map = `<iframe width="${document.documentElement.clientWidth}" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=24.919258654117588%2C60.16585541850837%2C24.92373794317246%2C60.16704165634451&amp;layer=mapnik&amp;marker=60.16644854277959%2C24.92149829864502" style="border: 1px solid black"></iframe>`
    const html = {__html: map};

    return (
      <div>
        <div className="locationBlock" id="sijainti">
          <h2>{this.props.data.location.title}</h2>
          <div >
            <h3>{this.props.data.location.visitaddress.title}</h3>
            <p>{this.props.data.location.visitaddress.address}</p>
            <h3>{this.props.data.location.postaddress.title}</h3>
            <p>{this.props.data.location.postaddress.address}</p>
          </div>
        </div>
        <div className="map" dangerouslySetInnerHTML={html} ></div>
      </div>
    )
  }
}
