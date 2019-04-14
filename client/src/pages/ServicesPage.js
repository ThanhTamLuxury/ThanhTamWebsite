import React, { Component } from 'react';
import Header from '../components/Header/Header';
import * as Constant from '../constants/Constant';
import { DetailSlider } from '../components/index';
import { ServiceContainer } from '../containers/index';
class ServicesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: '',
        };
    }

    componentDidMount() {
        let serviceType = this.props.serviceType;
        let title = '';
        switch (serviceType) {
            case Constant.TYPE_ALBUM:
                title = Constant.ALBUMS_PAGE_TITLE;
                break;
            case Constant.TYPE_VIDEO:
                title = Constant.VIDEO_PAGE_TITLE;
                break;
            case Constant.TYPE_WEDDING_DRESS:
                title = Constant.DRESSES_PAGE_TITLE;
                break;
        }
        this.setState({
            pageTitle: title
        })
        window.scrollTo(0, 0);
    }
    render() {
        var {pageTitle} = this.state;
        return (
            <div>
            <Header/>
                <DetailSlider pageTitle={pageTitle} />
                <section id="gla_content" className="gla_content">
                    <section className="gla_section">
                        <ServiceContainer serviceType = {this.props.serviceType} />
                    </section>
                </section>
            </div>
        );
    }
}

export default ServicesPage;
