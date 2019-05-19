import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

const fixedAboutUsDetail ={
  address: "459 Bùi Văn Hòa - Tổ 20 - Khu phố 6 - P. Long Bình- TP. Biên Hòa - T. Đồng Nai",
  phone: "093 304 54 30",
  email: "dongphan24@gmail.com",
}

class VideoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contactMsg:'',
        aboutUsDetails:'',
    };
}

handleActionSnackbarClose = (event, reason) => {
    this.setState({ contactMsg: '' });
    if (reason === 'clickaway') {
        return;
    }
};
componentWillReceiveProps(nextProps) {
  if (nextProps.aboutUsDetails !==this.state.aboutUsDetails ) {
     this.setState({
      aboutUsDetails:nextProps.aboutUsDetails,
     })
  }
}
onContactUs = ()=>{
  let aboutUsDetails = this.state.aboutUsDetails ? this.state.aboutUsDetails : fixedAboutUsDetail
  this.setState({ contactMsg: <h5> Địa chỉ: {aboutUsDetails.address}<br /><br /> Điện thoại: {aboutUsDetails.phone}<br /><br />Email: {aboutUsDetails.email}</h5> });
}
  render() {
    var { video } = this.props;
    var { contactMsg } = this.state;
    return (
      <div className="gla_post_item">
        <div className="gla_post_title">
          <h3>{video.name}</h3>
        </div>
        <p>
          {video.description}
        </p>
        <div className="gla_post_img th-video">
          <iframe title={video.name} width="100%" height="600px" src={"//www.youtube.com/embed/" + video.video_src + "?autoplay=0&showinfo=0&controls=1"} frameBorder={0} allowFullScreen>
          </iframe>
        </div>
        <div className="gla_post_more clearfix">
          <div className="pull-left">
            <div onClick={() => this.onContactUs()} className="btn bootbox">Liên hệ ngay</div>
          </div>
        </div>
        <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={(contactMsg !== '')}
                    onClose={this.handleActionSnackbarClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span style={{textAlign:"left"}}>{contactMsg}</span>}
                    action={[
                        <IconButton
                            style={{marginTop:'-50px'}}
                            key="close"
                            aria-label="Close"
                            variant="outlined"
                            color="secondary"
                            onClick={this.handleActionSnackbarClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
      </div>

    );
  }
}
const mapStateToProps = state => {
  return {
      aboutUsDetails:state.userPage.aboutUsDetails,
  }

}

export default connect(mapStateToProps, null)(VideoItem);