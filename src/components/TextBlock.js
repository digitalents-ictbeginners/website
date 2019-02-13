import React from "react";
import "./TextBlock.css";

class TextBlock extends React.Component {
    render(){
        const data = this.props.data;
        const subElements = data.texts.map(e => {
            let html  = {__html: e.text};
            return (
                <div>
                    <h3>{e.subtitle}</h3>
                    <p dangerouslySetInnerHTML={html}></p>
                </div>
            )
        });
        return (
            <div style={{scrollTop: "100px"}} id={data.id} className="textBlock">
                <h2>{data.title}</h2>
                {subElements}
            </div>
        );
    }
}

export default TextBlock;