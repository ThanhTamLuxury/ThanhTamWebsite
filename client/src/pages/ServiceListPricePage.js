import React, { Component } from 'react';
import * as Constant from '../constants/Constant';
import { DetailSlider, Header } from '../components/index';
import { ServicePriceContainer } from '../containers/index';





class ServiceListPricePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: '',
        };
    }

    componentDidMount() {
        let serviceType = this.props.serviceType;
        let title = '';
        switch ("PRICE_"+serviceType) {
            case Constant.PRICE_ALBUM:
                title = Constant.PRICE_ALBUMS_PAGE_TITLE;
                break;
            case Constant.PRICE_VIDEO:
                title = Constant.PRICE_VIDEO_PAGE_TITLE;
                break;
            case Constant.PRICE_INCLUSIVE:
                title = Constant.PRICE_ALL_IN_PAGE_TITLE;
                break;
        }
        this.setState({
            pageTitle: title
        })
        window.scrollTo(0, 0);
    }
    render() {
        var { pageTitle } = this.state;
        return (
            <div>
                <Header />
                <DetailSlider pageTitle={pageTitle} />
                <ServicePriceContainer serviceType = {this.props.serviceType}/>
            </div>

        );
    }
}

export default ServiceListPricePage;
