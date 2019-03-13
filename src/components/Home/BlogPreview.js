import React from "react";
import "./BlogPreview.css";

class BlogPreview extends React.Component {
    render(){
        return (
            <div className="blogPreview">
                <div className="blogPreviewCardContainer">
                    <div className="blogPreviewCard">
                        <h4>Maanantai 11.3</h4>
                        <h3>Aamupala</h3>
                        <p>Maanantaisin Digitalents Academy kokoontuu aamupalan 
                            ääreen keskustelemaan...</p>
                    </div>
                    <div className="blogPreviewCard">
                        <h4>Keskiviikko 13.3</h4>
                        <h3>Otsikko</h3>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                            ipsum lorem ipsum...</p>
                    </div>
                    <div className="blogPreviewCard">
                        <h4>Perjantai 15.3</h4>
                        <h3>Otsikko</h3>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                            ipsum lorem ipsum...</p>
                    </div>
                    <div className="blogPreviewCard">
                        <h2>Linkit<br/>&amp;<br/>Vinkit</h2>
                        <h4>Hyödylliset avut ohjelmointiin</h4>
                    </div>
                </div>
                <div className="blogLinkCard">
                    <h2>Blogiin</h2>
                    <i className="fas fa-long-arrow-alt-right fa-5x"></i>
                </div>
            </div>
        );
    }
}

export default BlogPreview;