import React from 'react';
import './Home.css';
import dataFI from '../data/Home_fi.json';
import dataEN from '../data/Home_en.json';
import Landing from "../components/Home/Landing";
import Intro from "../components/Home/Intro";
import InfoGrid from "../components/Home/InfoGrid";
import ApplyInfo from "../components/Home/ApplyInfo";
import BlogPreview from "../components/Home/BlogPreview";

export default class Home extends React.Component {
  render() {
    const data = this.props.english ? dataEN : dataFI;
    return (
      <div id="top" className="home">
        <Landing data={data.landing}/>
        <Intro data={data.intro}/>
        <InfoGrid data={data.infogrid} mobile={this.props.mobile}/>
        <BlogPreview data={data.blogpreview}/>
        <ApplyInfo data={data.applyinfo}/>
      </div>
    )
  }
}