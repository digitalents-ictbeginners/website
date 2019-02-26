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
        else if( (pos === id+1) || (pos === 0 && id === len-1) ){
            //the next element is in view so this one is left OR
            //the first(0th) element is in view and this is the last so this is left
            cname = "srElem srElemLeft";
            clicked = this.props.ltrFunc;
        }
        else if( (pos === id+2) || (pos === 0 && id === len-2) || (pos === 1 && id === len-1) ){
            //the element two ahead is in view OR
            //the first(0th) element is in view and this is second to last OR
            //the second element is in view and this is the last element SO
            //this element is off the screen to the left
            cname = "srElem srElemOffLeft";
        }
        else if( (pos === id-1) || (pos === len-1 && id === 0) ){
            //the previous element is in view OR
            //the last element is in view and this is the first(0th) SO
            //this element is the one on the right
            cname = "srElem srElemRight";
            clicked = this.props.rtlFunc;
        }
        else if( (pos === id-2) || (pos === len-1 && id === 1) || (pos === len-2 && id === 0)){
            //the element two back is in view OR
            //the last element is in view and this is the second element OR
            //the second to last element is in view and this is the first(0th) element SO
            //this element is off the screen to the right
            cname = "srElem srElemOffRight";
        }
        else {
            //this element is somewhere else so it's just hidden
            cname = "srElem srElemHidden";
        }
        return (
            <div className={cname} onClick={clicked}>{this.props.index}</div>
        );
    }
}

export default ShowReelElement;