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
    const textBlocks = data.content.map(e => {
      return <TextBlock data={e}/>
    });
    return (
      <main>
        <div style={imgStyle} className="container">
            <img src={logo} alt="" className="logo" />
            <h4 className="subtitle">{data.slogan}</h4>
        </div>
        {textBlocks}
      </main>
    )
  }
}
