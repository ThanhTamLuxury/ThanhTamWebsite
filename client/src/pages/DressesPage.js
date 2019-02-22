import React, { Component } from 'react';
import Header from '../components/Header/Header';
import * as Constant from './../constants/Constant';
import { DetailSlider } from './../components/index';
import { DressesPageContainer } from './../containers/index';





class DressesPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Header />
                <DetailSlider pageTitle={Constant.DRESSDETAILS_PAGE_TITLE} />
                <section id="gla_content" className="gla_content">
                    {/* section */}
                    <section className="gla_section">
                        <DressesPageContainer/>
                    </section>
                    {/* section end */}
                </section>
            </div>

        );
    }
}

export default DressesPage;
