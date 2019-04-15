import React, { Component } from 'react';
import { generate_slug } from './../../../methods/function_lib';
import { connect } from 'react-redux';
import { axios_fetch_serviceByID } from '../axios_call';
import TextField from '@material-ui/core/TextField';
import * as Constant from '../../constants';
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
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

class AlbumForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            txtName: '',
            txtDescription: '',
            txtSlug: '',
            imageData: [],
            mainImage :"https://genknews.genkcdn.vn/2017/photo-0-1504160949054.jpg",
        };
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        if (name === 'txtName') {
            let slug = generate_slug(target.value);
            this.setState({
                txtSlug: slug
            })
        }else if(name === 'mainImage'){
            this.setState({
                mainImage: URL.createObjectURL(target.files[0])
              })
        }else{
            this.setState({
                [name]: target.value
            });
        }
    }
    componentDidMount() {
        let id = this.props.serviceID;
        if(id!=null){
            this.props.fetchServiceItem(this.props.serviceID); 
        }
    }
    componentWillReceiveProps(nextProps){
        let serviceItem = nextProps.serviceItem;
        if(serviceItem !=null){
            this.setState({
                isEditing: true,
                txtName: serviceItem.name,
                txtDescription: serviceItem.description,
                txtSlug: serviceItem.slug,
                imageData: serviceItem.imageItems,
                mainImage :serviceItem.mainImage,
            })
        }else{
            this.setState({
                isEditing: false,
            });
        }
        
    }
    onSave = (e) => {
        e.preventDefault();
        // var { id, txtName, txtPrice, chkbStatus } = this.state;
        // var { history } = this.props;
        // var product = {
        //     id : id,
        //     name : txtName,
        //     price : txtPrice,
        //     status : chkbStatus
        // };
        // if (id) {
        //     this.props.onUpdateProduct(product);
        // } else {
        //     this.props.onAddProduct(product);
        // }
        // history.goBack(); // save xong thì back lại trang cũ ! có thể xài push để vào trang mới
    }
    onDeleteImage = (id) => {
        this.setState(prevState => {
            const imageData = prevState.imageData.filter(image => image.id !== id);
            return { imageData };
        });

    }
    render() {
        var { txtName, txtDescription, txtSlug, isEditing, imageData,mainImage } = this.state;
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2></h2>
                    <form onSubmit={this.onSave} >
                        <div className="form-group text-center">
                            <img style={{ width: 'auto', height: '150px', border: '1px solid black' }} src={mainImage} alt="album main image" />
                            <br /><br />
                            <input
                                name="mainImage"
                                accept="image/*"
                                style={{ display:'none'}}
                                id="contained-button-file"
                                type="file"
                                onChange={this.onChange}
                            />
                             <label htmlFor="contained-button-file" style={{ width: '18%', margin: 'auto',fontSize:'1.1em!important' }}>
                            <Button  variant="outlined" color="primary" component="span">
                                {isEditing ? 'Sửa ảnh chính' : 'Thêm ảnh chính'}
                            </Button>
                            </label>
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Tên album"
                                name="txtName"
                                className="form-input"
                                value={txtName}
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Đường dẫn"
                                name="txtSlug"
                                className="form-input"
                                value={txtSlug}
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
                                value={txtDescription}
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
                                            <Button variant="contained" color="primary" style={{ width: '20%', height: '100%' }} >Thêm ảnh</Button>
                                        </GridListTile>
                                        {
                                            imageData && imageData.map(image => (
                                                <GridListTile className="text-center" key={image.img} style={{ border: '1px solid black', }} >
                                                    <img style={{ width: 'auto', height: '200px' }} src={image.img} alt={image.title} />
                                                    <GridListTileBar
                                                        title={image.title}
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
                        <Button onClick={() => this.onSave()} type="submit" variant="contained" color="primary" style={{ width: '20%', margin: 'auto' }}>
                            {isEditing ? "Lưu lại" : "Thêm mới"}</Button>
                    </form>

                </div>
            </div >

        );
    }
}
const mapStateToProps = state => {
    return {
        serviceID: state.adminPage.serviceID,
        serviceItem : state.adminPage.serviceItem
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchServiceItem: (id) => {
            dispatch(axios_fetch_serviceByID(id));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (AlbumForm);
