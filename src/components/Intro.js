import React from "react";
import "./Intro.css";

class Intro extends React.Component {
    render(){
        const data = this.props.data;
        return (
            <div id={data.id} className="introBlock">
                <div className="introInner">
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                    <h4>{data.question}</h4>
                    <h3>{data.joinus}</h3>
                </div>
            </div>
        );
    }
}



export default Intro;