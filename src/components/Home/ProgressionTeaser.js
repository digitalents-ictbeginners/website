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
        this.wrapper = null;
        this.timer = null;
        this.handleScroll = this.handleScroll.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount(){
        this.DOMNode = ReactDOM.findDOMNode(this);
        this.wrapper = document.querySelector(".App .contentWrapper");
        this.wrapper.addEventListener("scroll", this.handleScroll);
    }

    handleScroll(){
        if(this.wrapper.scrollTop + document.documentElement.clientHeight >
            this.DOMNode.offsetTop + 300){
                this.setState(s => {
                    return {
                        animate: true,
                    }
            });
            this.wrapper.removeEventListener("scroll", this.handleScroll);
        }
    }

    updateState(){
        
    }

    render(){
        const data = this.props.data;
        const lineClass = this.state.animate ? "vLine vLineFull" : "vLine";
        const item1class = this.state.animate ? "ptItem1 ptFadeIn" : "ptItem1";
        const item2class = this.state.animate ? "ptItem2 ptFadeIn" : "ptItem2";
        const item3class = this.state.animate ? "ptItem3 ptFadeIn" : "ptItem3";
        const item4class = this.state.animate ? "ptItem4 ptFadeIn" : "ptItem4";
        return (
            <div id={data.id} className="teaser">
                <div className={lineClass}></div>
                <h1>{data.title}</h1>
                <h3 className={item1class}>{data.item1}</h3>
                <h3 className={item2class}>{data.item2}</h3>
                <h2 className={item3class}>{data.item3}</h2>
                <div className={item4class}><i className="fas fa-chevron-down"></i></div>   
            </div>
        );
    }
}

export default ProgressionTeaser;