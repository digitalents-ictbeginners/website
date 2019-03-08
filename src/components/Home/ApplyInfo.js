import React from "react";
import { Link } from "react-router-dom"
import "./ApplyInfo.css";

class ApplyInfo extends React.Component {
    render(){
        const data = this.props.data;
        const texts = data.text.map(e => {
            return (
                <p key={e.id}>
                    <span className="aiBoldText">{e.bold}</span>
                    <span className="aiNormalText"> {e.normal}</span>
                </p>
            );
        });
        return (
            <div id={data.id} className="applyInfo">
                <div className="aiUnderlined"><h2>{data.interested}</h2></div>
                <h1>{data.applynow}</h1>
                <div className="aiContentWrapper">
                    <div className="aiContent">
                        <div className="aiTextBox">
                            <h2>{data.process}</h2>
                            {texts}
                        </div>
                        <a className="aiToApply" href={data.toapply.link} target="_blank">
                            <div>
                                {data.toapply.text}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApplyInfo;