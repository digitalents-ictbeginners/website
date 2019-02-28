import React from 'react';
//import { HashLink as Link } from 'react-router-hash-link';
import './Home.css';
import data from '../Home.json';
import Landing from "../components/Home/Landing";
import Intro from "../components/Home/Intro";
import ProgressionTeaser from "../components/Home/ProgressionTeaser";
import ShowReel from "../components/ShowReel/ShowReel";
import MoreInfo from "../components/Home/MoreInfo";
import ApplyInfo from "../components/Home/ApplyInfo";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Landing data={data.landing}/>
        <Intro data={data.intro}/>
        <ProgressionTeaser data={data.teaser}/>
        <ShowReel data={data.showreel}/>
        <MoreInfo data={data.moreinfo}/>
        <ApplyInfo data={data.applyinfo}/>
      </div>
    )
  }
}
