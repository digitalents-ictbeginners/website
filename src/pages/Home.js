import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Home.css';
import data from '../Home.json';
import image from "../imgs/office.jpg"
import logo from '../imgs/logo_placeholder.png'
import TextBlock from "../components/TextBlock";
import Intro from "../components/Intro";
import ProgressionTeaser from "../components/ProgressionTeaser";

const imgStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
}

export default class Home extends React.Component {
  
  componentDidMount(){
    this.props.app.setState(s => {
        return {
            mobile: s.mobile,
            sidebarOpen: s.sidebarOpen,
            navTab: this.props.navId
        }
    });
}

  render() {
    const shortcuts = data.shortcuts.map(e => {
      return <div className="shortcut"><Link className="shortcutLink" to={e.link} scroll={el => el.scrollIntoView({ behavior: 'smooth' })}>{e.name}</Link></div>
    });
    return (
      <div>
        <div style={imgStyle} className="container">
            <img src={logo} alt="" className="logo" />
            <h4 className="subtitle">{data.slogan}</h4>
            <div className="shortcutContainer">
              {shortcuts}
            </div>
        </div>
        <Intro data={data.intro}/>
        <ProgressionTeaser data={data.teaser}/>
        <div className="scrollIndicator">
          O
        </div>
      </div>
    )
  }
}
