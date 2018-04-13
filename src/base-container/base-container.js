import React, { Component } from 'react';
import './base-container.css';

class BaseContainer extends Component {
  render() {
    return (
      <div className="container raised">
        <section className="heading">Start here</section>
      </div>
    );
  }
}

export default BaseContainer;
