
import React, { Component } from 'react';
import DefaultMenu from './DefaultMenu/DefaultMenu';
import MainMenu from './MainMenu/MainMenu';
import $ from 'jquery';

import {loading_menu_animate} from './jquery';

class Menu extends Component {
    componentDidMount(){
        loading_menu_animate($);
    }
    render() {
        var { menus } = this.props;
        return (
            <div>
               <MainMenu menus ={menus} />
               <DefaultMenu menus ={menus} />
            </div>
        );
    }
}



export default Menu;


