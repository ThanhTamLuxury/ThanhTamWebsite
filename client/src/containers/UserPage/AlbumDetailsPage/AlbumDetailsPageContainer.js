import React, { Component } from 'react';
import Lightbox from 'react-images';
import { connect } from 'react-redux';
import { axios_fetch_serviceByID } from '../axios_call';
import Masonry from 'react-masonry-component';

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
        this.props.fetchServiceItem(this.props.albumID);
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
        if (this.state.currentImage === this.props.serviceItem.imageItems.length - 1) return;
        this.gotoNext();
    }

    render() {
        let { serviceItem } = this.props;
        if (serviceItem != null) {
            return (
                <div className="container text-center">
                    <p><img src="/images/animations/flowers3.gif" data-bottom-top="@src:/images/animations/flowers3.gif" height={130} alt /></p>
                    <h2>{serviceItem.name}</h2>
                    <p>{serviceItem.description}</p>
                    <Masonry
                        className={'my-gallery-class'}
                        options={masonryOptions}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={false}
                    >
                        {this.renderAlbumImage(serviceItem.imageItems)}
                    </Masonry>
                    <Lightbox
                        currentImage={this.state.currentImage}
                        images={serviceItem.imageItems.map(image =>{
                            return {src:image.path};
                        })}
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
        return (
            <h2>Không có dữ liệu</h2>
        );

    }
    renderAlbumImage = (images) => {
        var result = null;
        if (images.length > 0) {
            result = images.map((image, index) => {
                return (
                    <li className="image-element-class gla_shop_item masonry-item">
                        <img src={image.path} onClick={(e) => this.openLightbox(index, e)} />
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
const mapStateToProps = state => {
    return {
        serviceItem: state.userPage.serviceItem
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchServiceItem: (id) => {
            dispatch(axios_fetch_serviceByID(id));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetailsPageContainer);
