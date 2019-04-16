import React, { Component } from 'react';
import { PostItem, DetailedExpansionPanel } from '../../components/index';
import { connect } from 'react-redux';
import { axios_fetch_price_services } from './axios_call';

const renderService = (services) => {
    var result = null;
    if (services.length > 0) {
        result = services.map((item, index) => {
            return (
                <DetailedExpansionPanel
                    key={index}
                    label={item.name}
                    itemValue={<PostItem key={index} post={item} />}
                />
            );
        });
    }
    return result;
}


class ServicePriceContainer extends Component {
    state = {
        curPage: 1,
        pageArr: [],
    }

    componentDidMount() {
        this.props.fetchPriceServices(this.props.serviceType, 1, 8);
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
    onChangePage =(newPage) => {
        this.setState({
            curPage: newPage
        })
        this.props.fetchServices(this.props.serviceType, newPage, 8);
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
        fetchPriceServices: (serviceType, page, size) => {
            dispatch(axios_fetch_price_services(serviceType, page, size));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServicePriceContainer);
