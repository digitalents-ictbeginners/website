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
    const viewClass = this.state.mobile ? "contentWrapper appMobile" : "contentWrapper appDesktop";
    return (
      <Router>
        <div className="App">
          <Helmet>
            <title>ICT Beginners</title>
          </Helmet>
          {navComponent}
          <div className={viewClass}>
            <Route exact path="/" render={props => <Home {...props} mobile={this.state.mobile}/>} />
            <Route path="/yhteystiedot" component={Contact} />
            <Route path="/yrityksille" component={Business} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
