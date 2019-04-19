import React, { Component } from 'react';
import Lightbox from 'react-images';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
class CarouselItem extends Component {

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
        var { images } = this.props;
        return (
            <div className="gla_shop_item_slider carousel-item">
                <Carousel
                    showThumbs={false}
                >
                    {this.renderDressImage(images)}
                </Carousel>

                <Lightbox
                    currentImage={this.state.currentImage}
                    images={images}
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
    renderDressImage = (images) => {
        var result = null;
        if (images.length > 0) {
            result = images.map((image, index) => {
                return (
                    <img src={image.src} alt={image.alt} onClick={(e) => this.openLightbox(index, e)} />
                );

            });
        }
        return result;
    }


}

export default CarouselItem;
