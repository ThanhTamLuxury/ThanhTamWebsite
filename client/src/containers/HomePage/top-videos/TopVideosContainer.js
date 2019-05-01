import React, { Component } from 'react';
import { TopVideoItem } from './../../../components/index';
import { connect } from 'react-redux';
import { axios_fetch_TopVideos } from './../axios_call';

const topVideosJson ={
    videos : [
        {
            title: 'Nơi này có anh',
            description: '" Mùa xuân đến bình yên cho anh những giấc mơ. Hạ lưu giữ ngày mưa ngọt ngào nên thơ. Mùa thu lá vàng rơi đông sang anh nhớ em. Tình yêu bé nhỏ xin dành tặng riêng em ! "',
            url: 'https://www.youtube.com/embed/FN7ALfpGxiI',
            slug: '/videos'
        },
        {
            title: 'Cô gái  m52 !',
            description: '" Thôi thì là duyên nếu người thuận thì tôi sang thưa chuyện mẹ cha, xin được nên vợ chồng. Thương em để lâu hóa thêm âu sầu, nay nói ra cho hết đau đầu ! "',
            url: 'https://www.youtube.com/embed/Yp-sVNTXSB0',
            slug: '/videos'
        }
    ]
}
const videos = [
    {
        title: 'Nơi này có anh',
        description: '" Mùa xuân đến bình yên cho anh những giấc mơ. Hạ lưu giữ ngày mưa ngọt ngào nên thơ. Mùa thu lá vàng rơi đông sang anh nhớ em. Tình yêu bé nhỏ xin dành tặng riêng em ! "',
        src: 'FN7ALfpGxiI',
        slug: '/videos'
    },
    {
        title: 'Cô gái  m52 !',
        description: '" Thôi thì là duyên nếu người thuận thì tôi sang thưa chuyện mẹ cha, xin được nên vợ chồng. Thương em để lâu hóa thêm âu sầu, nay nói ra cho hết đau đầu ! "',
        src: 'Yp-sVNTXSB0',
        slug: '/videos'
    }
];


const renderTopVideos = (videos) => {
    var result = null;
    if (videos.length > 0) {
        result = videos.map((video, index) => {
            if(index <2){
                return (
                    <TopVideoItem key={index} video={video} index={index} />
                );
            }
        });
    }
    return result;
}

class TopVideosContainer extends Component {
    componentDidMount() {
        this.props.fetchTopVideos();
    }

    render() {
        var { topVideos } = this.props;
        return (
            <section className="gla_section gla_image_bck gla_fixed" data-stellar-background-ratio="0.2" data-image="images/wedding/ian_kelsey/14815177364_46f0b9d71e_k.jpg" style={{ backgroundImage: 'url("images/wedding/ian_kelsey/14815177364_46f0b9d71e_k.jpg")', backgroundAttachment: 'fixed', backgroundPosition: '50% 54px' }}>
                <div className="container">
                    <div className="gla_icon_boxes row text-left">
                        <div className="row gla_auto_height">
                            {topVideos && renderTopVideos(topVideos)}
                        </div>
                    </div >
                </div>
                <div align="center" style={{ marginBottom: '2em' }}>
                    <a href="/videos" className="xemThemAoCuoi btn submit">Xem thêm</a>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        topVideos: state.homePage.topVideos
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchTopVideos: () => {
            dispatch(axios_fetch_TopVideos());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopVideosContainer);
