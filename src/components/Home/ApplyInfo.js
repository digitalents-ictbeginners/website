import React from "react";
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
            <div className="applyInfo">
                <div id={data.id} className="aiAnchor" />
                <div className="aiUnderlined"><h2>{data.interested}</h2></div>
                <h1>{data.applynow}</h1>
                <svg className="aiCurve" viewBox="0 0 1000 150" xmlns="http://www.w3.org/2000/svg">
                    <circle cy="1100" cx="500" r="1100" fill="lightgrey" />
                </svg>
                <div className="aiContentWrapper">
                    <div className="aiContent">
                        <div className="aiTextBox">
                            <h2>{data.process}</h2>
                            {texts}
                        </div>
                        <div className="aiApplyWrapper">
                            <p>{data.toapply.text}</p>
                            <a className="aiToApply" href={data.toapply.link} rel="noopener noreferrer" target="_blank">
                                
                                    {data.toapply.buttontext}
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApplyInfo;