import React, { Component } from 'react';
import { connect } from 'react-redux';
import { axios_fetch_serviceByID } from '../axios_call';
import CarouselItem from './subcomponents/CarouselItem';
import { onLoading } from '../actions';
import { history } from '../../../App';


class DressDetailsPageContainer extends Component {

    constructor() {
        super();
        this.state = {
            serviceItem: null,
            isLoading: false,
            imageData: null,
        };
    }

    componentDidMount() {
        this.props.fetchServiceItem(this.props.dressID);
        this.props.onLoading(true);
    }
    componentWillReceiveProps(nextProps) {
        var { isLoading } = this.state;
        let {statusCode} = nextProps;

        if (nextProps.isLoading !== isLoading) {
            this.setState({
                isLoading: nextProps.isLoading
            })
        }
        if (statusCode) {
            switch (statusCode) {
                case 200:
                    let serviceItem = nextProps.serviceItem;
                    if (serviceItem !== this.state.serviceItem) {
                        let imageData = serviceItem.imageItems.map((item) => {
                            return ({
                                alt: item.path,
                                src: item.path
                            })
                        })
                        this.setState({
                            serviceItem: serviceItem,
                            imageData: imageData
                        })
                    }
                    break;
                case 404:
                    history.push('/ao-cuoi');
                    break;
                case 500:
                default:
                    history.push('/notfound');
                    break;
            }
        }

    }
    render() {
        let { serviceItem, imageData, isLoading } = this.state;
        if (serviceItem) {
            return (
                <div className="container">
                    {isLoading ? <div className="loading"></div> : ''}
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            {/* Carousel and Anons */}
                            <div className="row product_inside">
                                <div className="col-md-7 col-sm-7 col-xs-12">
                                    {/* Carousel */}
                                    <CarouselItem images={imageData ? imageData : []} />
                                    {/* Carousel End */}
                                </div>
                                <div className="col-md-5 col-sm-5 col-xs-12">
                                    <h3 className="title">{serviceItem.name}</h3>
                                    <p>{serviceItem.shortDescription}</p>
                                </div>
                            </div>
                            <ul id="myTab" className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active">
                                    <a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Đặc điểm nổi bật</a>
                                </li>
                            </ul>
                            <div id="myTabContent" className="tab-content">
                                <div role="tabpanel" className="tab-pane fade in active" id="home" aria-labelledby="home-tab">
                                    <p>{serviceItem.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div>
                {isLoading ? <div className="loading"></div> : ''}
                <h2>Không có dữ liệu</h2>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        serviceItem: state.userPage.serviceItem,
        isLoading: state.userPage.isLoading,
        statusCode: state.userPage.statusCode,
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchServiceItem: (id) => {
            axios_fetch_serviceByID(id, dispatch);
        },
        onLoading: (isLoading) => {
            dispatch(onLoading(isLoading));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DressDetailsPageContainer);
