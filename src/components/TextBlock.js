import React from "react";
import "./TextBlock.css";

class TextBlock extends React.Component {
    render(){
        const data = this.props.data;
        const subElements = data.texts.map(e => {
            const paragraphs = e.text.map(p => {
                const html  = {__html: p};
                return (
                    <p dangerouslySetInnerHTML={html}></p>
                );
            });
            
            return (
                <div>
                    <h3>{e.subtitle}</h3>
                    {paragraphs}
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