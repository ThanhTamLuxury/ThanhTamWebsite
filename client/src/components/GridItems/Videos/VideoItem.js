import React, { Component } from 'react';

class VideoItem extends Component {
  render() {
    var { video } = this.props;
    return (
      <div className="gla_post_item">
        <div className="gla_post_title">
          <h3>{video.name}</h3>
        </div>
        <p>
          {video.description}
        </p>
        <div className="gla_post_img th-video">
          <iframe width="100%" height="600px" src={"//www.youtube.com/embed/" + video.video_src + "?autoplay=0&showinfo=0&controls=1"} frameBorder={0} allowFullScreen>
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