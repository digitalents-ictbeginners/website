import React from "react";
import "./Person.css";

class Person extends React.Component {

    constructor(props){
        super(props);

        //file name of picture from data for this element
        const picfilename = this.props.data.picture;

        if(picfilename){ //if it exists
            //dynamically require the right picture based on filename from data
            const img = require("../../../imgs/people/" + picfilename);

            //create image element if we have an actual image
            this.image = <img alt="" src={img} className="personImg" />
        } else {
            //alternative placeholder image element if we have no real image
            this.image = <div className="personImg"><i className="fas fa-user fa-9x"></i></div>
        }
    }

    render(){
        const data = this.props.data;

        //Render parts:
        //The text part with relevant info about the person,
        //the picture of the person,
        //the quote text element
        return (
            <div className="person">

                <div className="personText">
                    <h3>{data.name}</h3>
                    <h4><i className="fas fa-briefcase"></i> {data.title}</h4>
                    <h4><i className="fas fa-phone"></i> {data.landline}</h4>
                    <h4><i className="fas fa-mobile-alt"></i> {data.mobile}</h4>
                    <h4><i className="fas fa-envelope"></i> <a className="personEmail" href={"mailto:"+data.email}>{data.email}</a></h4>
                </div>

                {this.image}

                <div className="personQuote">
                    <i className="fas fa-quote-left"></i>
                    <p>{data.quote}</p>
                    <i className="fas fa-quote-right personRightQuote"></i>
                </div>

            </div>
        );
    }
}

export default Person;