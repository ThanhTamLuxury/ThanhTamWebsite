import React, { Component } from 'react';
import { AlbumItem } from './../../components/index';
import { connect } from 'react-redux';
import { axios_fetch_albumsList } from './axios_call';

const renderAlbums = (albums) => {
    var result = null;
    if (albums.length > 0) {
        result = albums.map((album, index) => {
            return (
                <AlbumItem key={index} album={album} />
            );
        });
    }
    return result;
}

class AlbumsContainer extends Component {
    componentWillMount() {
        this.props.fetchTopVideos();
    }
    render() {
        const { albumsList } = this.props;
        return (
            <div className="container">
                <div className="row">
                    {albumsList && renderAlbums(albumsList.albums)}
                </div>
                <nav className="gla_blog_pag">
                    <ul className="pagination">
                        <li>
                            <a href="#">
                                <i className="ti ti-angle-left" />
                            </a>
                        </li>
                        <li className="active">
                            <a href="#">1</a>
                        </li>
                        <li>
                            <a href="#">2</a>
                        </li>
                        <li>
                            <a href="#">3</a>
                        </li>
                        <li>
                            <a href="#">4</a>
                        </li>
                        <li>
                            <a href="#">5</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="ti ti-angle-right" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        albumsList: state.albumsPage.albumsList
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchTopVideos: () => {
            dispatch(axios_fetch_albumsList());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlbumsContainer);
