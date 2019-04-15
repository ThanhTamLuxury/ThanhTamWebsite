import React, { Component } from 'react';
import { AlbumItem, DressItem, VideoItem, PostItem, DetailedExpansionPanel } from '../../components/index';
import { connect } from 'react-redux';
import { axios_fetch_services } from './axios_call';
import * as Constant from './constants';

const renderService = (services, serviceType) => {
    var result = null;
    if (services.length > 0) {
        result = services.map((item, index) => {
            switch (serviceType) {
                case Constant.TYPE_ALBUM:
                    return (
                        <AlbumItem key={index} album={item} />
                    );
                case Constant.TYPE_WEDDING_DRESS:
                    return (
                        <DressItem key={index} dress={item} />
                    );
                case Constant.TYPE_VIDEO:
                    return (
                        <VideoItem key={index} video={item} />
                    );
                case Constant.PRICE_INCLUSIVE:
                case Constant.PRICE_VIDEO:
                case Constant.TYPE_VIDEO:
                    return (
                        <DetailedExpansionPanel
                            key={index}
                            label={item.name}
                            
                            // itemValue={<PostItem key={index} post={item} />}
                        />
                    );
            }

        });
    }
    return result;
}


class ServiceContainer extends Component {
    state = {
        curPage: 1,
        pageArr: [],
    }

    componentWillMount() {
        // let type_Price = '';
        // switch (this.props.serviceType) {
        //     case Constant.PRICE_ALBUM:
        //         type_Price = Constant.TYPE_ALBUM;
        //         break;
        //     case Constant.PRICE_VIDEO:
        //         type_Price = Constant.TYPE_WEDDING_DRESS;
        //         break;
        //     case Constant.PRICE_INCLUSIVE:
        //         type_Price = Constant.TYPE_VIDEO
        //         break;
        // }
        this.props.fetchServices(this.props.serviceType, 1, 8);
    }
    render() {
        const { servicesResponse, serviceType } = this.props;
        const { curPage } = this.state;
        // TODO : Xét trường hợp k có thông tin
        if (servicesResponse != null) {
            return (
                <div className="container">
                    <div className="row">
                        {servicesResponse.content.length > 0 ? renderService(servicesResponse.content, serviceType) : <h2>Không có thông tin</h2>}
                    </div>
                    <nav className="gla_blog_pag">
                        <ul className="pagination">
                            <li>
                                <a onClick={curPage > 1 ? this.onChangePage(curPage - 1, servicesResponse.totalPage) : null}>
                                    <i className="ti ti-angle-left" />
                                </a>
                            </li>
                            {this.renderPageList(servicesResponse.totalPage, curPage)}
                            <li>
                                <a onClick={curPage < servicesResponse.totalPage - 1 ? this.onChangePage(curPage + 1) : null}>
                                    <i className="ti ti-angle-right" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            );
        }
        return (
            <div className="container">
                <h2>Không có thông tin</h2>
            </div>
        );

    }
    onChangePage = i => (curPage) => {
        this.setState({
            curPage: i
        })
        this.props.fetchServices(this.props.serviceType, i, 8);
    }
    renderPageList = (totalPage, curPage) => {
        var result = [];
        for (var i = 1; i < totalPage; i++) {
            result.push(<li style={{ cursor: 'pointer' }} key={i} className={curPage === i ? 'active' : ''}><a onClick={this.onChangePage(i)} value={i} value={i} >{i}</a></li>);
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        servicesResponse: state.userPage.servicesResponse
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchServices: (serviceType, page, size) => {
            dispatch(axios_fetch_services(serviceType, page, size));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceContainer);
