import React, { Component } from 'react';
import {AboutUsContainer} from './../../containers/index';
class Footer extends Component {
    render() {
        return (
            <section className="gla_section gla_image_bck gla_wht_txt footer" data-color="#292929" style={{ backgroundColor: 'rgb(41, 41, 41)' }}>
                <AboutUsContainer/>
            </section>
        );
    }
}



export default Footer;