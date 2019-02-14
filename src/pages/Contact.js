import React from "react";
import "./Contact.css";
import data from "../Contact.json";
import TextBlock from "../components/TextBlock";
import Location from "../components/Location";
import People from "../components/People";

class Contact extends React.Component {

    componentDidMount(){
        this.props.app.setState(s => {
            return {
                mobile: s.mobile,
                sidebarOpen: s.sidebarOpen,
                navTab: this.props.navId
            }
        });
    }

    render(){
        return (
            <div>
                <Location />
                <People />
            </div>
        );
    }
}

export default Contact;