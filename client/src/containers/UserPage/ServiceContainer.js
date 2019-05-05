import React, { Component } from 'react';
import { AlbumItem, DressItem, VideoItem, PostItem, DetailedExpansionPanel } from '../../components/index';
import { connect } from 'react-redux';
import { axios_fetch_services } from './axios_call';
import { onLoading, reset } from './actions';
import * as Constant from './constants';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

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
            }

        });
    }
    return result;
}


class ServiceContainer extends Component {
    state = {
        page: 1,
        data: [],
        rowsPerPage: 5,
        selected: [],
        totalItems: 0,
        curPage: 1,
        isLoading:false,
        totalPage:0,
        servicesResponse:{},
        messages: '',

    }
    
    handleActionSnackbarClose = (event, reason) => {
        this.props.onResetProps();
        this.setState({ messages: '' });
        if (reason === 'clickaway') {
            return;
        }
    };
    componentWillMount() {
        this.props.fetchServices(this.props.serviceType, 1, 8);
        this.props.onLoading(true);
    }
    componentWillReceiveProps(nextProps){
        var {isLoading,servicesResponse} = this.state;
        var {messages} = nextProps;
        if(nextProps.isLoading !== isLoading){
            this.setState({
                isLoading:nextProps.isLoading
            })
        }
        if (messages && messages !== this.state.messages) {
            this.setState({
                messages: messages,
            });
        }
        if (nextProps.servicesResponse && nextProps.servicesResponse !== servicesResponse) {
            this.setState({
                data: nextProps.servicesResponse.content,
                totalPage: nextProps.servicesResponse.totalPage
            });
            // this.props.onLoading(false);
        }
    }
    render() {
        const { serviceType } = this.props;
        const { curPage,isLoading,totalPage,data,messages } = this.state;
        // TODO : Xét trường hợp k có thông tin
        if (data) {
            return (
                <div className="container">
                    <div align="center" className="row">
                        {isLoading ? <div className="loading"></div> : ''}
                        {data.length > 0 ? renderService(data, serviceType) : <h2>Không có thông tin</h2>}
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
                                <a onClick={curPage < totalPage - 1 ? this.onChangePage(curPage + 1) : null}>
                                    <i className="ti ti-angle-right" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={(messages !== '')}
                    onClose={this.handleActionSnackbarClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<h5>{messages}</h5>}
                    action={[
                        <IconButton
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
        return (
            <div className="container">
                <h2>Không có thông tin</h2>
            </div>
        );

    }
    onChangePage = i => () => {
        this.setState({
            curPage: i
        })
        this.props.onLoading(true);
        this.props.fetchServices(this.props.serviceType, i, 8);
    }
    renderPageList = (totalPage, curPage) => {
        var result = [];
        //backend start from 0 but frontend start from 1
        for (var i = 1; i <= totalPage; i++) {
            result.push(<li style={{ cursor: 'pointer' }} key={i} className={curPage === i ? 'active' : ''}><a onClick={this.onChangePage(i)} value={i} >{i}</a></li>);
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        servicesResponse: state.userPage.servicesResponse,
        isLoading: state.userPage.isLoading,
        messages:state.userPage.messages,
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchServices: (serviceType, page, size) => {
            dispatch(axios_fetch_services(serviceType, page, size));
        },
        onLoading: (isLoading)=>{
            dispatch(onLoading(isLoading));
        },
        onResetProps: () => {
            dispatch(reset());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceContainer);
