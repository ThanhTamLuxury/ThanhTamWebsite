import React, { Component } from 'react';
import { MenuContainer } from '../../containers/index';

import Isotope from 'isotope-layout';
import $ from 'jquery';
import { onLoadingSliderCss } from './functions';
class Header extends Component {
    componentDidMount() {
        onLoadingSliderCss($);
        var jQueryBridget = require('jquery-bridget');
        jQueryBridget('isotope', Isotope, $);
        $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-item',
            }
        });

        console.log('a');
    }
    render() {
        return (
            <header>
                <nav className="gla_light_nav gla_transp_nav">
                    <div className="container">
                        <div className="gla_logo_container clearfix">
                            <img src="images/glanz_logo.png" alt className="gla_logo_rev" />
                            <div className="gla_logo_txt">
                                <a href="TrangChu.html" className="gla_logo">Thanh tâm luxury</a>
                            </div>
                        </div>
                        <MenuContainer />
                    </div>
                </nav>
            </header>
        );
    }
}



export default Header;