import React from "react";
import "./Contact.css";
import dataFI from "../data/Contact_fi.json";
import dataEN from "../data/Contact_en.json";
import Location from "../components/Location";
import People from "../components/People";

class Contact extends React.Component {

    render(){
        const data = this.props.english ? dataEN : dataFI;
        return (
            <div>
                <Location data={data} overlay={this.props.overlay} />
                <People data={data}/>
            </div>
        );
    }
}

export default Contact;