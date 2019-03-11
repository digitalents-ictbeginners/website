import React from "react";
import "./ShowReelElement.css";

class ShowReelElement extends React.Component {

    constructor(props){
        super(props);
        this.image = require("../../imgs/showreel/" + this.props.showReelData.content.bgimg);
    }

    render(){
        const pos = this.props.showReelData.reelPos;
        const len = this.props.showReelData.reelLen;
        const mob = this.props.showReelData.mobile;
        const cont = this.props.showReelData.content;
        const id = cont.id;
        let cname = mob ? "srElem srElemMob" : "srElem srElemDesktop";
        let clicked;

        // IF ELSE LOGIC TO DETERMINE WHAT THIS ELEMENT SHOULD LOOK LIKE
        // BASED ON ITS ID AND THE CURRENT ELEMENT BEING SHOWN
        if(pos === id){ //this is the element in view
            cname += " srElemMid";
            cname += mob ? " srElemMidMob" : " srElemMidDtop";
        }
        else if( (pos === id+1) || (pos === 0 && id === len-1) ){
            //the next element is in view so this one is left OR
            //the first(0th) element is in view and this is the last so this is left
            cname += " srElemLeft";
            cname += mob ? " srElemLeftMob" : " srElemLeftDtop";
            clicked = this.props.showReelData.ltrFunc;
        }
        else if( (pos === id+2) || (pos === 0 && id === len-2) || (pos === 1 && id === len-1) ){
            //the element two ahead is in view OR
            //the first(0th) element is in view and this is second to last OR
            //the second element is in view and this is the last element SO
            //this element is off the screen to the left
            cname += " srElemOffLeft";
        }
        else if( (pos === id-1) || (pos === len-1 && id === 0) ){
            //the previous element is in view OR
            //the last element is in view and this is the first(0th) SO
            //this element is the one on the right
            cname += " srElemRight";
            cname += mob ? " srElemRightMob" : " srElemRightDtop";
            clicked = this.props.showReelData.rtlFunc;
        }
        else if( (pos === id-2) || (pos === len-1 && id === 1) || (pos === len-2 && id === 0)){
            //the element two back is in view OR
            //the last element is in view and this is the second element OR
            //the second to last element is in view and this is the first(0th) element SO
            //this element is off the screen to the right
            cname += " srElemOffRight";
        }
        else {
            //this element is somewhere else so it's just hidden
            cname += " srElemHidden";
        }

        const bgImgStyle = {
            backgroundImage: `url(${this.image})`,
            backgroundSize: "cover"
        }

        return (
            <div style={bgImgStyle} className={cname} onClick={clicked}>
                <h2>{cont.title}</h2>
                <h3>{cont.subtitle}</h3>
            </div>
        );
    }
}

export default ShowReelElement;