import React from "react";
import "./ShowReel.css";
import ShowReelElement from "./ShowReelElement";

class ShowReel extends React.Component {
    constructor(props){
        super(props);
        //todo: obviously don't hardcode this:
        this.state = {
            reelPos: 0
        }
        this.leftToRight = this.leftToRight.bind(this);
        this.rightToLeft = this.rightToLeft.bind(this);
        this.showReelData = this.showReelData.bind(this);
        this.numElems = this.props.data.elements.length;
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

    showReelData(elemId){
        return 
    }

    render(){
        const data = this.props.data;
        //todo: create these dynamically
        const srElems = data.elements.map(e => {
            const srdata = {
                mobile: this.props.mobile,
                ltrFunc: this.leftToRight,
                rtlFunc: this.rightToLeft,
                reelPos: this.state.reelPos,
                reelLen: this.numElems,
                content: e
            };
            return <ShowReelElement key={e.id}  showReelData={srdata}/>;
        });
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