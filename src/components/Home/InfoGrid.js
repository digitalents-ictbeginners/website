import React from "react";
import "./InfoGrid.css";
import InfoGridBlock from "./InfoGridBlock";
import {ProgressionTeaser1, ProgressionTeaser2} from "./ProgressionTeaser";

class InfoGrid extends React.Component {

    render(){
        const data = this.props.data;
        const infoBlocks = data.blocks.map((e, i) => {
            return (
                <InfoGridBlock key={e.id} data={e} index={i} />
            );   
        });
        return (
            <div className="infoGridWrapper">
                <ProgressionTeaser1 data={data.teaser}/>
                <div id={data.id} className="infoGridAnchor" />
                <div className="infoGrid">
                    <h1>{data.title}</h1>
                    <h3>{data.subtitle}</h3>
                    <div className="infoBlocks">{infoBlocks}</div>
                </div>
                <ProgressionTeaser2 data={data.teaser}/>
            </div>
        );
    }
}

export default InfoGrid;