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
    state = {
        curPage: 1,
        pageArr:[],
    }
    componentWillMount() {
        this.props.fetchTopVideos();
    }
    render() {
        const { albumsList } = this.props;
        const { curPage } = this.state;
        return (
            <div className="container">
                <div className="row">
                    {albumsList && renderAlbums(albumsList.content)}
                </div>
                <nav className="gla_blog_pag">
                    <ul className="pagination">
                        <li>
                            <a href="#">
                                <i className="ti ti-angle-left" />
                            </a>
                        </li>
                        {albumsList && this.renderPageList(albumsList.totalPage, curPage)}
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
    onChangePage = i => () => {
        console.log("Hello", i);
    }
     renderPageList = (totalPage, curPage) => {
        var result = [];
        for (var i = 1; i <= totalPage; i++) {
            result.push(<li style={{cursor:'pointer'}} key={i} className={curPage === i ? 'active' : ''}><a onClick={this.onChangePage(i)} value={i} value={i} >{i}</a></li>);
        }
        return result;
    }
}
const mapStateToProps = state => {
    console.log(state);
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
