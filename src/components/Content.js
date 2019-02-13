import React from "react";
import "./Content.css";
import image from "../imgs/office.jpg"
import logo from '../imgs/logo_placeholder.png'

const imgStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
}

class Content extends React.Component{
    render(){
        return (
            <main>
                <div style={imgStyle} className="container">
                    <img src={logo} alt="" className="logo" />
                    <h4 className="subtitle">{this.props.title}</h4>
                </div>
            </main>
        );
    }
}

export default Content;