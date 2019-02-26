import React from "react";
import "./Landing.css";

class Landing extends React.Component {
    render(){
        const data = this.props.data;
        return (
            <div className="landing">
                <h3>{data.title}</h3>
                <h1>{data.slogan}</h1>
                <h4>{data.subslogan}</h4>
            </div>
        );
    }
}

export default Landing;