import React, { Component } from 'react';
import Header from './../../components/Header/Header';
import * as Constant from './../../constants/Constant';
import { DetailSlider } from './../../components/index';
import { InclusivePricePageContainer } from './../../containers/index';





class AlbumsPricePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Header />
                <DetailSlider pageTitle={Constant.PRICE_ALL_IN_PAGE_TITLE} />
                {/* <section id="gla_content" className="gla_content"> */}
                    {/* section */}
                    {/* <section className="gla_section" style ={{backgroundImage :'/images/invitations/inv_i/back3.jpg'}}> */}
                       <InclusivePricePageContainer/>
                    {/* </section> */}
                    {/* section end */}
                {/* </section> */}
                
            </div>

        );
    }
}

export default AlbumsPricePage;
