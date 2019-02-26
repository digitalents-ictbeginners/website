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
        console.log("shifting left to right");
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
        console.log("shifting right to left");
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
        const srElems = [
            <ShowReelElement key={0} index={0} ltrFunc={this.leftToRight} rtlFunc={this.rightToLeft} reelPos={this.state.reelPos} reelLen={this.numElems}/>,
            <ShowReelElement key={1} index={1} ltrFunc={this.leftToRight} rtlFunc={this.rightToLeft} reelPos={this.state.reelPos} reelLen={this.numElems}/>,
            <ShowReelElement key={2} index={2} ltrFunc={this.leftToRight} rtlFunc={this.rightToLeft} reelPos={this.state.reelPos} reelLen={this.numElems}/>,
            <ShowReelElement key={3} index={3} ltrFunc={this.leftToRight} rtlFunc={this.rightToLeft} reelPos={this.state.reelPos} reelLen={this.numElems}/>,
            <ShowReelElement key={4} index={4} ltrFunc={this.leftToRight} rtlFunc={this.rightToLeft} reelPos={this.state.reelPos} reelLen={this.numElems}/>,
            <ShowReelElement key={5} index={5} ltrFunc={this.leftToRight} rtlFunc={this.rightToLeft} reelPos={this.state.reelPos} reelLen={this.numElems}/>
        ]
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