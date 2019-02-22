import React, { Component } from 'react';
import Menu from '../../../components/Menu/Menu';

const MenuJson ={
    menus : [
        {
            name: 'Trang chủ',
            to: '/',
            exact: true,
            itemSliders:[]
        },
        {
            name: 'Albums',
            to: '/albums',
            exact: true,
            itemSliders: [
                {
                    id: 1,
                    name: 'Album chụp tại Hà Nội',
                    slug:'/ao-cuoi/ao-cuoi-1'
                },
                {
                    id: 2,
                    name: 'Album chụp tại Đà Lạt',
                    slug:'/ao-cuoi/ao-cuoi-1'
                },
                {
                    id: 3,
                    name: 'Album chụp tại Đà Nẵng',
                    slug:'/ao-cuoi/ao-cuoi-1'
                }
            ]
        },
        {
            name: 'Áo cưới',
            to: '/ao-cuoi',
            exact: true,
            itemSliders: [
                {
                    id: 1,
                    name: 'Áo cưới đỏ',
                    slug:'/ao-cuoi/ao-cuoi-1'
                },
                {
                    id: 2,
                    name: 'Áo cưới vàng',
                    slug: '/ao-cuoi/ao-cuoi-2'
                },
                {
                    id: 3,
                    name: 'Áo cưới xanh',
                    slug: '/ao-cuoi/ao-cuoi-3'
                }
            ]
        },
        {
            name: 'Videos',
            to: '/videos',
            exact: true,
            itemSliders: [
                {
                    id: 1,
                    name: 'Video 4K quay tại Đà Lạt',
                    slug:'/videos/albums'
                },
                {
                    id: 2,
                    name: 'Video HD quay tại Đà Nẵng',
                    slug:'/videos/albums'
                },
                {
                    id: 3,
                    name: 'Video 4K quay tại TPHCM',
                    slug:'/videos/albums'
                }
            ]
        },
        {
            name: 'Bảng giá',
            to: '#',
            exact: true,
            itemSliders: [
                {
                    id: 1,
                    name: 'Albums',
                    slug:'/bang-gia/albums'
                },
                {
                    id: 2,
                    name: 'Videos',
                    slug:'/bang-gia/videos'
                },
                {
                    id: 3,
                    name: 'Trọn gói',
                    slug:'/bang-gia/tron-goi'
                }
            ]
        }
    ],
}
const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true,
        itemSliders:[]
    },
    {
        name: 'Albums',
        to: '/albums',
        exact: true,
        itemSliders: [
            {
                id: 1,
                name: 'Album chụp tại Hà Nội',
                slug:'/albums/ao-cuoi-1'
            },
            {
                id: 2,
                name: 'Album chụp tại Đà Lạt',
                slug:'/albums/ao-cuoi-1'
            },
            {
                id: 3,
                name: 'Album chụp tại Đà Nẵng',
                slug:'/albums/ao-cuoi-1'
            }
        ]
    },
    {
        name: 'Áo cưới',
        to: '/ao-cuoi',
        exact: true,
        itemSliders: [
            {
                id: 1,
                name: 'Áo cưới đỏ',
                slug:'/ao-cuoi/ao-cuoi-1'
            },
            {
                id: 2,
                name: 'Áo cưới vàng',
                slug: '/ao-cuoi/ao-cuoi-2'
            },
            {
                id: 3,
                name: 'Áo cưới xanh',
                slug: '/ao-cuoi/ao-cuoi-3'
            }
        ]
    },
    {
        name: 'Videos',
        to: '/videos',
        exact: true,
        itemSliders: [
            {
                id: 1,
                name: 'Video 4K quay tại Đà Lạt',
                slug:'/videos/albums'
            },
            {
                id: 2,
                name: 'Video HD quay tại Đà Nẵng',
                slug:'/videos/albums'
            },
            {
                id: 3,
                name: 'Video 4K quay tại TPHCM',
                slug:'/videos/albums'
            }
        ]
    },
    {
        name: 'Bảng giá',
        to: '#',
        exact: true,
        itemSliders: [
            {
                id: 1,
                name: 'Albums',
                slug:'/bang-gia/albums'
            },
            {
                id: 2,
                name: 'Videos',
                slug:'/bang-gia/videos'
            },
            {
                id: 3,
                name: 'Trọn gói',
                slug:'/bang-gia/tron-goi'
            }
        ]
    }
];

class MenuContainer extends Component {
    
    render() {
        return (
            <Menu menus={menus}/>
        );
    }
}

export default MenuContainer;
