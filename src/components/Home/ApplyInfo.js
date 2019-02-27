import React from "react";
import "./ApplyInfo.css";

class ApplyInfo extends React.Component {
    render(){
        const data = this.props.data;
        return (
            <div id={data.id} className="applyInfo">
                <div className="aiUnderlined"><h2>{data.interested}</h2></div>
                <h1>{data.applynow}</h1>
                <div className="aiContentWrapper">
                    <div className="aiContent">
                        <div className="aiText">
                            <h2>{data.process}</h2>
                            <p>{data.text}</p>
                        </div>
                        <div className="aiToApply">
                            <h2>{data.toapply}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApplyInfo;