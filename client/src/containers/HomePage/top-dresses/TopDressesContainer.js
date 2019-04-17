import React, { Component } from 'react';
import { DressItem } from './../../../components/index';
import { connect } from 'react-redux';
import { axios_fetch_TopDresses } from './../axios_call';

const topDressesJson ={
    description :'',
    dresses : [
        {
            id: 1,
            name: 'Áo cưới trắng quá trời là cute',
            image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
            slug: 'dresses/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
        },
        {
            id: 2,
            name: 'Áo cưới đỏ quá trời là dễ thương',
            image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
            slug: 'dresses/2/chup-hinh-cuoi-tai-ha-loi'
        },
        {
            id: 3,
            name: 'Áo cưới vàng quá trời là lộng lẫy',
            image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
            slug: 'dresses/3/chup-hinh-cuoi-tai-da-lot'
        }
    ]
}
const description = "Our ceremony and reception will be held at the Liberty House. Located on the Hudson River, it has a beautiful, unobstructed view of the World Trade One building and a convenient ferry that runs between it and Manhattan."
const dresses = [
    {
        id: 1,
        name: 'Áo cưới trắng quá trời là cute',
        image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
        slug: 'dresses/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
    },
    {
        id: 2,
        name: 'Áo cưới đỏ quá trời là dễ thương',
        image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
        slug: 'dresses/2/chup-hinh-cuoi-tai-ha-loi'
    },
    {
        id: 3,
        name: 'Áo cưới vàng quá trời là lộng lẫy',
        image: '/images/wedding_m/600x600/beatriz-perez-moya-191993.jpg',
        slug: 'dresses/3/chup-hinh-cuoi-tai-da-lot'
    }
];


const renderTopDresses = (dresses) => {
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

class TopDressesContainer extends Component {
    componentDidMount() {
        this.props.fetchTopDresses();
    }
    render() {
        var { topDresses } = this.props;
        return (
            <section className="gla_section">
                <div className="container text-center">
                    <p><img src={"images/animations/flower6.gif" + '?a=' + Math.random()} data-bottom-top="@src:images/animations/flower6.gif; opacity:1" className="gla_animated_flower skrollable skrollable-after" height={110} alt style={{ opacity: 1 }} /></p>
                    <h2>Áo cưới</h2>
                    <h3 className="gla_subtitle">Áo cưới nổi bật</h3>
                    <p>{topDresses && topDresses.description}</p>
                    <div className="gla_icon_boxes row text-left">
                        {topDresses && renderTopDresses(topDresses)}
                    </div>
                    <div className="gla_post_more clearfix">
                        <div>
                            <a href="/ao-cuoi" className="btn">Xem thêm</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        topDresses: state.homePage.topDresses
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchTopDresses: () => {
            dispatch(axios_fetch_TopDresses());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (TopDressesContainer);
