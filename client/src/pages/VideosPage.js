import React, { Component } from 'react';
import Header from '../components/Header/Header';
import * as Constant from './../constants/Constant';
import { DetailSlider } from './../components/index';
import { VideosPageContainer } from './../containers/index';





class VideosPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Header />
                <DetailSlider pageTitle={Constant.VIDEO_PAGE_TITLE} />
                <section id="gla_content" className="gla_content">
                    {/* section */}
                    <section className="gla_section">
                        <VideosPageContainer/>
                    </section>
                    {/* section end */}
                </section>
            </div>

        );
    }
}

export default VideosPage;
