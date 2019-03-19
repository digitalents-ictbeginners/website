import React from "react";
import "./BlogPreview.css";
import Data from "../../data/blog.json";

class BlogPreview extends React.Component {
    constructor(){
        super();
        this.data = Data; //not sure why this makes it work
        this.monimg = require("../../imgs/blogpreview/" + this.data.monday.backgroundimage);
        this.wedimg = require("../../imgs/blogpreview/" + this.data.wednesday.backgroundimage);
        this.friimg = require("../../imgs/blogpreview/" + this.data.friday.backgroundimage);
    }

    bgstyle(img){
        return {
            backgroundImage: `url(${img})`,
            backgroundSize: "cover"
        }
    }

    render(){
        return (
            <div>
                <h3 className="blogPreviewTitle">{this.props.title}</h3>
                <div className="blogPreview">
                    <a href={Data.monday.link} rel="noopener noreferrer" target="_blank">
                        <div style={this.bgstyle(this.monimg)} className="blogPreviewCard bpcPost">
                            <h4>{Data.monday.date}</h4>
                            <h3>{Data.monday.title}</h3>
                            <p>{Data.monday.text}</p>
                        </div>
                    </a>
                    <a href={Data.wednesday.link} rel="noopener noreferrer" target="_blank">
                        <div style={this.bgstyle(this.wedimg)} className="blogPreviewCard bpcPost">
                            <h4>{Data.wednesday.date}</h4>
                            <h3>{Data.wednesday.title}</h3>
                            <p>{Data.wednesday.text}</p>
                        </div>
                    </a>

                    <a href={Data.friday.link} rel="noopener noreferrer" target="_blank">
                        <div style={this.bgstyle(this.friimg)} className="blogPreviewCard bpcPost">
                            <h4>{Data.friday.date}</h4>
                            <h3>{Data.friday.title}</h3>
                            <p>{Data.friday.text}</p>
                        </div>
                    </a>

                    <a href={Data.tipslink} rel="noopener noreferrer" target="_blank">
                        <div className="blogPreviewCard bpcPost">
                            <h2>Linkit<br/>&amp;<br/>Vinkit</h2>
                            <h4>Hyödylliset avut ohjelmointiin</h4>
                        </div>
                    </a>

                    <a href={Data.bloglink} rel="noopener noreferrer" target="_blank">
                        <div className="blogPreviewCard bpcLink">
                            <h2>Blogiin</h2>
                            <i className="fas fa-long-arrow-alt-right fa-5x"></i>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default BlogPreview;