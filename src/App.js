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
      english: false,
      sidebarOpen: false,
      navTab: 0
    }
    this.setView = this.setView.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.closeSubNav = this.closeSubNav.bind(this);
    this.toggleLanguage = this.toggleLanguage.bind(this);
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

  render() {
    const navData = this.state.english ? navDataEN : navDataFI;
    const navComponent =
      this.state.mobile
      ? <SideBar open={this.state.sidebarOpen} toggleFunc={this.toggleSidebar} data={navData.navdata}/>
      : <TopNavBar parent={this} closeFunc={this.closeSubNav} langToggle={this.toggleLanguage} data={navData} openTab={this.state.navTab}/>;

    const viewClass = this.state.mobile ? "contentWrapper appMobile" : "contentWrapper appDesktop";
    return (
      <Router>
        <div className="App">
          <Helmet>
            <title>ICT Beginners</title>
          </Helmet>
          {navComponent}
          <div className={viewClass}>
            <Route exact path="/" render={props => <Home {...props} mobile={this.state.mobile} english={this.state.english}/>} />
            <Route exact path="/yrityksille" render={props => <Business {...props} mobile={this.state.mobile}/>} />
            <Route exact path="/yhteystiedot" render={props => <Contact {...props} mobile={this.state.mobile}/>} />
            <Footer english={this.state.english}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
