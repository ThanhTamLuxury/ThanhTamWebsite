import React, { Component } from 'react';
import Header from '../components/Header/Header';
import * as Constant from './../constants/Constant';
import { DetailSlider, Footer } from './../components/index';
import {AlbumDetailsPageContainer} from './../containers/index';

class AlbumDetailsPage extends Component {

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Header/>
                
                <DetailSlider pageTitle={Constant.ALBUMDETAILS_PAGE_TITLE} />
                {/* Content */}
                <section className="gla_section gla_image_bck">
                    <AlbumDetailsPageContainer albumID={this.props.match.params.id} />
                    <Footer/>
                </section>
            </div>


        );
    }
}

export default AlbumDetailsPage;
