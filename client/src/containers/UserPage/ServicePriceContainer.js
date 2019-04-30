import React, { Component } from 'react';
import { PostItem, DetailedExpansionPanel } from '../../components/index';
import { connect } from 'react-redux';
import { axios_fetch_price_services } from './axios_call';
import { onLoading } from './actions';




class ServicePriceContainer extends Component {
    state = {
        page: 1,
        data: [],
        rowsPerPage: 5,
        selected: [],
        totalItems: 0,
        totalPage:0,
        curPage: 1,
        isLoading:false,
        servicesResponse:{},
    }
    
    renderService = (services,serviceType) => {
        var result = null;
        if (services.length > 0) {
            result = services.map((item, index) => {
                return (
                    <DetailedExpansionPanel
                        key={index}
                        label={item.name}
                        itemValue={<PostItem key={index} post={item}
                        serviceType = {serviceType}
                        />}
                    />
                );
            });
        }
        return result;
    }
    componentWillMount() {
        this.props.fetchPriceServices(this.props.serviceType, 1, 8);
        this.props.onLoading(true);
    }
    componentWillReceiveProps(nextProps){
        var {isLoading,servicesResponse} = this.state;
        if(nextProps.isLoading !== isLoading){
            this.setState({
                isLoading:nextProps.isLoading
            })
        }
        if (nextProps.servicesResponse && nextProps.servicesResponse !== servicesResponse) {
            this.setState({
                data: nextProps.servicesResponse.content,
                totalItems: nextProps.servicesResponse.totalItem,
                totalPage : nextProps.servicesResponse.totalPage,
            });
        }
    }
    onChangePage =(newPage) => {
        if(newPage != this.state.curPage){
            this.props.onLoading(true);
            this.props.fetchPriceServices(this.props.serviceType, newPage, 8);
            this.setState({
                curPage: newPage
            })
        }
        
    }
    renderPageList = (totalPage, curPage) => {
        var result = [];
        for (var i = 1; i <= totalPage; i++) {
            result.push(<li style={{ cursor: 'pointer' }} key={i} className={curPage === i ? 'active' : ''}><a onClick={this.onChangePage(i)} value={i} value={i} >{i}</a></li>);
        }
        return result;
    }
    render() {
        const { serviceType } = this.props;
        const { curPage,isLoading,data,totalPage } = this.state;
        // TODO : Xét trường hợp k có thông tin
            return (
                <div className="container">
                    <h1 className="text-center">Danh sách bảng giá</h1>
                    {isLoading ? <div className="loading"></div> : ''}
                    <div className="row">
                        {data.length > 0 ? this.renderService(data, serviceType) : <h2>Không có thông tin</h2>}
                    </div>
                    <nav className="gla_blog_pag">
                        <ul className="pagination">
                            <li>
                                <a onClick={curPage > 1 ? this.onChangePage(curPage - 1, totalPage) : null}>
                                    <i className="ti ti-angle-left" />
                                </a>
                            </li>
                            {this.renderPageList(totalPage, curPage)}
                            <li>
                                <a onClick={curPage < totalPage ? this.onChangePage(curPage + 1) : null}>
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
