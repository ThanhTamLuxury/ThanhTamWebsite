import React, { Component } from 'react';

import $ from 'jquery';

const slider = {
    background_Url: 'images/wedding/andy_jeska/10099882125_4afe7c6786_k_mb.jpg',
    alt:'SliderAlt'
}
class SliderContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            gif : '/images/animations/ourwedding_wh.gif',
            loaded: '/images/animations/ourwedding_wh.gif'
        }
      };
      
      reloadGif = () => {
        this.setState({loaded: ''})
        setTimeout(() => {
          this.setState({loaded: this.state.gif})
        }, 0)
      }

    componentDidMount() {
        window.onscroll = () =>{
            if(window.pageYOffset === 0) {
                this.reloadGif();
              }
        };
      }
      componentWillUnmount() {
        window.onscroll = null;
      }

    render() {
        return (
            <div className="gla_slider gla_image_bck  gla_wht_txt gla_fixed"  data-image ={slider.background_Url} data-stellar-background-ratio="0.8">
                <div className="gla_over" data-color="#9abab6" data-opacity="0.2" />
                <div className="container">
                    <div className="gla_slide_txt gla_slide_center_bottom text-center">
                        <p
                        ><img src={this.state.loaded+'?a='+Math.random()}  data-top-bottom="@src:images/animations/ourwedding_wh.gif"
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
    }

    onSlide() {
        $('html, body').animate({
            scrollTop: $("#gla_services").offset().top
        }, 1000);
    }
    
}


export default SliderContainer;
