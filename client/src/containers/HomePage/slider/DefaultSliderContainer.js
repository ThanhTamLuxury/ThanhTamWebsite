import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import $ from 'jquery';
import { connect } from 'react-redux';
import { axios_fetch_Sliders } from './../axios_call';

class SliderContainer extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            gif: '/images/animations/ourwedding_wh.gif',
            loaded: '/images/animations/ourwedding_wh.gif',
        }
    };


   

    componentDidMount() {
        this.props.fetchSliderItems();
        window.onscroll = () => {
            if (window.pageYOffset === 0) {
                this.reloadGif();
            }
        };
    }
    reloadGif = () => {
        this.setState({ loaded: '' })
        setTimeout(() => {
            this.setState({ loaded: this.state.gif })
        }, 0)
    }
    componentWillUnmount() {
        window.onscroll = null;
    }

    render() {
        var { sliderItems } = this.props;
        return (
            <div>
                {this.props.sliderItems && <Carousel
                    showThumbs={false}
                    showArrows={false}
                    autoPlay
                    infiniteLoop
                    emulateTouch
                    stopOnHover={false}
                    showStatus={false}
                >
                    {this.renderDefaultSlider(sliderItems)}
                </Carousel>}
            </div>
        );
    }

    onSlide() {
        $('html, body').animate({
            scrollTop: $("#gla_services").offset().top
        }, 1000);
    }
    renderDefaultSlider = (images) => {
        var result = null;
        if (images.length > 0) {
            result = images.map((image, index) => {
                return (
                    <div key={index} className="gla_slider gla_image_bck  gla_wht_txt gla_fixed" style={{ backgroundImage: "url(" + image.path + ")" }} data-stellar-background-ratio="0.8">
                        <img style={{ display: 'none' }} src={image.src} alt />
                        <div className="gla_over" data-color="#9abab6" data-opacity="0.2" />
                        <div className="container">
                            <div className="gla_slide_txt gla_slide_center_bottom text-center">
                                <p
                                ><img src={this.state.loaded} data-top-bottom="@src:images/animations/ourwedding_wh.gif"
                                    alt='ourwedding animation' height={150} />
                                </p>
                            </div>
                        </div>
                        <a className="gla_scroll_down gla_go" onClick={() => this.onSlide()} style={{ cursor: 'pointer' }}>
                            <b />
                            Scroll
            </a>
                    </div>
                );

            });
        }
        return result;
    }

}
const mapStateToProps = state => {
    return {
        sliderItems: state.homePage.sliderItems
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchSliderItems: () => {
            dispatch(axios_fetch_Sliders());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);
