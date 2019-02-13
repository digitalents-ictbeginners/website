import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import navData from "./navData.json";
import SideBar from "./components/nav/SideBar";
import Content from "./components/Content";
import TopNavBar from "./components/nav/TopNavBar";
import Footer from "./components/Footer";

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
                sidebarOpen: false
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
    const navComponent = this.state.mobile ? <SideBar parent={this} data={navData.navdata}/> : <TopNavBar data={navData.navdata}/>
    return (
      <div className="App">
        <Helmet>
          <title>ICT Beginners</title>
        </Helmet>
        {navComponent}
        <div className="contentWrapper">
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
