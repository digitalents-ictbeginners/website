import React from "react";
import "./Intro.css";

class Intro extends React.Component {
    render(){
        const data = this.props.data;
        return (
            <div className="introBlock">
                <div id={data.id} className="introAnchor" />
                <div className="introInner">
                    <h2>{data.title}</h2>
                    <p>{data.text[0]}</p>
                    <p>{data.text[1]}</p>
                </div>
            </div>
        );
    }
}



export default Intro;