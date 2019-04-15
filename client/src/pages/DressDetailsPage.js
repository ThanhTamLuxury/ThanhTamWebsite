import React, { Component } from 'react';
import Header from '../components/Header/Header';
import * as Constant from './../constants/Constant';
import { DetailSlider } from './../components/index';
import { DressDetailsPageContainer } from './../containers/index';

class DressDetailsPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Header />
                <DetailSlider pageTitle={Constant.ALBUMDETAILS_PAGE_TITLE} />
                <section id="gla_content" className="gla_content">
                
                    {/* section */}
                    <section className="gla_section">
                    
                        <DressDetailsPageContainer dressID={this.props.match.params.id}/>
                    </section>
                    {/* section end */}
                </section>
            </div>


        );
    }
}

export default DressDetailsPage;
