import React from "react";
import "./InfoGrid.css";
import InfoGridBlock from "./InfoGridBlock";
//import {ProgressionTeaser1, ProgressionTeaser2} from "./ProgressionTeaser";

class InfoGrid extends React.Component {

    render(){
        const data = this.props.data;
        const infoBlocks = data.blocks.map((e, i) => {
            return (
                <InfoGridBlock key={e.id} data={e} index={i} mobile={this.props.mobile} />
            );   
        });
        return (
            <div className="infoGridWrapper">
                
                <div id={data.id} className="infoGridAnchor" />
                <div className="infoGrid">
                    <h3>{data.title}</h3>
                    <div className="infoBlocks">{infoBlocks}</div>
                </div>
                
            </div>
        );
    }
}

export default InfoGrid;

//<ProgressionTeaser1 data={data.teaser}/>

//<ProgressionTeaser2 data={data.teaser}/>