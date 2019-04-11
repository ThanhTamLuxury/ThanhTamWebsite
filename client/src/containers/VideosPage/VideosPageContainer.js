import React, { Component } from 'react';
import { VideoItem } from './../../components/index';
import { connect } from 'react-redux';
import { axios_fetch_videosList } from './axios_call';

const renderVideos = (videos) => {
    var result = null;
    if (videos.length > 0) {
        result = videos.map((video, index) => {
            return (
                <VideoItem key={index} video={video} />
            );
        });
    }
    return result;
}

class VideosPageContainer extends Component {
    componentWillMount() {
        this.props.fetchVideosList();
    }
    render() {
        const {videosList}=this.props;
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-xs-12">
                        {videosList && renderVideos(videosList.content)}
                    </div>
                    <nav className="gla_blog_pag">
                        <ul className="pagination">
                            <li><a href="#"><i className="ti ti-angle-left" /></a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#"><i className="ti ti-angle-right" /></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        videosList: state.videosPage.videosList
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchVideosList: () => {
            dispatch(axios_fetch_videosList());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (VideosPageContainer);
