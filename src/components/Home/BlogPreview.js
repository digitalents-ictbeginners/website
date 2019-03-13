import React from "react";
import "./BlogPreview.css";

class BlogPreview extends React.Component {
    render(){
        return (
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
        );
    }
}

export default BlogPreview;