import React from "react";
import "./LocationDropdown.css";

class LocationDropdown extends React.Component {
    constructor(){
        super()
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(s => {
            s.open = !s.open;
            return s;
        });
    }

    render(){
        const data = this.props.data;
        const textParagraphs = data.text.map((e, i) => {
            return (
                <p key={i}>{e}</p>
            );
        });
        const contentClass = "locationDropdownContent" + (this.state.open ? " ldcOpen" : " ldcHidden");
        return (
            <div className="locationDropdown">
              <div onClick={this.handleClick} className="locationDropdownHeader">
                <h3>{data.title}</h3>
                { this.state.open ?
                <i className="fas fa-chevron-up"></i> :
                <i className="fas fa-chevron-down"></i>
                }
                
              </div>
              <div className={contentClass}>
                {textParagraphs}
              </div>
            </div>
        );
    }
}

export default LocationDropdown;