import React, { Component } from 'react';
import { PostItem, DetailedExpansionPanel } from '../../components/index';
import { connect } from 'react-redux';
import { axios_fetch_price_services } from './axios_call';
import { onLoading } from './actions';

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
        page: 1,
        data: [],
        rowsPerPage: 5,
        selected: [],
        totalItems: 0,
        curPage: 1,
    }

    componentDidMount() {
        this.props.fetchPriceServices(this.props.serviceType, 1, 8);
        this.props.onLoading(true);
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.servicesResponse != null) {
            this.setState({
                data: nextProps.servicesResponse.content,
                totalItems: nextProps.servicesResponse.totalItem
            });
        }
    }
    onChangePage =(newPage) => {
        this.props.fetchPriceServices(this.props.serviceType, newPage, 8);
        this.setState({
            curPage: newPage
        })
    }
    renderPageList = (totalPage, curPage) => {
        var result = [];
        for (var i = 1; i < totalPage; i++) {
            result.push(<li style={{ cursor: 'pointer' }} key={i} className={curPage === i ? 'active' : ''}><a onClick={this.onChangePage(i)} value={i} value={i} >{i}</a></li>);
        }
        return result;
    }
    render() {
        const { servicesResponse, serviceType } = this.props;
        const { curPage,isLoading } = this.state;
        
        // TODO : Xét trường hợp k có thông tin
        if (servicesResponse != null) {
            return (
                <div className="container">
                {isLoading ? <div className="loading"></div> : ''}
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
    
}
const mapStateToProps = state => {
    return {
        servicesResponse: state.userPage.servicesResponse,
        isLoading: state.userPage.isLoading
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchPriceServices: (serviceType, page, size) => {
            dispatch(axios_fetch_price_services(serviceType, page, size));
        },
        onLoading: (isLoading)=>{
            dispatch(onLoading(isLoading));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServicePriceContainer);
