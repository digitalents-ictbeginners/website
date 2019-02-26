import React from "react";
import "./ShowReelElement.css";

class ShowReelElement extends React.Component {
    render(){
        const pos = this.props.reelPos;
        const id = this.props.index;
        const len = this.props.reelLen;
        let cname;
        let clicked;
        if(pos === id){ //this is the element in view
            cname = "srElem srElemMid";
        }
        else if(pos === id+1){ //the next element is in view, this one is left
            cname = "srElem srElemLeft";
            clicked = this.props.ltrFunc;
        }
        else if(pos === id+2){ //the element two ahead is in view, this is off left
            cname = "srElem srElemOffLeft";
        }
        else if(pos === id-1){ //the previous element is in view, this one is right
            cname = "srElem srElemRight";
            clicked = this.props.rtlFunc;
        }
        else if(pos === id-2){ //the element two back is in view, this is off right
            cname = "srElem srElemOffRight";
        }
        else if(pos === 0 && id === len-1){ //the first(0th) element is in view, this is last and left
            cname = "srElem srElemLeft";
            clicked = this.props.ltrFunc;
        }
        else if(pos === len-1 && id === 0){ //the last element is in view, this is first and right
            cname = "srElem srElemRight";
            clicked = this.props.rtlFunc;
        }
        else if(pos === len-2 && id === 0){
            cname = "srElem srElemOffRight";
        }
        else if(pos === 0 && id === len-2){
            cname = "srElem srElemOffLeft";
        }
        else if(pos === len-1 && id === 1){
            cname = "srElem srElemOffRight";
        }
        //TODO: STILL NEED ANOTHER IF OR TWO
        else { //this is somewhere else so just hidden
            cname = "srElem srElemHidden";
        }
        return (
            <div className={cname} onClick={clicked}>{this.props.index}</div>
        );
    }
}

export default ShowReelElement;