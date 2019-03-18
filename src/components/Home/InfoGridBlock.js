import React from "react";
import "./InfoGridBlock.css";

class InfoGridBlock extends React.Component {
    constructor(props){
        super(props);
        this.image = require("../../imgs/infogrid/" + this.props.data.img);
    }

    render(){
        const data = this.props.data;
        const i = this.props.index;
        const text = <div className="ibText">
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
        const img = <div className="ibImg">
                        <img src={this.image}/>
                    </div>
        if(i % 2 === 0){
            return (
                <div className="infoBlock ibTextImg">
                    {text}
                    {img}
                </div>
            );
        } else {
            return (
                <div className="infoBlock ibImgText">
                    {img}
                    {text}
                </div>
            );
        }
    }
}

export default InfoGridBlock;