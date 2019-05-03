import React, { Component } from 'react';
import { connect } from 'react-redux';
import { axios_fetch_serviceByID } from '../axios_call';
import CarouselItem from './subcomponents/CarouselItem';


class DressDetailsPageContainer extends Component {
    componentWillMount() {
        this.props.fetchServiceItem(this.props.dressID);
    }
    render() {
        let { serviceItem } = this.props;
        if (serviceItem != null) {
            let imageData =serviceItem.imageItems.map((item)=>{
                return ({
                    alt :item.path,
                    src:item.path
                })
            })
            return (
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-xs-12">
                            {/* Carousel and Anons */}
                            <div className="row product_inside">
                                <div className="col-md-7 col-sm-7 col-xs-12">
                                    {/* Carousel */}
                                    <CarouselItem images={imageData} />
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
            <h2>Không có dữ liệu</h2>
        );
    }
}
const mapStateToProps = state => {
    return {
        serviceItem: state.userPage.serviceItem
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchServiceItem: (id) => {
            axios_fetch_serviceByID(id,dispatch);
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DressDetailsPageContainer);
