import React from "react";
import "./InfoGrid.css";
import InfoGridBlock from "./InfoGridBlock";

class InfoGrid extends React.Component {
    render(){
        const data = this.props.data;
        const infoBlocks = data.blocks.map((e, i) => {
            return (
                <InfoGridBlock key={e.id} data={e} index={i} />
            );   
        });
        return (
            <div id={data.id} className="infoGrid">
                <h1>{data.title}</h1>
                <h3>{data.subtitle}</h3>
                <div className="infoBlocks">{infoBlocks}</div>
            </div>
        );
    }
}

export default InfoGrid;