import React from "react";
import "./Contact.css";
import data from "../Contact.json";
import TextBlock from "../components/TextBlock";

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
        const map = `<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=24.919258654117588%2C60.16585541850837%2C24.92373794317246%2C60.16704165634451&amp;layer=mapnik&amp;marker=60.16644854277959%2C24.92149829864502" style="border: 1px solid black"></iframe>
        <br/>
        <small>
            <a href="https://www.openstreetmap.org/?mlat=60.16645&amp;mlon=24.92150#map=19/60.16645/24.92150&amp;layers=N">View Larger Map</a>
        </small>`;
        const html = {__html: map};
        const textBlocks = data.content.map(e => {
            return <TextBlock data={e}/>
          });
        return (
            <div>
                {textBlocks[0]}
                <div className="map" dangerouslySetInnerHTML={html} ></div>
                {textBlocks[1]}
            </div>
        );
    }
}

export default Contact;