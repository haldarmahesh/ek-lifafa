import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Banner from './banner/Banner';
import BaseContainer from './base-container/base-container';
import Footer from './footer/footer';

var urls = [
  'http://jaketrent.com',
  'http://twitter.com/jaketrent',
  'http://linkedin.com/in/jaketrent',
  'http://www.pinterest.com/jaketrent/artsy-fartsy/'
];
class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <BaseContainer />
        <Footer/>
      </div>
    );
  }
}

export default App;
