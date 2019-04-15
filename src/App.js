import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
//import Business from "./pages/Business";
import navDataFI from "./data/navData_fi.json";
import navDataEN from "./data/navData_en.json";
import contactDataFI from "./data/Contact_fi.json";
import contactDataEN from "./data/Contact_en.json";
import SideBar from "./components/nav/SideBar";
import TopNavBar from "./components/nav/TopNavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ImageOverlay from "./components/ImageOverlay";

class App extends Component {
  constructor(){
    super();
    this.VIEW_THRESHOLD = 600;
    this.state = {
      mobile: true,
      english: (new URL(window.location).searchParams.get("lang") === "en") || false,
      sidebarOpen: false,
      navTab: 0,
      overlayOpen: false,
      overlayImg: null
    }
    this.setView = this.setView.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.setSubNav = this.setSubNav.bind(this);
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.setOverlay = this.setOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.updateURL = this.updateURL.bind(this);
    window.addEventListener("resize", this.setView);

    this.navdata = navDataFI;
    this.logo = require("./imgs/" + this.navdata.logo);
    
    //this.Home = React.lazy(() => import("./pages/Home"));
    //this.Contact = React.lazy(() => import("./pages/Contact"));
  }

  componentDidMount(){
    this.setView();
  }

  setView(){
    if(document.documentElement.clientWidth >= this.VIEW_THRESHOLD){
      if(this.state.mobile) {
        //console.log("Now in desktop view");
        this.setState(s => {
          s.mobile = false;
          s.sidebarOpen = false;
          return s;
        });
      }
    }
    else {
      if(!this.state.mobile){
        //console.log("Now in mobile view");
        this.setState(s => {
          s.mobile = true;
          s.sidebarOpen = false;
          return s;
        });
      }
    }
  }

  toggleSidebar(){
    this.setState(s => {
      s.sidebarOpen = !s.sidebarOpen;
      return s;
    });
  }

  setSubNav(index){
    this.setState(s => {
      s.navTab = index;
      return s;
    });
  }

  toggleLanguage(){
    this.setState(s => {
      s.english = !s.english
      return s;
    });
  }

  setOverlay(img){
    this.setState(s => {
      s.overlayImg = img;
      s.overlayOpen = true;
      return s;
    })
  }

  closeOverlay(){
    this.setState(s => {
      s.overlayOpen = false;
      return s;
    });
  }

  updateURL(){
    const host = window.location.host;
    const hash = window.location.hash;
    const path = window.location.pathname;
    if(this.state.english){
      window.history.replaceState(null, null, "http://" + host + path + "?lang=en" + hash);
    } else {
      window.history.replaceState(null, null, "http://" + host + path + hash);
    }
  }

  render() {
    const baseUrl = process.env.PUBLIC_URL; //base url needed for routing

    this.updateURL();

    //package funcs
    const overlayFuncs = {
      set: this.setOverlay,
      close: this.closeOverlay
    }

    const navData = this.state.english ? navDataEN : navDataFI; // select navData based on language state

    //select sidebar or top navbar based on mobile state
    const navComponent =
      this.state.mobile
      ? <SideBar open={this.state.sidebarOpen} toggle={this.toggleSidebar} english={this.state.english} langToggle={this.toggleLanguage} data={navData} logo={this.logo}/>
      : <TopNavBar setSubNav={this.setSubNav} english={this.state.english} langToggle={this.toggleLanguage} data={navData} openTab={this.state.navTab} logo={this.logo}/>;

    //select contactData based on language state
    const contactData = this.state.english ? contactDataEN : contactDataFI;

    return (
      <Router>
        <div className="App">
          <Helmet>
            <title>Digitalents Academy</title>
          </Helmet>
          {navComponent}
          <Route exact path={baseUrl + "/"} render={props => <Home {...props} logo={this.logo} mobile={this.state.mobile} english={this.state.english}/>} />
          <Route exact path={baseUrl + "/yhteystiedot"} render={props => <Contact {...props} mobile={this.state.mobile} english={this.state.english} contactData={contactData} overlay={overlayFuncs}/>} />
          <Footer english={this.state.english} navdata={navData} contactData={contactData}/>
          <ImageOverlay img={this.state.overlayImg} open={this.state.overlayOpen} closeFunc={this.closeOverlay}/>
        </div>
      </Router>
    );
  }
}

export default App;

// Unused (for now) route:
// <Route exact path="/yrityksille" render={props => <Business {...props} mobile={this.state.mobile}/>} />

// Unused suspense:
// <React.Suspense fallback={<div>Loading...</div>}> </React.Suspense>