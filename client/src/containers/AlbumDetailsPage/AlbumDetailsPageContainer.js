import React, { Component } from 'react';
import Lightbox from 'react-images';
import $ from 'jquery';
import Isotope from 'isotope-layout';

import Masonry from 'react-masonry-component';
const album =
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
                }, {
                    src: '/images/wedding/andy_jeska/10095988173_77091281cd_k.jpg',
                    alt: 'ImageSKT'
                }, {
                    src: '/images/wedding/andy_jeska/600x600/10099718805_16c092eb64_k.jpg',
                    alt: 'ImageSKT'
                }, {
                    src: '/images/wedding/andy_jeska/10095988173_77091281cd_k.jpg',
                    alt: 'ImageSKT'
                }, {
                    src: '/images/wedding/andy_jeska/600x600/10099718805_16c092eb64_k.jpg',
                    alt: 'ImageSKT'
                }, {
                    src: '/images/wedding/andy_jeska/10095988173_77091281cd_k.jpg',
                    alt: 'ImageSKT'
                }, {
                    src: '/images/wedding/andy_jeska/600x600/10099718805_16c092eb64_k.jpg',
                    alt: 'ImageSKT'
                }, {
                    src: '/images/wedding/andy_jeska/10095988173_77091281cd_k.jpg',
                    alt: 'ImageSKT'
                }, {
                    src: '/images/wedding/andy_jeska/10095988173_77091281cd_k.jpg',
                    alt: 'ImageSKT'
                },
            ],
        slug: 'albums/1/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
    }


class AlbumDetailsPageContainer extends Component {

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
        if (this.state.currentImage === album.images.length - 1) return;

        this.gotoNext();
    }

    render() {

        return (
            <div className="container text-center">
                <p><img src="/images/animations/flowers3.gif" data-bottom-top="@src:/images/animations/flowers3.gif" height={130} alt /></p>
                <h2>{album.name}</h2>
                <p>{album.description}</p>
                <Masonry
                    className={'my-gallery-class'}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                >
                    {this.renderAlbumImage(album.images)}
                </Masonry>
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={album.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                    preventScroll={true}
                    showThumbnails={true}
                />
            </div>
        );
    }
    renderAlbumImage = (images) => {
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

export default AlbumDetailsPageContainer;
