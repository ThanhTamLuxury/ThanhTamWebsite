import React, { Component } from 'react';
import Lightbox from 'react-images';
import $ from 'jquery';
import Isotope from 'isotope-layout';

import Masonry from 'react-masonry-component';
const dress =
    {
        id: 1,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        description: 'Andy and Jeska met in university in the Graphic Design program. They both remember each other from orientation, but it wasn’t love at first sight, that’s for sure. Andy remembers Jeska as a ‘snooty art bitch (having been in the visual arts program at the time), and she remembers Andy being an ‘arrogant computer nerd’, boasting his knowledge of Macs over the other students.',
        images:
            [
                {
                    src: '/images/wedding/andy_jeska/10095808183_874f459e53_k.jpg',
                    alt: 'ImageSKT'
                }, {
                    src: '/images/wedding/andy_jeska/600x600/10099718805_16c092eb64_k.jpg',
                    alt: 'ImageSKT'
                }, {
                    src: '/images/wedding/andy_jeska/10095988173_77091281cd_k.jpg',
                    alt: 'ImageSKT'
                }
            ],
        slug: 'dress/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
    }


class DressDetailsPageContainer extends Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }
    componentDidMount() {
        console.log('a');
        var jQueryBridget = require('jquery-bridget');
        jQueryBridget('isotope', Isotope, $);
        $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            stagger: 0,
            transitionDuration: '0',
            isAnimated: true,
            masonry: {
                columnWidth: '.grid-item',
            }
        });

    }
    openLightbox(index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    gotoImage(index) {
        this.setState({
            currentImage: index,
        });
    }
    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {

        return (
            <div className="gla_shop_item_slider aoCuoiSlider">
                <div className="col-sm-4 gla_anim_box grid-item ceremony z-index-slider" style={{ position: 'absolute', left: '0%', top: '0px' }}>
                    <div className="gla_shop_item aoCuoi">
                        <a href="http://aocuoithanhtam.com/upload/tiny/aocuoi/21013444_801595186676939_1318379037_n.jpg" className="lightbox">
                            <img src="http://aocuoithanhtam.com/upload/tiny/aocuoi/21013444_801595186676939_1318379037_n.jpg" alt />
                        </a>
                    </div>
                </div>
                <div className="col-sm-4 gla_anim_box grid-item ceremony z-index-slider" style={{ position: 'absolute', left: '0%', top: '0px' }}>
                    <div className="gla_shop_item aoCuoi">
                        <a href="http://aocuoithanhtam.com/upload/tiny/aocuoi/aocuoithanhtam2.png" className="lightbox">
                            <img src="http://aocuoithanhtam.com/upload/tiny/aocuoi/aocuoithanhtam2.png" alt />
                        </a>
                    </div>
                </div>
                <div className="col-sm-4 gla_anim_box grid-item ceremony z-index-slider" style={{ position: 'absolute', left: '0%', top: '0px' }}>
                    <div className="gla_shop_item aoCuoi">
                        <a href="http://aocuoithanhtam.com/upload/tiny/aocuoi/21533530_809275235908934_138774989_o.jpg" className="lightbox">
                            <img src="http://aocuoithanhtam.com/upload/tiny/aocuoi/21533530_809275235908934_138774989_o.jpg" alt />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
    renderDressImage = (images) => {
        var result = null;
        if (images.length > 0) {
            result = images.map((image, index) => {
                return (
                    <li className="image-element-class gla_shop_item masonry-item">
                        <img src={image.src} onClick={(e) => this.openLightbox(index, e)} />
                    </li>
                );

            });
        }
        return result;
    }


}
const masonryOptions = {
    transitionDuration: 0
};

export default DressDetailsPageContainer;
