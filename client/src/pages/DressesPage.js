import React, { Component } from 'react';
import Header from '../components/Header/Header';
import * as Constant from './../constants/Constant';
import { DetailSlider, Footer } from './../components/index';
import { ServiceContainer } from './../containers/index';





class DressesPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Header />
                <DetailSlider pageTitle={Constant.DRESSES_PAGE_TITLE} />
                <section id="gla_content" className="gla_content">
                    {/* section */}
                    <section className="gla_section">
                    <ServiceContainer serviceType = {this.props.serviceType} />
                    </section>
                    {/* section end */}
                    <Footer/>
                </section>
            </div>

        );
    }
}

export default DressesPage;
