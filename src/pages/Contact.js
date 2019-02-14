import React from "react";
import "./Contact.css";
import data from "../Contact.json";
import TextBlock from "../components/TextBlock";
import Location from "../components/Location";

class Contact extends React.Component {
    render(){
        const textBlocks = data.content.map(e => {
            return <TextBlock data={e}/>
        });
        return (
            <div>
                <Location />
                {textBlocks[1]}
            </div>
        );
    }
}

export default Contact;