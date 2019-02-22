
import React, { Component } from 'react';
import { renderMenuLink } from '../../../methods/create_menu_link';

class DefaultMenu extends Component {

    render() {
        var { menus } = this.props;
        return (
            <div>
                <div className="gla_default_menu">
                    <ul>
                        {renderMenuLink(menus)}
                    </ul>
                </div>
            </div>

        );
    }

}


export default DefaultMenu;


