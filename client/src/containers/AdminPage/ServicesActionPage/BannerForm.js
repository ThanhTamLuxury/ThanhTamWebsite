import React, { Component } from 'react';
import { generate_slug } from './../../../methods/function_lib';
import * as Constant from './../../constants';
import { connect } from 'react-redux';
import { axios_get_banners, axios_uploadBanner, axios_updateBanners } from '../axios_call';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'
import DragSortableList from 'react-drag-sortable'
import IconButton from '@material-ui/core/IconButton';
import { onLoading, actOnAddService, reset } from '../actions';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';





class BannerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            response: null,
            indexEdit: -1,
        };
    }


    onUploadMainImage = imageID => (e) => {
        var target = e.target;
        if (target) {
            const files = Array.from(target.files);
            let imageData = new FormData();
            if (files && files.length > 0) {
                this.setState({
                    indexEdit: imageID
                })
                imageData.append("file", files[0]);
                this.props.onLoading(true);
                this.props.onUploadFile(imageData);
            }
            
        }
 
    }

    componentWillMount() {
            this.props.getBanners();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isUpdate == true) {
            this.props.getBanners();
            this.props.onResetProps();
        }
        var { images, indexEdit } = this.state;
        if (nextProps.response) {
            let item = images.find(image => image.id === indexEdit);
            if (item) {
                item.path = nextProps.response.fileDownloadUri;
            }
        }
        if(nextProps.bannerResponse){
            this.setState({
                images:nextProps.bannerResponse,
            })
        }

    }
    onSave = (e) => {
        e.preventDefault();
        let {images}= this.state;
        let imagesArr = images.map((image,index)=>({
            id:0,
            path:image.path,
        }))
        if(images){
            this.props.onSaveBanners(imagesArr)
            this.props.onLoading(true);
        }
        
    }
    onDeleteImage = (id) => {
        // image display include blob
        this.setState(prevState => {
            const images = prevState.images.filter(image => image.id !== id);
            return { images };
        });
        // Not include blob
        this.setState(prevState => {
            const imageItems = prevState.imageItems.filter(image => image.id !== id);
            return { imageItems };
        });

    }

    onDeleteList = (e,id) => {
        this.setState(prevState => {
            const images = prevState.images.filter(item => item.id !== id);
            return { images };
        });
    }
    onSort = (sortedList, dropEvent) => {
        // console.log("sortedList", sortedList, dropEvent);
    }

    onAddImagesInput = () => {
        var { images } = this.state;
        let key = Date.now();
        let newImages = images;
        images.push({
            id: key,
            path: '',
        });
        this.setState({
            images: newImages
        })

    }
    onRenderList = () => {
        let result = [];
        var { images } = this.state;
        if (images.length < 1) {
            return [{
                content: ''
            }]
        }
        result = images.map((image, index) => {
            return ({
                content: (<GridListTile className="text-center" key={image.id} style={{ border: '1px solid black', minWidth: '300px' }} >
                    <input
                        name="images"
                        accept="image/*"
                        style={{ display: 'none' }}
                        id={image.id}
                        type="file"
                        multiple={true}
                        onChange={this.onUploadMainImage(image.id)}
                    />
                    <label htmlFor={image.id} style={{ width: '100%', height: '100%', margin: 'auto', fontSize: '1.1em!important' }}>
                        <img style={{ height: '200px', minHeight: '200px' }} src={image.path} alt='SKT' />
                    </label>
                    <GridListTileBar
                        title='SKT'
                        actionIcon={
                            <IconButton onClick={(e) => this.onDeleteList(e,image.id)}  >
                                <DeleteForeverOutlinedIcon style={{ color: 'rgba(255, 255, 255, 0.94)' }} />
                     </IconButton>
                        }
                    />
                </GridListTile>)
            })
        });
        return result;
    }
    render() {
        var { isEditing } = this.state;
        let listItems = this.onRenderList();
        console.log('here');
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2></h2>

                    <form onSubmit={this.onSave} >
                        <div className="form-group">
                            <GridList cellHeight={200} >
                                <GridListTile key="Subheader" cols={2} style={{ height: 'auto', marginBottom: '1em' }}>

                                    <Button onClick={this.onAddImagesInput} variant="contained" color="primary" style={{ width: '100%' }} component="span" >Thêm ảnh</Button>

                                </GridListTile>
                                <DragSortableList  items={listItems} onSort={this.onSort} dropBackTransitionDuration={0.3} type="vertical" />

                            </GridList>
                        </div>
                        <Button type="submit" variant="contained" color="primary" style={{ width: '20%', margin: 'auto' }}>
                            Lưu lại</Button>
                    </form>

                </div>
            </div >

        );
    }
}
const mapStateToProps = state => {
    return {
        serviceID: state.adminPage.serviceID,
        serviceItem: state.adminPage.serviceItem,
        response: state.adminPage.response,
        bannerResponse: state.adminPage.bannerResponse,
        isLoading: state.adminPage.isLoading,
        isUpdate:state.adminPage.isUpdate,
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoading: (isLoading) => {
            dispatch(onLoading(isLoading));
        },
        getBanners: () => {
            axios_get_banners(dispatch);
        },
        onUploadFile: (file) => {
            axios_uploadBanner(file, dispatch);
        },
        onSaveBanners: (imagesArr) => {
            axios_updateBanners(imagesArr, dispatch);
        },
        onResetProps: () => {
            dispatch(reset());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BannerForm);
