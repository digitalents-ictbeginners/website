import React from "react";
import "./MoreInfo.css";

class MoreInfo extends React.Component {
    render(){
        const data = this.props.data;
        return (
            <div id={data.id} className="moreInfoBlock">
                <div className="moreInfoInner">
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                    <h3>{data.toblog}</h3>
                </div>
                <div className="blogtemp">Blog preview tähän</div>
            </div>
        );
    }
}

export default MoreInfo;