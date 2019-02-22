import React, { Component } from 'react';
class TopAlbumItem extends Component {

  render() {
    var { video, index } = this.props;
    return (
      <div>
        <div className={(index % 2 == 0) ? "col-md-6 gla_image_bck" : "col-md-6 col-md-push-6 gla_image_bck"} data-color="#eee" style={{ backgroundColor: 'rgb(238, 238, 238)', height: '520px' }}>
          <div className="gla_simple_block top-video">
            <h2>{video.title}</h2>
            <p>{video.description}</p>
          </div>
        </div>
        <div className={(index % 2 == 0) ? "col-md-6 gla_image_bck" : "col-md-6 col-md-pull-6 gla_image_bck"} style={{ height: '520px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <iframe width="100%" height="360px" src={video.url + "?controls=0?autoplay=1&loop=1&mute=1&enablejsapi=1"} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; mute;enablejsapi" allowFullScreen style={{ marginTop: '15%' }} />
        </div>
        </div>
    )
  }
}



export default TopAlbumItem;