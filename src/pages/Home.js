import React from 'react';
import './Home.css';
import data from '../Home.json';
import image from "../imgs/office.jpg"
import logo from '../imgs/logo_placeholder.png'
import TextBlock from "../components/TextBlock";

const imgStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
}

export default class Home extends React.Component {
  
  render() {
    const textBlocks = data.content.map(e => {
      return <TextBlock data={e}/>
    });
    const mobileClass = this.props.mobile ? "container contMobile" : "container contDesktop";
    return (
      <main>
        <div style={imgStyle} className={mobileClass}>
            <img src={logo} alt="" className="logo" />
            <h4 className="subtitle">{data.slogan}</h4>
        </div>
        {textBlocks}
      </main>
    )
  }
}
