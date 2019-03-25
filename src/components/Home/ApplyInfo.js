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
                <div className="aiUnderlined"></div>
                <svg className="aiCurve" viewBox="0 0 1000 150" xmlns="http://www.w3.org/2000/svg">
                    <circle cy="1100" cx="500" r="1100" fill="rgba(77, 100, 193, 0.8)" />
                </svg>
                <div className="aiContentWrapper">
                    <div className="aiContent">
                        <div className="aiTextBox">
                            <h2>{data.applynow}</h2>
                            {texts}
                        </div>
                        <div className="aiApplyWrapper">
                            <p>{data.toapply.text}</p>
                            <div className="buttonWrapper">
                            <i className="fas fa-angle-double-right fa-3x"></i>
                            <a className="aiToApply" href={data.toapply.link} rel="noopener noreferrer" target="_blank">
                            {data.toapply.buttontext}
                            </a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApplyInfo;