import React from "react";
import "./ShowReel.css";
import ShowReelElement from "./ShowReelElement";

class ShowReel extends React.Component {
    constructor(){
        super();
        this.numElems = 6;
        this.state = {
            reelPos: 0
        }
        this.leftToRight = this.leftToRight.bind(this);
        this.rightToLeft = this.rightToLeft.bind(this);
    }

    leftToRight(){
        this.setState(s => {
            if(s.reelPos-1 < 0){
                return {
                    reelPos: this.numElems-1
                }
            } else {
                return {
                    reelPos: s.reelPos-1
                }
            }
        })
    }

    rightToLeft(){
        this.setState(s => {
            if(s.reelPos+1 >= this.numElems){
                return {
                    reelPos: 0
                }
            } else {
                return {
                    reelPos: s.reelPos+1
                }
            }
        })
    }

    render(){
        const data = this.props.data;
        const showReelData = {
            mobile: this.props.mobile,
            ltrFunc: this.leftToRight,
            rtlFunc: this.rightToLeft,
            reelPos: this.state.reelPos,
            reelLen: this.numElems
        };
        const srElems = [
            <ShowReelElement key={0} index={0} showReelData={showReelData}/>,
            <ShowReelElement key={1} index={1} showReelData={showReelData}/>,
            <ShowReelElement key={2} index={2} showReelData={showReelData}/>,
            <ShowReelElement key={3} index={3} showReelData={showReelData}/>,
            <ShowReelElement key={4} index={4} showReelData={showReelData}/>,
            <ShowReelElement key={5} index={5} showReelData={showReelData}/>
        ];
        const containerClass = this.props.mobile ? "srElemContMobile" : "srElemContDesktop";
        return (
            <div id={data.id} className="showreel">
                <h1>{data.title}</h1>
                <h3>{data.subtitle}</h3>
                <div className="srElemContainer"> 
                    {srElems}
                </div>
            </div>
        );
    }
}

export default ShowReel;