import React, { Component } from 'react';
import './Banner.css';
import logo from '../assets/images/ek-lifafa-logo-no-text.png';

class Banner extends Component {
  render() {
    return (
      <div className="container-fluid top-container">
        <div className="center-content">
          <div className="logo-container">
            <img alt="asd" src={logo}/>
            <h1>Audio stories</h1>
          </div>
          {/* <div className="yt-subscribe ">asdas</div> */}
        </div>
      </div>
    );
  }
}

export default Banner;
