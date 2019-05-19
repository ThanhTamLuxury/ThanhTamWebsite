import React, { Component } from 'react';
import { generate_slug } from './../../../methods/function_lib';
import * as Constant from './../../constants';
import { connect } from 'react-redux';
import { axios_fetch_serviceByID, axios_add_update_with_file_service } from '../axios_call';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { onLoading, reset } from '../actions';
class AlbumForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            isLoading: false,
            txtID: '',
            txtName: '',
            txtDescription: '',
            txtSlug: '',
            images: [],
            imagesFiles: [],
            mainImage: 'https://www.ijustloveit.co.uk/images/products/personalised-white-leather-photo-album-1_2.jpg',
            mainImageFile: [],
            response: {},
            validateMsg:'',
        };
    }

    onUploadMainImage = (e) => {
        var target = e.target;
        const files = Array.from(target.files);
        if (files) {
            this.setState({
                mainImageFile: files,
                mainImage: URL.createObjectURL(files[0]),
            })
        }

    }

    onUploadMultipleImages = (e) => {
        var { images, imagesFiles } = this.state;
        var target = e.target;
        const files = Array.from(target.files);
        if (files && files.length > 0) {
            //- Update string Path
            // Combine DBI images of service with new upload images (FE only) 
            let fullImagesPath = [];
            // New Image
            let newImagesPath = files.map((file) => ({
                id: Date.now(),
                file: file,
                path: URL.createObjectURL(file)
            }));
            // DBI Images
            let seriveImagesPath = images;
            fullImagesPath = newImagesPath.concat(seriveImagesPath);
            let newFullImagesFiles = [];
            newFullImagesFiles = imagesFiles.concat(newImagesPath);
            this.setState({
                imagesFiles: newFullImagesFiles,
                images: fullImagesPath // image display
            })
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        if (name === 'txtName') {
            let slug = generate_slug(target.value);
            this.setState({
                txtName: target.value,
                txtSlug: slug
            })
        } else {
            this.setState({
                [name]: target.value
            });
        }
    }
    onResetState = () => {
        this.setState({
            isEditing: false,
            isLoading: false,
            txtID: '',
            txtName: '',
            txtDescription: '',
            txtSlug: '',
            images: [],
            imagesFiles: [],
            mainImage: 'https://www.ijustloveit.co.uk/images/products/personalised-white-leather-photo-album-1_2.jpg',
            mainImageFile: [],
            response: {}
        })
    }
    componentWillMount() {
        this.onResetState();
    }
    componentDidMount() {
        let id = this.props.serviceID;
        if (id) {
            this.props.fetchServiceItem(id);
            this.props.onLoading(true);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isUpdate === true) {
            let id = this.props.serviceID;
            if (id) {
                this.props.onResetProps();
                this.props.fetchServiceItem(id);
                this.props.onLoading(true);
            }
        }
        let serviceItem = nextProps.serviceItem;
        if (serviceItem != null) {
            this.setState({
                isEditing: true,
                txtID: serviceItem.id,
                txtName: serviceItem.name,
                txtDescription: serviceItem.description,
                txtSlug: serviceItem.slug,
                images: serviceItem.imageItems,
                mainImage: serviceItem.mainImage,
            })
        } else {
            this.setState({
                isEditing: false,
            });
        }

    }
    handleActionSnackbarClose = (event, reason) => {
        this.setState({ validateMsg: '' });
        if (reason === 'clickaway') {
            return;
        }
    };
    
    checkValidation = ()=>{
        var {txtName, txtSlug} = this.state;   
        if((txtName === null) || (txtName === '')){
            return Constant.getCheckValidateMessage('Tên albums','REQUIRED');
        }else if((txtSlug === null) || (txtSlug === '')){
            return Constant.getCheckValidateMessage('Đường dẫn','REQUIRED');
        }else{
            return '';
        }
    }
    onSave = (e) => {
        e.preventDefault();
        var { txtID, txtName, txtDescription, txtSlug, images, imagesFiles, mainImage, isEditing, mainImageFile } = this.state;       
        let check = this.checkValidation();
        if(check !== ''){
            this.setState({
                validateMsg :check
            })
        }else{
            let mainImageData = new FormData();
            if (mainImageFile.length > 0) {
                mainImageData.append("file", mainImageFile[0]);
            }
            let multipleFilesData = new FormData();
            if (imagesFiles && imagesFiles.length > 0) {
                imagesFiles.forEach(function (item) {
                    multipleFilesData.append("files", item.file);
                });
            }
            let service = null;
            if (isEditing) {
                let imgArr = images.map(image => ({
                    id: null,
                    path: image.path
                }))
                let imagesService = imgArr.filter(image => (image.path.indexOf('blob:') < 0));
                service = {
                    id: txtID,
                    name: txtName ? txtName :'',
                    description: txtDescription? txtDescription :'',
                    slug: txtSlug ? txtSlug:'',
                    mainImage: mainImage ? mainImage :'',
                    imageItems: imagesService,
                    serviceType: Constant.SERVICE_ALBUM,
                    type: Constant.SERVICE_ALBUM,
                }
                this.props.onUpdate(service, Constant.SERVICE_ALBUM, multipleFilesData, mainImageData);
            } else {
                service = {
                    name: txtName ? txtName :'',
                    description: txtDescription? txtDescription :'',
                    slug: txtSlug ? txtSlug:'',
                    imageItems: [],
                    serviceType: Constant.SERVICE_ALBUM,
                    type: Constant.SERVICE_ALBUM,
                }
                this.props.onAdd(service, Constant.SERVICE_ALBUM, multipleFilesData, mainImageData);
                this.setState({
                    isEditing: false,
                    isLoading: false,
                    txtID: '',
                    txtName: '',
                    txtDescription: '',
                    txtSlug: '',
                    images: [],
                    mainImage: 'https://www.ijustloveit.co.uk/images/products/personalised-white-leather-photo-album-1_2.jpg',
                    mainImageFile: [],
                    response: {},
                    validateMsg:'',
                })
            }
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
            const imagesFiles = prevState.imagesFiles.filter(image => image.id !== id);
            return { imagesFiles };
        });

    }
    render() {
        var { txtName, txtDescription, txtSlug, isEditing, images, mainImage, validateMsg } = this.state;
        return ( 
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2> </h2>
                    <form onSubmit={this.onSave} >
                        <div className="form-group text-center">
                            <img style={{ width: 'auto', height: '150px', border: '1px solid black' }} src={mainImage} alt="album main" />
                            <br /><br />
                            <input
                                name="mainImage"
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="contained-button-file"
                                type="file"
                                multiple={false}
                                onChange={this.onUploadMainImage}
                            />
                             
                            <label htmlFor="contained-button-file" style={{ margin: 'auto', fontSize: '1.1em!important' }}>
                                <Button variant="outlined" color="primary" component="span">
                                    {isEditing ? 'Sửa ảnh chính' : 'Thêm ảnh chính'}
                                </Button>
                            </label>
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Tên album"
                                name="txtName"
                                className="form-input"
                                value={txtName || ''}
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Đường dẫn"
                                name="txtSlug"
                                className="form-input"
                                value={txtSlug || ''}
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                id="standard-textarea"
                                multiline
                                label="Mô tả"
                                name="txtDescription"
                                value={txtDescription || ''}
                                className="form-input"
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                            <ExpansionPanel >
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography >Hình ảnh</Typography>
                                </ExpansionPanelSummary>
                                <Divider />
                                <ExpansionPanelDetails >
                                    <GridList cellHeight={200} >
                                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto', marginBottom: '1em' }}>
                                            <input
                                                name="images"
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                                id="images-upload-button"
                                                type="file"
                                                multiple={true}
                                                onChange={this.onUploadMultipleImages}
                                            />
                                            <label htmlFor="images-upload-button" color="primary" style={{ width: '100%', height: '100%', margin: 'auto', fontSize: '1.1em!important' }}>
                                                <Button variant="contained" color="primary" style={{ width: '100%' }} component="span" >Thêm ảnh</Button>
                                            </label>
                                        </GridListTile>
                                        {
                                            images && images.map(image => (
                                                <GridListTile className="text-center" key={image.id} style={{ border: '1px solid black', minWidth: '300px' }} >
                                                    <img style={{ height: '200px' }} src={image.path} alt={image.path} />
                                                    <GridListTileBar
                                                        title={image.path}
                                                        actionIcon={
                                                            <IconButton onClick={() => this.onDeleteImage(image.id)}  >
                                                                <DeleteForeverOutlinedIcon style={{ color: 'rgba(255, 255, 255, 0.94)' }} />
                                                            </IconButton>
                                                        }
                                                    />
                                                </GridListTile>
                                            ))}
                                    </GridList>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                        <Button type="submit" variant="contained" color="primary" style={{ width: '20%', margin: 'auto' }}>
                            {isEditing ? "Lưu lại" : "Thêm mới"}</Button>
                    </form>
                    <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={(validateMsg !== '')}
                    onClose={this.handleActionSnackbarClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<h5>{validateMsg}</h5>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            variant="outlined"
                            color="secondary"
                            onClick={this.handleActionSnackbarClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
                </div>
            </div >

        );
    }
}
const mapStateToProps = state => {
    return {
        // serviceID: state.adminPage.serviceID,
        serviceItem: state.adminPage.serviceItem,
        response: state.adminPage.response,
        isLoading: state.adminPage.isLoading,
        isUpdate: state.adminPage.isUpdate,
        statusCode :state.adminPage.statusCode
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoading: (isLoading) => {
            dispatch(onLoading(isLoading));
        },
        fetchServiceItem: (id) => {
            axios_fetch_serviceByID(id,dispatch);
        },
        onUpdate: (service, serviceType, files, file) => {
            axios_add_update_with_file_service(service, serviceType, files, file, dispatch, true);
        },
        onAdd: (service, serviceType, files, file) => {
            axios_add_update_with_file_service(service, serviceType, files, file, dispatch, false);
        },
        onResetProps: () => {
            dispatch(reset());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);
