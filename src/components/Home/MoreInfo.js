import React from "react";
import "./MoreInfo.css";

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
                <div className="blogPreview">
                    <div className="blogPreviewCardContainer">
                        <div className="blogPreviewCard"></div>
                        <div className="blogPreviewCard"></div>
                        <div className="blogPreviewCard"></div>
                        <div className="blogPreviewCard"></div>
                        <div className="blogPreviewCard"></div>
                    </div>
                    <div className="blogLinkCard"></div>
                </div>
            </div>
        );
    }
}

export default MoreInfo;