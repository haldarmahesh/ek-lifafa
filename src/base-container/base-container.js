import React, { Component } from 'react';
import './base-container.css';
import VideoCardGroup from '../videoCardGroup/videoCardGroup';
class BaseContainer extends Component {
  constructor(props) {
    super(props);
    this.videoLists = ['zc6ytyHOXnc', 'tTn2P1kE6qs', '2RR0NusR-3c', 'PbFXw44-MDk', '7NWCXmPeuLg', 'Yz1r1mkta6c', '4k-x-eM_wbo'];
  }
  render() {
    // let randomVideoId = this.videoLists[Math.floor(Math.random() * this.videoLists.length)];
    return (
      <div className="container raised">
        <section className="intro">
          <div className="heading">
            Welcome to Ek Lifafa <br />Listen to amazing hindi audio stories now.
          </div>
          <button className="yt-subscribe btn btn-danger" type="submit" onClick={() => {
            console.log('asd');
            window.open('https://www.youtube.com/c/eklifafa/?sub_confirmation=1');
          }}>
            <i className="fab fa-lg fa-youtube" target="_blank"></i>Subscribe Now</button>
          {/* <div className="sub-heading">Here we bring short stories in audio format, so that you can listen while you are travelling or relaxing. Just put your ear plugs and visit new world with Mahesh Haldar.</div> */}
        </section>

        {/* <div className="row justify-content-center">
          <div className="col-md-6 ">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${randomVideoId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </div>
          </div>
        </div>
        <h4 className="video-title">Story for this session</h4> */}
        <VideoCardGroup />

      </div>
    );
  }
}

export default BaseContainer;
