import React, { Component } from 'react';
import './App.css';
import SideBar from "./components/SideBar";
import Content from "./components/Content";

class App extends Component {
  constructor(){
    super();
    this.VIEW_THRESHOLD = 1000;
    this.state = {
      mobile: true,
      sidebarOpen: false
    }
    this.setView = this.setView.bind(this);
    window.addEventListener("resize", this.setView);
  }

  componentDidMount(){
    this.setView();
  }

  setView(){
    if(document.documentElement.clientWidth >= this.VIEW_THRESHOLD){
      if(this.state.mobile) {
        console.log("Now in desktop view");
        this.setState(s => {
            return {
                mobile: false,
                sidebarOpen: true
            }
        });
      }
    }
    else {
      if(!this.state.mobile){
        console.log("Now in mobile view");
        this.setState(s => {
          return {
              mobile: true,
              sidebarOpen: false
          }
      });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <SideBar parent={this}/>
        <div className={"contentWrapper" + (this.state.sidebarOpen ? " contentShifted" : " contentUnshifted")}>
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
