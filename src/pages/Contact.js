import React from "react";
import "./Contact.css";
import Location from "../components/Contacts/Location";
import People from "../components/Contacts/People";

class Contact extends React.Component {

    render(){
        const data = this.props.contactData;
        return (
            <div className="contact" id="top">
                <Location data={data.location} overlay={this.props.overlay} />
                <People data={data.people}/>
            </div>
        );
    }
}

export default Contact;