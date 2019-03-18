import React from "react";
import "./MoreInfo.css";
import BlogPreview from "./BlogPreview";

class MoreInfo extends React.Component {
    render(){
        const data = this.props.data;
        //Blog preview cards should eventually be independent components
        return (
            <div id={data.id} className="moreInfoBlock">
                <div id={data.id} className="moreInfoAnchor" />
                <div className="moreInfoInner">
                    <h2>{data.title}</h2>
                    <p>{data.text[0]}</p>
                    <p>{data.text[1]}</p>
                    <p>{data.text[2]}</p>
                </div>
                <BlogPreview title={data.toblog}/>
            </div>
        );
    }
}

export default MoreInfo;