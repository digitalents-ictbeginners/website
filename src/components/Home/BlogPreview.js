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
                    <a style={this.bgstyle(this.monimg)} className="blogPreviewCard bpcPost" href={Data.monday.link} rel="noopener noreferrer" target="_blank">
                        <h4>{Data.monday.date}</h4>
                        <h3>{Data.monday.title}</h3>
                        <p>{Data.monday.text}</p>
                    </a>
                    <a style={this.bgstyle(this.wedimg)} className="blogPreviewCard bpcPost" href={Data.wednesday.link} rel="noopener noreferrer" target="_blank">
                        <h4>{Data.wednesday.date}</h4>
                        <h3>{Data.wednesday.title}</h3>
                        <p>{Data.wednesday.text}</p>
                    </a>

                    <a style={this.bgstyle(this.friimg)} className="blogPreviewCard bpcPost" href={Data.friday.link} rel="noopener noreferrer" target="_blank">
                        <h4>{Data.friday.date}</h4>
                        <h3>{Data.friday.title}</h3>
                        <p>{Data.friday.text}</p>
                    </a>

                    <a className="blogPreviewCard bpcPost" href={Data.tipslink} rel="noopener noreferrer" target="_blank">
                        <h2>Linkit<br/>&amp;<br/>Vinkit</h2>
                        <h4>Hyödylliset avut ohjelmointiin</h4>
                    </a>

                    <a className="blogPreviewCard bpcLink" href={Data.bloglink} rel="noopener noreferrer" target="_blank">
                        <h2>Blogiin</h2>
                        <i className="fas fa-long-arrow-alt-right fa-5x"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default BlogPreview;

//