import React, { Component } from 'react';
import { AlbumItem } from './../../../components/index';

import { connect } from 'react-redux';
import { axios_fetch_TopAlbums } from './../axios_call';

const renderTopAlbums = (albums) => {
    var result = null;
    if(albums !=null){
        if (albums.length > 0) {
            result = albums.map((album, index) => {
                return (
                    <AlbumItem key={index} album={album} />
                );
            });
        }
    }
   
    return result;
}

class TopAlbumsContainer extends Component {

    componentDidMount() {
        this.props.fetchTopAlbums();
    }
    render() {
        var { topAlbums } = this.props;
        return (
            <section className="gla_section" id="gla_services">
                <div className="container text-center">
                    <p><img src={"images/animations/flowers2.gif"} data-bottom-top="@src:images/animations/flowers2.gif" height={150} alt /></p>
                    <h2>Albums</h2>
                    <h3 className="gla_subtitle">Những albums nổi bật</h3>
                    <p>{topAlbums && topAlbums.description}</p>
                    <div className="gla_icon_boxes row text-left">
                        {topAlbums && renderTopAlbums(topAlbums)}
                    </div>

                    <div className="gla_post_more clearfix">
                        <div>
                            <a href="/albums" className="btn">Xem thêm</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        topAlbums: state.homePage.topAlbums
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchTopAlbums: () => {
            dispatch(axios_fetch_TopAlbums());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopAlbumsContainer);
