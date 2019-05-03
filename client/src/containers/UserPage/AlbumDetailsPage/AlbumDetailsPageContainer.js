import React, { Component } from 'react';
import Lightbox from 'react-images';
import { connect } from 'react-redux';
import { axios_fetch_serviceByID } from '../axios_call';
import Masonry from 'react-masonry-component';
import { onLoading } from '../actions';
import { history } from '../../../App';

class AlbumDetailsPageContainer extends Component {

    constructor() {
        super();
        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
            serviceItem: null,
            isLoading: false,
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
        this.props.onLoading(true);
    }
    componentWillReceiveProps(nextProps) {
        var { isLoading } = this.state;
        let {statusCode} = nextProps;
        if (nextProps.isLoading !== isLoading) {
            this.setState({
                isLoading: nextProps.isLoading
            })
        }
        
        if (statusCode) {
            switch (statusCode) {
                case 200:
                    let serviceItem = nextProps.serviceItem;
                    if (serviceItem !== this.state.serviceItem) {
                        this.setState({
                            serviceItem: serviceItem
                        })
                    }
                    break;
                case 404:
                    history.push('/albums');
                    break;
                case 500:
                default:
                    history.push('/notfound');
                    break;
            }
        }


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
        let { serviceItem, isLoading } = this.state;
        if (serviceItem != null) {
            return (
                <div className="container text-center">
                    {isLoading ? <div className="loading"></div> : ''}
                    <p><img src="/images/animations/flowers3.gif" data-bottom-top="@src:/images/animations/flowers3.gif" height={130} alt="Animation flower" /></p>
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
                        images={serviceItem.imageItems.map(image => {
                            return { src: image.path };
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
            <div>
                {isLoading ? <div className="loading"></div> : ''}
                <h2>Không có dữ liệu</h2>

            </div>
        );

    }
    renderAlbumImage = (images) => {
        var result = null;
        if (images.length > 0) {
            result = images.map((image, index) => {
                return (
                    <li key={index} className="image-element-class masonry-item">
                        <img src={image.path} onClick={(e) => this.openLightbox(index, e)} alt={image.path} />
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
        serviceItem: state.userPage.serviceItem,
        isLoading: state.userPage.isLoading,
        statusCode:state.userPage.statusCode,
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchServiceItem: (id) => {
            axios_fetch_serviceByID(id, dispatch);
        },
        onLoading: (isLoading) => {
            dispatch(onLoading(isLoading));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetailsPageContainer);
