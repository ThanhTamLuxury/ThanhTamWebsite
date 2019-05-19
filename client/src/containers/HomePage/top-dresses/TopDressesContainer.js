import React, { Component } from 'react';
import { DressItem } from './../../../components/index';
import { connect } from 'react-redux';
import { axios_fetch_TopDresses } from './../axios_call';



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
                    <p><img src={"images/animations/flower6.gif"} data-bottom-top="@src:images/animations/flower6.gif; opacity:1" className="gla_animated_flower skrollable skrollable-after" height={110} alt="This is flower gif" style={{ opacity: 1 }} /></p>
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
