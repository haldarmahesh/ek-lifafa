import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Banner from './banner/Banner';
import BaseContainer from './base-container/base-container';
class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <BaseContainer />
      </div>
    );
  }
}

export default App;
