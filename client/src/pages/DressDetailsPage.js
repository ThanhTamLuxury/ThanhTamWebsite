import React, { Component } from 'react';
import Header from '../components/Header/Header';
import * as Constant from './../constants/Constant';
import { DetailSlider, Footer } from './../components/index';
import { DressDetailsPageContainer } from './../containers/index';

class DressDetailsPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = Constant.DRESSDETAILS_PAGE_TITLE

    }

    render() {
        return (
            <div>
                <Header />
                <DetailSlider pageTitle={Constant.DRESSDETAILS_PAGE_TITLE} />
                <section id="gla_content" className="gla_content">
                
                    {/* section */}
                    <section className="gla_section">
                    
                        <DressDetailsPageContainer dressID={this.props.match.params.id}/>
                    </section>
                    {/* section end */}
                    <Footer/>
                </section>
            </div>


        );
    }
}

export default DressDetailsPage;
