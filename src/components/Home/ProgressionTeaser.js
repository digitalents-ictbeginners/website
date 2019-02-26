import React from "react";
import ReactDOM from "react-dom";
import "./ProgressionTeaser.css";

class ProgressionTeaser extends React.Component {
    constructor(){
        super();
        this.state = {
            lineExtended: false
        }
        this.DOMNode = null;
        this.wrapper = null;
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
        this.DOMNode = ReactDOM.findDOMNode(this);
        this.wrapper = document.querySelector(".App .contentWrapper");
        this.wrapper.addEventListener("scroll", this.handleScroll);
    }

    handleScroll(){
        if(this.wrapper.scrollTop + document.documentElement.clientHeight >
            this.DOMNode.offsetTop + 500){
            this.setState(s => {
                return {
                    lineExtended: true
                }
            });
        }
    }

    render(){
        const data = this.props.data;
        const lineClass = this.state.lineExtended ? "vLine vLineFull" : "vLine";
        return (
            <div id={data.id} className="teaser">
                <div className={lineClass}></div>
                <h1>{data.title}</h1>
                <h3>{data.item1}</h3>
                <h3>{data.item2}</h3>
                <h2>{data.item3}</h2>
                <i className="fas fa-chevron-down"></i>
            </div>
        );
    }
}

export default ProgressionTeaser;