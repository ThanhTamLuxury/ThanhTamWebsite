import React, { Component } from 'react';
import { connect } from 'react-redux';
import { axios_fetch_serviceByID } from '../axios_call';
import CarouselItem from './subcomponents/CarouselItem';
const dress =
{
    id: 1,
    name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
    description: 'Andy and Jeska met in university in the Graphic Design program. They both remember each other from orientation, but it wasn’t love at first sight, that’s for sure. Andy remembers Jeska as a ‘snooty art bitch (having been in the visual arts program at the time), and she remembers Andy being an ‘arrogant computer nerd’, boasting his knowledge of Macs over the other students.',
    dress_images:
        [
            {
                src: 'http://aocuoithanhtam.com/upload/tiny/aocuoi/21013444_801595186676939_1318379037_n.jpg',
                alt: 'ImageSKT'
            }, {
                src: 'http://aocuoithanhtam.com/upload/tiny/aocuoi/aocuoithanhtam2.png',
                alt: 'ImageSKT'
            }, {
                src: 'http://aocuoithanhtam.com/upload/tiny/aocuoi/21533530_809275235908934_138774989_o.jpg',
                alt: 'ImageSKT'
            }
        ],
    outstanding_characteristic: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."
}


class DressDetailsPageContainer extends Component {
    componentWillMount() {
        this.props.fetchServiceItem(this.props.dressID);
    }
    render() {
        let { serviceItem } = this.props;
        if (serviceItem != null) {
            let imageData =serviceItem.imageItems.map((item,index)=>{
                return ({
                    alt :index,
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
                                    <p>{dress.description}</p>
                                </div>
                            </div>
                        </div>
                        {/* col end */}
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
            dispatch(axios_fetch_serviceByID(id));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DressDetailsPageContainer);
