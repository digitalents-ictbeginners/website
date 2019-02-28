import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Business from "./pages/Business";
import navData from "./navData.json";
import SideBar from "./components/nav/SideBar";
import TopNavBar from "./components/nav/TopNavBar";
import Footer from "./components/Footer";

class App extends Component {
  constructor(){
    super();
    this.VIEW_THRESHOLD = 600;
    this.state = {
      mobile: true,
      sidebarOpen: false,
      navTab: 0
    }
    this.setView = this.setView.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.closeSubNav = this.closeSubNav.bind(this);
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
                sidebarOpen: false,
                navTab: s.navTab
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
              sidebarOpen: false,
              navTab: s.navTab
          }
      });
      }
    }
  }

  toggleSidebar(){
    this.setState(s => {
      return {
        mobile: s.mobile,
        sidebarOpen: !s.sidebarOpen,
        navTab: s.navTab
      }
    });
  }

  closeSubNav(){
    this.setState(s => {
        return {
          mobile: s.mobile,
          sidebarOpen: s.sidebarOpen,
          navTab: 0
        }
    });
  }

  render() {
    const navComponent = this.state.mobile ? <SideBar open={this.state.sidebarOpen} toggleFunc={this.toggleSidebar} data={navData.navdata}/> : <TopNavBar parent={this} closeFunc={this.closeSubNav} data={navData.navdata} openTab={this.state.navTab}/>
    const viewClass = this.state.mobile ? "contentWrapper appMobile" : "contentWrapper appDesktop";
    return (
      <Router>
        <div className="App">
          <Helmet>
            <title>ICT Beginners</title>
          </Helmet>
          {navComponent}
          <div className={viewClass}>
            <Route exact path="/" render={props => <Home {...props} app={this} mobile={this.state.mobile}/>} />
            <Route exact path="/yrityksille" render={props => <Business {...props} app={this} mobile={this.state.mobile}/>} />
            <Route exact path="/yhteystiedot" render={props => <Contact {...props} app={this} mobile={this.state.mobile}/>} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
