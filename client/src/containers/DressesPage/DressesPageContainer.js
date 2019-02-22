import React, { Component } from 'react';
import { DressItem } from './../../components/index';
const dressesJson ={
    dresses : [
        {
            id: 1,
            name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
            image_src: 'http://www.aocuoithanhtam.com/upload/tinnho/210134448015951866769391318379037n-15041658787_374.86965589155x500.jpg',
            slug: 'ao-cuoi/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
        },
        {
            id: 2,
            name: 'Chụp hình cưới tại khu du lịch Bửu Long',
            image_src: 'http://www.aocuoithanhtam.com/upload/tinnho/aocuoithanhtam2-15041657575_410x500.png',
            slug: 'ao-cuoi/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
        },
        {
            id: 3,
            name: 'Chụp hình cưới tại Hồ Cốc Vũng Tàu',
            image_src: 'http://www.aocuoithanhtam.com/upload/tinnho/aocuoithanhtam-15041656807_410x500.png',
            slug: 'ao-cuoi/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
        },
        {
            id: 4,
            name: 'Chụp hình cưới tại phim trường Phương Anh',
            image_src: 'http://www.aocuoithanhtam.com/upload/tinnho/aocuoithanhtam2-15041657575_410x500.png',
            slug: 'ao-cuoi/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
        }
    ]
}
const dresses = [
    {
        id: 1,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        image: 'http://www.aocuoithanhtam.com/upload/tinnho/210134448015951866769391318379037n-15041658787_374.86965589155x500.jpg',
        slug: 'ao-cuoi/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
    },
    {
        id: 2,
        name: 'Chụp hình cưới tại khu du lịch Bửu Long',
        image: 'http://www.aocuoithanhtam.com/upload/tinnho/aocuoithanhtam2-15041657575_410x500.png',
        slug: 'ao-cuoi/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
    },
    {
        id: 3,
        name: 'Chụp hình cưới tại Hồ Cốc Vũng Tàu',
        image: 'http://www.aocuoithanhtam.com/upload/tinnho/aocuoithanhtam-15041656807_410x500.png',
        slug: 'ao-cuoi/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
    },
    {
        id: 4,
        name: 'Chụp hình cưới tại phim trường Phương Anh',
        image: 'http://www.aocuoithanhtam.com/upload/tinnho/aocuoithanhtam2-15041657575_410x500.png',
        slug: 'ao-cuoi/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
    }
];


const renderDresses = (dresses) => {
    var result = null;
    if (dresses.length > 0) {
        result = dresses.map((dress, index) => {
            return (
                <DressItem key={index} dress={dress} />
            );
        });
    }
    return result;
}

class DressesPageContainer extends Component {
    render() {
        return (
            <div className="container dresses-container">
                <div className="row">
                {renderDresses(dresses)}
                </div>
                <nav className="gla_blog_pag">
                    <ul className="pagination">
                        <li><a href="#"><i className="ti ti-angle-left" /></a></li>
                        <li className="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#"><i className="ti ti-angle-right" /></a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default DressesPageContainer;
