import React from 'react'
import data from '../Contact.json'
import './Location.css'

export default class Location extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: data.content[0]
    }
  }
  
  render() {
    const map = `<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=24.919258654117588%2C60.16585541850837%2C24.92373794317246%2C60.16704165634451&amp;layer=mapnik&amp;marker=60.16644854277959%2C24.92149829864502" style="border: 1px solid black"></iframe>`
    const html = {__html: map};

    return (
      <div>
        <div className="locationBlock">
          <h2>{this.state.location.title}</h2>
          {this.state.location.texts.map((location, id) => (
            <div>
              <h3>{location.subtitle}</h3>
              {location.text.map((paragraph, id) => (
                <p>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="map" dangerouslySetInnerHTML={html} ></div>
      </div>
    )
  }
}
