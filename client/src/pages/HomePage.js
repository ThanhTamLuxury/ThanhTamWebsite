import React, { Component } from 'react';
import {
    DefaultSliderContainer,
    TopAlbumsContainer,
    TopDressesContainer,
    TopVideosContainer,
    QuoteContainer,
    Appointment
} from './../containers/index';

import { Header, Footer } from './../components/index';


class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Header />
                <div className="gla_page" id="gla_page">
                    <span style={{cursor:'pointer'}} className="gla_top ti ti-angle-up " />
                    {/* <div className="gla_music_icon">
                    <i className="ti ti-music" />
                </div> */}
                    <DefaultSliderContainer />
                    <section id="gla_content" className="gla_content">
                        <TopAlbumsContainer />
                        <TopVideosContainer />
                        <TopDressesContainer />
                        <QuoteContainer />
                        <Appointment />
                        <Footer/>
                    </section>
                </div>
            </div>
        );
    }
}

export default HomePage;
