import React from "react";
import ReactDOM from "react-dom";
import "./ProgressionTeaser.css";

class ProgressionTeaser extends React.Component {
    constructor(){
        super();
        this.state = {
            animate: false,
        }
        this.DOMNode = null;
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
        this.DOMNode = ReactDOM.findDOMNode(this);
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll(){
        const screenbottom = window.scrollY + window.innerHeight;
        const elemtop = this.DOMNode.offsetParent.offsetTop + this.DOMNode.offsetTop;
        if( screenbottom > elemtop + 200){
            this.setState(s => {
                s.animate = true;
                return s;
            });
            window.removeEventListener("scroll", this.handleScroll);
        }
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll);
    }
}

class ProgressionTeaser1 extends ProgressionTeaser {
    constructor(){
        super();
    }

    render(){
        const data = this.props.data;
        const line1Class = this.state.animate ? "vLine1 vLine1Full" : "vLine1";
        const item1class = this.state.animate ? "ptItem1 ptFadeIn" : "ptItem1";
        const item2class = this.state.animate ? "ptItem2 ptFadeIn" : "ptItem2";
        return (
            <div className="teaser teaser1">
                <div className={line1Class}></div>
                <h1>{data.title}</h1>
                <h3 className={item1class}>{data.item1}</h3>
                <h3 className={item2class}>{data.item2}</h3>
            </div>
        );
    }
}

class ProgressionTeaser2 extends ProgressionTeaser {
    constructor(){
        super();
    }

    render(){
        const data = this.props.data;
        const line2Class = this.state.animate ? "vLine2 vLine2Full" : "vLine2";
        const item3class = this.state.animate ? "ptItem3 ptFadeIn" : "ptItem3";
        return (
            <div className="teaser teaser2">
                <div className={line2Class}></div>
                <h2 className={item3class}>{data.item3}</h2>
            </div>
        );
    }
}

export { ProgressionTeaser1, ProgressionTeaser2 };