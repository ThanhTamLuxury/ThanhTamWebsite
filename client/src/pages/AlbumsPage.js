import React, { Component } from 'react';
import Header from '../components/Header/Header';
import * as Constant from './../constants/Constant';
import { DetailSlider } from './../components/index';
import { AlbumsContainer } from './../containers/index';
class AlbumsPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
            <Header/>
                <DetailSlider pageTitle={Constant.ALBUMS_PAGE_TITLE} />
                <section id="gla_content" className="gla_content">
                    <section className="gla_section">
                        <AlbumsContainer />
                    </section>
                </section>
            </div>
        );
    }
}

export default AlbumsPage;
