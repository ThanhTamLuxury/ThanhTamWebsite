import React, { Component } from 'react';
import { TopVideoItem } from './../../../components/index';
import { connect } from 'react-redux';
import { axios_fetch_TopVideos } from './../axios_call';




const renderTopVideos = (videos) => {
    var result = null;
    if (videos.length > 0) {
        result = videos.map((video, index) => {
            if(index <2){
                return (
                    <TopVideoItem key={index} video={video} index={index} />
                );
            }
        });
    }
    return result;
}

class TopVideosContainer extends Component {
    componentDidMount() {
        this.props.fetchTopVideos();
    }

    render() {
        var { topVideos,aboutUsDetails } = this.props;
        console.log(aboutUsDetails);
        return (
            <section className="gla_section gla_image_bck gla_fixed" data-stellar-background-ratio="0.2" data-image="images/headers/14815177364_46f0b9d71e_k.jpg" style={{ backgroundImage: 'url("images/headers/14815177364_46f0b9d71e_k.jpg")', backgroundAttachment: 'fixed', backgroundPosition: '50% 54px' }}>
                <div className="container">
                    <div className="gla_icon_boxes row text-left">
                        <div className="row gla_auto_height">
                            {topVideos && renderTopVideos(topVideos)}
                        </div>
                    </div >
                </div>
                <div align="center" style={{ marginBottom: '2em' }}>
                    <a href="/videos" className="xemThemAoCuoi btn submit">Xem thêm</a>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        topVideos: state.homePage.topVideos,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchTopVideos: () => {
            dispatch(axios_fetch_TopVideos());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopVideosContainer);
