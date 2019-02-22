import React, { Component } from 'react';
import { TopAlbumItem } from './../../../components/index';

const topAlbumsJson ={
    description : "",
    albums : [
    {
        id: 1,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Biên Hòa,',
        city: '  Đồng Nai',
        image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
        slug: 'albums/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
    },
    {
        id: 2,
        name: 'Chụp hình cưới tại khu du lịch Bửu Long',
        location: 'Bửu Long,',
        city: '  Đồng Nai',
        image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
        slug: 'albums/2/chup-hinh-cuoi-tai-ha-loi'
    },
    {
        id: 3,
        name: 'Chụp hình cưới tại phim trường Phương Anh',
        location: '',
        city: '  Đà to the Lọt',
        image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
        slug: 'albums/3/chup-hinh-cuoi-tai-da-lot'
    }
]
}
const description = "Our ceremony and reception will be held at the Liberty House. Located on the Hudson River, it has a beautiful, unobstructed view of the World Trade One building and a convenient ferry that runs between it and Manhattan."
const albums = [
    {
        id: 1,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Biên Hòa,',
        city: '  Đồng Nai',
        image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
        slug: 'albums/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
    },
    {
        id: 2,
        name: 'Chụp hình cưới tại khu du lịch Bửu Long',
        location: 'Bửu Long,',
        city: '  Đồng Nai',
        image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
        slug: 'albums/2/chup-hinh-cuoi-tai-ha-loi'
    },
    {
        id: 3,
        name: 'Chụp hình cưới tại phim trường Phương Anh',
        location: '',
        city: '  Đà to the Lọt',
        image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
        slug: 'albums/3/chup-hinh-cuoi-tai-da-lot'
    }
];


const renderTopAlbums = (albums) => {
    var result = null;
    if (albums.length > 0) {
        result = albums.map((album, index) => {
            return (
                <TopAlbumItem key={index} album={album} />
            );
        });
    }
    return result;
}

class TopAlbumsContainer extends Component {
    render() {
        return (
            <section className="gla_section" id="gla_services">
                <div className="container text-center">
                    <p><img src={"images/animations/flowers2.gif" + '?a=' + Math.random()} data-bottom-top="@src:images/animations/flowers2.gif" height={150} alt /></p>
                    <h2>Albums</h2>
                    <h3 className="gla_subtitle">Những albums nổi bật</h3>
                    <p>{description}</p>
                    <div className="gla_icon_boxes row text-left">
                        {renderTopAlbums(albums)}
                    </div>

                    <div className="gla_post_more clearfix">
                        <div>
                            <a href="Album.html" className="btn">Xem thêm</a>
                        </div>
                    </div>
                </div>
                {/* container end */}
            </section>
        );
    }
}

export default TopAlbumsContainer;
