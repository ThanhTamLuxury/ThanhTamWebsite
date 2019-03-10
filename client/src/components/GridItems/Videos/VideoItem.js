import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideoItem extends Component {
  compo
  render() {
    var { video } = this.props;
    return (
      <div className="gla_post_item">
        <div className="gla_post_title">
          <h3>{video.title}</h3>
        </div>
        <div className="gla_post_info">
          {video.camera}
          <span className="slash-divider">/</span>
          Đạo diễn : {video.video_director}
          <span className="slash-divider">/</span>
          Ekip: {video.video_ekip}
        </div>
        <p>
          {video.description}
        </p>
        <div className="gla_post_img th-video">
        <iframe width="100%" height="600px" src={"//www.youtube.com/embed/"+video.src+"?autoplay=0&showinfo=0&controls=1"} frameBorder={0} allowFullScreen>
      </iframe>
        </div>
        <div className="gla_post_more clearfix">
          <div className="pull-left">
            <a href="#" className="btn bootbox">Liên hệ ngay</a>
          </div>
        </div>
      </div>

    );
  }
}
export default VideoItem;