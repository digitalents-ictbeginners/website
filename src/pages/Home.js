import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Home.css';
import data from '../Home.json';
import image from "../imgs/office.jpg"
import Landing from "../components/Home/Landing";
import Intro from "../components/Home/Intro";
import ProgressionTeaser from "../components/Home/ProgressionTeaser";
import ShowReel from "../components/ShowReel/ShowReel";
import MoreInfo from "../components/Home/MoreInfo";
import ApplyInfo from "../components/Home/ApplyInfo";

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
    return (
      <div>
        <Landing data={data.landing}/>
        <Intro data={data.intro}/>
        <div className="scrollIndicator">O</div>
        <ProgressionTeaser data={data.teaser}/>
        <ShowReel data={data.showreel}/>
        <MoreInfo data={data.moreinfo}/>
        <ApplyInfo data={data.applyinfo}/>
      </div>
    )
  }
}

//Some deprecated stuff:
/*
const shortcuts = data.shortcuts.map(e => {
      return <div className="shortcut"><Link className="shortcutLink" to={e.link} scroll={el => el.scrollIntoView({ behavior: 'smooth' })}>{e.name}</Link></div>
    });
*/

/*
<div style={imgStyle} className="container">
            <img src={logo} alt="" className="logo" />
            <h4 className="subtitle">{data.slogan}</h4>
            <div className="shortcutContainer">
              {shortcuts}
            </div>
        </div>*/
