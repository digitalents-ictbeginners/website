import React from 'react'
import './Location.css'
import ArrivalGraphic from "../../imgs/arrivalgraphicplaceholder.png";

export default class Location extends React.Component {
  constructor(){
    super();
    this.openGraphic = this.openGraphic.bind(this);
  }

  openGraphic(){
    this.props.overlay.set(ArrivalGraphic);
  }

  render() {
    const data = this.props.data;
    return (
      <div className="location">
        <div id={data.id} className="locationAnchor"/>

        <h1>{data.title}</h1>
        <div className="locationInfo">
          <div className="locationAddressContainer">
            <div className="locationAddress">
              <h4 className="locationAddressTitle">{data.visitaddress.title}</h4>
              <p className="locationText">{data.visitaddress.address}</p>
            </div>
            <div className="locationAddress">
              <h4 className="locationAddressTitle">{data.postaddress.title}</h4>
              <p className="locationText">{data.postaddress.address}</p>
            </div>
          </div>

          <h2 className="locationDirectionsTitle">{data.directions.title}</h2>
          <div className="locationDirections">
            <div className="locationDirSub">
              <h3>{data.directions.intro.title}</h3>
              <p>{data.directions.intro.text[0]}</p>
              <p>{data.directions.intro.text[1]}</p>
            </div>
            <div className="locationDirSub">
              <h3>{data.directions.byfoot.title}</h3>
              <p>{data.directions.byfoot.text[0]}</p>
              <p>{data.directions.byfoot.text[1]}</p>
              <p>{data.directions.byfoot.text[2]}</p>
            </div>
            <div className="locationDirSub">
              <h3>{data.directions.bycar.title}</h3>
              <p>{data.directions.bycar.text}</p>
            </div>
            <div className="locationDirSub">
              <h3>{data.directions.bypublictransit.title}</h3>
              <p>{data.directions.bypublictransit.text[0]}</p>
              <p>{data.directions.bypublictransit.text[1]}</p>
            </div>
          </div>

        </div>

        <div className="locationMapsContainer">
          <div>
            <div className="locationMapWrapper">
              <iframe className="locationMap" title="map" frameBorder="0" scrolling="no" src={data.directions.map.embedsrc}></iframe>
            </div>
            <a className="locationBigMapLink" href={data.directions.map.embedsrc} rel="noopener noreferrer" target="_blank">
              <i className="fas fa-search-plus"></i> {data.directions.map.bigmaptext}
            </a>
          </div>
          <div className="locationDirectionsGraphic">
            <img alt="" src={ArrivalGraphic}/>
            <div onClick={this.openGraphic} className="locationDirGrZoomOverlay"><i className="fas fa-search-plus fa-9x"></i></div>
          </div>
        </div>

      </div>
    )
  }
}
