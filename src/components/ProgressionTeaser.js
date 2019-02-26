import React from "react";
import "./ProgressionTeaser.css";

class ProgressionTeaser extends React.Component {
    render(){
        const data = this.props.data;
        return (
            <div id={data.id} className="teaser">
                <div className="vLine"></div>
                <h1>{data.title}</h1>
                <h3>{data.item1}</h3>
                <h3>{data.item2}</h3>
                <h2>{data.item3}</h2>
                <i className="fas fa-chevron-down"></i>
            </div>
        );
    }
}

export default ProgressionTeaser;