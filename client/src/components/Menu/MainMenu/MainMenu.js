
import React, { Component } from 'react';
import { renderMenuLink } from '../../../methods/create_menu_link';

class MainMenu extends Component {

    render() {
        var { menus } = this.props;
        return (
            <div>
                <div className="gla_main_menu gla_main_menu_mobile">
                    <div className="gla_main_menu_icon" >
                        <i /><i /><i /><i />
                        <b><span className="char1" style={{ transitionDelay: '0.2s' }}>M</span><span className="char2" style={{ transitionDelay: '0.3s' }}>e</span><span className="char3" style={{ transitionDelay: '0.4s' }}>n</span><span className="char4" style={{ transitionDelay: '0.5s' }}>u</span></b>
                        <b className="gla_main_menu_icon_b"><span className="char1" style={{ transitionDelay: '0.2s' }}>B</span><span className="char2" style={{ transitionDelay: '0.3s' }}>a</span><span className="char3" style={{ transitionDelay: '0.4s' }}>c</span><span className="char4" style={{ transitionDelay: '0.5s' }}>k</span></b></div>
                </div>

                <div className="gla_main_menu_content gla_image_bck" data-color="rgba(0,0,0,0.9)" data-image="/images/wedding/andy_jeska/10099882125_4afe7c6786_k_mb.jpg">
                    <div className="gla_over" data-color="#000" data-opacity="0.7" />
                </div>
                <div className="gla_main_menu_content_menu gla_wht_txt text-right">
                    <div className="container">
                        <ul>
                            {renderMenuLink(menus)}
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}



export default MainMenu;


