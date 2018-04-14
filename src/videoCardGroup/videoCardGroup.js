import React, { Component } from 'react';
import videos from './videos.json';
import _ from 'lodash';
import './videoCardGroup.css';
export default class VideoCardGroup extends Component {
  constructor(props) {
    super(props);
    this.videoLists = ['zc6ytyHOXnc', 'tTn2P1kE6qs', '2RR0NusR-3c', 'PbFXw44-MDk', '7NWCXmPeuLg', 'Yz1r1mkta6c', '4k-x-eM_wbo'];
    this.videos = [{

    }]
  }
  renderCard(videoId, video) {
    return (
      <div className="card" key={videoId} onClick={(() => window.open(`https://www.youtube.com/watch?v=${videoId}`))}>
        <div className="image-container">
          <img className="card-img-top" src={`http://img.youtube.com/vi/${videoId}/mqdefault.jpg`} alt={`${video.title} hindi audio story `} />
          <span className="card-img-text">
            <span className="text fa-stack ">
              <i className="fa fa-circle fa-stack-2x "></i>
              <i className="fa fa-play fa-stack-1x fa-inverse"></i>
            </span>
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{video.title}</h5>
          <p className="card-text">{video.description}</p>
          {/* <p className="card-text"><i class="fas fa-play"></i> Listen now</p> */}
        </div>
      </div>);
  }
  renderCardLists() {
    return _.map(videos, (video, videoId) => this.renderCard(videoId, video));
  }
  render() {
    return (
      <div className="card-columns">
        {this.renderCardLists()}
      </div >
    )
  }
}