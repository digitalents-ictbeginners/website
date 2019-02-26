import React from "react";
import "./ShowReelElement.css";

class ShowReelElement extends React.Component {
    render(){
        const pos = this.props.reelPos;
        const id = this.props.index;
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
            cname = "srElem srElemOffRight"
        }
        else { //this is somewhere else so just hidden
            cname = "srElem srElemHidden"
        }
        return (
            <div className={cname} onClick={clicked}></div>
        );
    }
}

export default ShowReelElement;