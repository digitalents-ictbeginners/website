import React from "react";
import "./Contact.css";
import data from "../Contact.json";
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
                <Location data={data} />
                <People data={data}/>
            </div>
        );
    }
}

export default Contact;