import React, { Component } from 'react';
import './Banner.css';
import logo from '../assets/images/ek-lifafa-logo-no-text.png';

class Banner extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="center-content">
          <div className="logo-container">
            <img alt="asd" src={logo}/>
            <h1>Audio stories</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
