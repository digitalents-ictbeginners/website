import React from "react";
import "./MoreInfo.css";
import BlogPreview from "./BlogPreview";

class MoreInfo extends React.Component {
    render(){
        const data = this.props.data;
        //Blog preview cards should eventually be independent components
        return (
            <div id={data.id} className="moreInfoBlock">
                <div className="moreInfoInner">
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                    <h3>{data.toblog}</h3>
                </div>
                <BlogPreview />
            </div>
        );
    }
}

export default MoreInfo;