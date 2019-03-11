import React from "react";
import "./Person.css";

class Person extends React.Component {

    constructor(props){
        super(props);
        this.image = require("../imgs/people/" + this.props.data.picture);
    }

    render(){
        const data = this.props.data;
        return (
            <div className="person">
                <div className="personText">
                    <h3>{data.name}</h3>
                    <h4><i className="fas fa-briefcase"></i> {data.title}</h4>
                    <h4><i className="fas fa-phone"></i> {data.landline}</h4>
                    <h4><i className="fas fa-mobile-alt"></i> {data.mobile}</h4>
                    <h4><i className="fas fa-envelope"></i> <a className="personEmail" href={"mailto:"+data.email}>{data.email}</a></h4>
                </div>
                <img alt="" src={this.image} className="personImg" />
                <div className="personQuote">
                    <i className="fas fa-quote-left fa-2x"></i>
                    <p>{data.quote}</p>
                    <i className="fas fa-quote-right fa-2x personRightQuote"></i>
                </div>
            </div>
        );
    }
}

export default Person;