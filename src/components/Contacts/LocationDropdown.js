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

    //click handler to toggle open state
    handleClick(){
        this.setState(s => {
            s.open = !s.open;
            return s;
        });
    }

    render(){
        const data = this.props.data;

        //Map data into text paragraphs
        const textParagraphs = data.text.map((e, i) => {
            return (
                <p key={i}>{e}</p>
            );
        });

        //CSS class depending on open state
        const contentClass = "locationDropdownContent" + (this.state.open ? " ldcOpen" : " ldcHidden");

        //Render parts:
        //The header that contains the title and arrow icon, and
        //the text paragraphs
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