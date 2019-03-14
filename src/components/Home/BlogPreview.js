import React from "react";
import "./BlogPreview.css";

class BlogPreview extends React.Component {
    render(){
        return (
            <div>
                <h3 className="blogPreviewTitle">{this.props.title}</h3>
                <div className="blogPreview">
                    <div className="blogPreviewCard bpcPost">
                        <h4>Maanantai 11.3</h4>
                        <h3>Aamupala</h3>
                        <p>Maanantaisin Digitalents Academy kokoontuu aamupalan 
                            ääreen keskustelemaan...</p>
                    </div>
                    <div className="blogPreviewCard bpcPost">
                        <h4>Keskiviikko 13.3</h4>
                        <h3>Otsikko</h3>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                            ipsum lorem ipsum...</p>
                    </div>
                    <div className="blogPreviewCard bpcPost">
                        <h4>Perjantai 15.3</h4>
                        <h3>Otsikko</h3>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                            ipsum lorem ipsum...</p>
                    </div>
                    <div className="blogPreviewCard bpcPost">
                        <h2>Linkit<br/>&amp;<br/>Vinkit</h2>
                        <h4>Hyödylliset avut ohjelmointiin</h4>
                    </div>
                    <div className="blogPreviewCard bpcLink">
                        <h2>Blogiin</h2>
                        <i className="fas fa-long-arrow-alt-right fa-5x"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogPreview;