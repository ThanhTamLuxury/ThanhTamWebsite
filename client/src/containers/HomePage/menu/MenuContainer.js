import React, { Component } from 'react';
import Menu from '../../../components/Menu/Menu';

const defaultMenu = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true,
    },
    {
        name: 'Albums',
        to: '/albums',
        exact: true,
    },
    {
        name: 'Áo cưới',
        to: '/ao-cuoi',
        exact: true,
    },
    {
        name: 'Videos',
        to: '/videos',
        exact: true,
    },
    {
        name: 'Bảng giá',
        to: '#',
        exact: true,
        itemSliders: [
            {
                id: 1,
                name: 'Albums',
                slug: '/bang-gia/albums'
            },
            {
                id: 2,
                name: 'Videos',
                slug: '/bang-gia/videos'
            },
            {
                id: 3,
                name: 'Trọn gói',
                slug: '/bang-gia/tron-goi'
            }
        ]
    }
];

class MenuContainer extends Component {

    render() {
        return (
            <Menu menus={defaultMenu} />
        );
    }
}



export default MenuContainer;
