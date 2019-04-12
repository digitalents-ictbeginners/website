import React from "react";
import "./Location.css";
import LocationDropdown from "./LocationDropdown";

class Location extends React.Component {
  constructor(){
    super();
    this.openGraphic = this.openGraphic.bind(this);
  }

  //Just an alias for the function that sets the image and opens the overlay
  //currently not used
  /*openGraphic(){
    this.props.overlay.set(ArrivalGraphic);
  }*/

  render() {
    const data = this.props.data;

    //Map arrival method data into LocationDropdown components
    const arrivalmethods = data.directions.arrivalmethods.map(e => {
      return (
        <LocationDropdown key={e.id} data={e} />
      );
    });

    //Render parts:
    //The anchor for hash navigation,
    //the title and the addresses,
    //the directions elements,
    //the maps/graphics/video
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
            <div className="locationDirIntro">
              <p>{data.directions.intro.text[0]}</p>
              <p>{data.directions.intro.text[1]}</p>
            </div>
            {arrivalmethods}
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

          <iframe className="locationDirectionsVideo" title="dirvid" src={data.directions.ytembedsrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          
        </div>

      </div>
    )
  }
}

export default Location;

//unused zoomable graphic element:
/*<div className="locationDirectionsGraphic">
  <img alt="" src={ArrivalGraphic}/>
  <div onClick={this.openGraphic} className="locationDirGrZoomOverlay"><i className="fas fa-search-plus fa-9x"></i></div>
</div>*/