import React from 'react';
//import { HashLink as Link } from 'react-router-hash-link';
import './Home.css';
import dataFI from '../data/Home_fi.json';
import dataEN from '../data/Home_en.json';
import Landing from "../components/Home/Landing";
import Intro from "../components/Home/Intro";
import ProgressionTeaser from "../components/Home/ProgressionTeaser";
import InfoGrid from "../components/Home/InfoGrid";
//import ShowReel from "../components/ShowReel/ShowReel";
import MoreInfo from "../components/Home/MoreInfo";
import ApplyInfo from "../components/Home/ApplyInfo";

export default class Home extends React.Component {
  render() {
    const data = this.props.english ? dataEN : dataFI;
    return (
      <div id="top" className="home">
        <Landing data={data.landing}/>
        <Intro data={data.intro}/>
        <ProgressionTeaser data={data.teaser}/>
        <InfoGrid data={data.infogrid}/>
        <MoreInfo data={data.moreinfo}/>
        <ApplyInfo data={data.applyinfo}/>
      </div>
    )
  }
}