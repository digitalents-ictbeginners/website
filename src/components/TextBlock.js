import React from "react";
import "./TextBlock.css";

class TextBlock extends React.Component {
    render(){
        const data = this.props.data;
        const subElements = data.texts.map(e => {
            return (
                <div>
                    <h3>{e.subtitle}</h3>
                    <p>{e.text}</p>
                </div>
            )
        });
        return (
            <div id={data.id} className="textBlock">
                <h2>{data.title}</h2>
                {subElements}
            </div>
        );
    }
}

export default TextBlock;