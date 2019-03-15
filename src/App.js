import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Business from "./pages/Business";
import navDataFI from "./data/navData_fi.json";
import navDataEN from "./data/navData_en.json";
import SideBar from "./components/nav/SideBar";
import TopNavBar from "./components/nav/TopNavBar";
import Footer from "./components/Footer";

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
    this.closeSubNav = this.closeSubNav.bind(this);
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.setOverlay = this.setOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    window.addEventListener("resize", this.setView);
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

  closeSubNav(){
    this.setState(s => {
      s.navTab = 0;
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

  render() {
    const host = window.location.host;
    const hash = window.location.hash;
    const path = window.location.pathname;
    if(this.state.english){
      window.history.replaceState(null, null, "http://" + host + path + "?lang=en" + hash);
    } else {
      window.history.replaceState(null, null, "http://" + host + path + hash);
    }

    const overlayClass = this.state.overlayOpen ? "fixedOverlay foVisible" : "fixedOverlay foHidden";
    const overlayFuncs = {
      set: this.setOverlay,
      close: this.closeOverlay
    }

    const navData = this.state.english ? navDataEN : navDataFI;
    const navComponent =
      this.state.mobile
      ? <SideBar open={this.state.sidebarOpen} toggle={this.toggleSidebar} english={this.state.english} langToggle={this.toggleLanguage} data={navData}/>
      : <TopNavBar parent={this} closeFunc={this.closeSubNav} english={this.state.english} langToggle={this.toggleLanguage} data={navData} openTab={this.state.navTab}/>;

    const viewClass = this.state.mobile ? "contentWrapper appMobile" : "contentWrapper appDesktop";
    return (
      <Router>
        <div className="App">
          <Helmet>
            <title>Digitalents Academy</title>
          </Helmet>
          {navComponent}
          <div className={viewClass}>
            <Route exact path="/" render={props => <Home {...props} mobile={this.state.mobile} english={this.state.english}/>} />
            <Route exact path="/yrityksille" render={props => <Business {...props} mobile={this.state.mobile}/>} />
            <Route exact path="/yhteystiedot" render={props => <Contact {...props} mobile={this.state.mobile} english={this.state.english} overlay={overlayFuncs}/>} />
            <Footer english={this.state.english} navdata={navData.navdata}/>
          </div>
          <div className={overlayClass}>
            <i onClick={this.closeOverlay} className="fas fa-times fa-4x"></i>
            <div className="foContent">
              <img alt="" src={this.state.overlayImg}/>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;