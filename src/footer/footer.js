import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

  render() {
    return (
      <footer className="footer ">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-4">Follow us on social media</div>
          <div className="col col-lg-2"></div>
          <div className="col col-lg-2">
          <a href="https://www.youtube.com/c/eklifafa/?sub_confirmation=1" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube-square yt-icon"></i></a>
          <a href="https://www.facebook.com/ekLifafa/"><i className="fab fa-facebook fb-icon"></i></a>
          </div>
        </div>
      </div>
      </footer>
    );
  }
}

export default Footer;
