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
        this.timer = null;
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
        this.DOMNode = ReactDOM.findDOMNode(this);
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll(){
        const docelem = document.documentElement;
        if(docelem.scrollTop + docelem.clientHeight >
            this.DOMNode.offsetTop + 300){
                this.setState(s => {
                    return {
                        animate: true,
                    }
            });
            window.removeEventListener("scroll", this.handleScroll);
        }
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll);
    }

    render(){
        const data = this.props.data;
        const lineClass = this.state.animate ? "vLine vLineFull" : "vLine";
        const item1class = this.state.animate ? "ptItem1 ptFadeIn" : "ptItem1";
        const item2class = this.state.animate ? "ptItem2 ptFadeIn" : "ptItem2";
        const item3class = this.state.animate ? "ptItem3 ptFadeIn" : "ptItem3";
        return (
            <div id={data.id} className="teaser">
                <div className={lineClass}></div>
                <h1>{data.title}</h1>
                <h3 className={item1class}>{data.item1}</h3>
                <h3 className={item2class}>{data.item2}</h3>
                <h2 className={item3class}>{data.item3}</h2>
                <div className="ptEllipsis"><i className="fas fa-ellipsis-v fa-2x"></i></div>   
            </div>
        );
    }
}

export default ProgressionTeaser;