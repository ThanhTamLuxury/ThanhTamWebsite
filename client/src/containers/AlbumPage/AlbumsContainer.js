import React, { Component } from 'react';
import { AlbumItem } from './../../components/index';
const albumsJson ={
    albums : [
        {
            id: 1,
            name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
            image_src: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
            slug: 'albums/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
        },
        {
            id: 2,
            name: 'Chụp hình cưới tại khu du lịch Bửu Long',
            image_src: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
            slug: 'albums/1/chup-hinh-cuoi-tai-ha-loi'
        },
        {
            id: 3,
            name: 'Chụp hình cưới tại Hồ Cốc Vũng Tàu',
            image_src: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
            slug: 'albums/1/chup-hinh-cuoi-tai-da-lot'
        },
        {
            id: 4,
            name: 'Chụp hình cưới tại phim trường Phương Anh',
            image_src: '/images/wedding_m/600x600/pro-image-photography-126737.jpg',
            slug: 'albums/1/chup-hinh-cuoi-tai-da-lot'
        }
    ]
}
const albums = [
    {
        id: 1,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
        slug: 'albums/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
    },
    {
        id: 2,
        name: 'Chụp hình cưới tại khu du lịch Bửu Long',
        image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
        slug: 'albums/1/chup-hinh-cuoi-tai-ha-loi'
    },
    {
        id: 3,
        name: 'Chụp hình cưới tại Hồ Cốc Vũng Tàu',
        image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
        slug: 'albums/1/chup-hinh-cuoi-tai-da-lot'
    },
    {
        id: 4,
        name: 'Chụp hình cưới tại phim trường Phương Anh',
        image: '/images/wedding_m/600x600/pro-image-photography-126737.jpg',
        slug: 'albums/1/chup-hinh-cuoi-tai-da-lot'
    }
];


const renderAlbums = (albums) => {
    var result = null;
    if (albums.length > 0) {
        result = albums.map((album, index) => {
            return (
                <AlbumItem key={index} album={album} />
            );
        });
    }
    return result;
}

class AlbumsContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {renderAlbums(albums)}

                </div>
                <nav className="gla_blog_pag">
                    <ul className="pagination">
                        <li>
                            <a href="#">
                                <i className="ti ti-angle-left" />
                            </a>
                        </li>
                        <li className="active">
                            <a href="#">1</a>
                        </li>
                        <li>
                            <a href="#">2</a>
                        </li>
                        <li>
                            <a href="#">3</a>
                        </li>
                        <li>
                            <a href="#">4</a>
                        </li>
                        <li>
                            <a href="#">5</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="ti ti-angle-right" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default AlbumsContainer;
