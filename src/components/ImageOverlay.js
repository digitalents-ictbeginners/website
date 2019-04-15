import React from "react";
import "./ImageOverlay.css";

class ImageOverlay extends React.Component {
    render(){

        //overlay css class depending on state
        const overlayClass = this.props.open ? "fixedOverlay foVisible" : "fixedOverlay foHidden";

        return (
            <div className={overlayClass}>
                <i onClick={this.props.closeFunc} className="foCloser fas fa-times fa-4x"></i>
                <div className="foContent">
                    <img alt="" src={this.props.img}/>
                </div>
            </div>
        );
    }
}

export default ImageOverlay;