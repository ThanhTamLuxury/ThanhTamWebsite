import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import * as Constant from '../../constants';
import { connect } from 'react-redux';
import { generate_slug } from './../../../methods/function_lib'
import Button from '@material-ui/core/Button';
import { axios_fetch_serviceByID } from '../axios_call';

class VideoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            txtID:'',
            txtName: '',
            txtLink:'',
            txtDescription: '',
        };
    }


    onChange = (e) => {
        var target = e.target;
        var name = target.name;

        this.setState({
            [name]: target.value
        });
        if (name === 'txtName') {
            let slug = generate_slug(target.value);
            this.setState({
                txtSlug: slug
            })
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
                txtID: serviceItem.id ,
                txtName: serviceItem.name,
                txtLink: Constant.YOUTUBE_PREFIX+serviceItem.mainImage,
                txtDescription: serviceItem.description,
            })
        }else {
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
        var { txtName, txtLink,txtDescription, isEditing } = this.state;
        var { serviceItem } = this.props;
        return (
            <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2></h2>
                <form onSubmit={this.onSave} >
                    <div className="form-group">
                        <TextField
                            label="Tên video"
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
                            name="txtLink"
                            value={txtLink}
                            className="form-input"
                            onChange={this.onChange}
                            variant="outlined"
                        />
                    </div>
                   
                    <div className="form-group">
                        <TextField
                            id="standard-textarea"
                            multiline
                            label="Đặc điểm nổi bật"
                            name="txtDescription"
                            value={txtDescription}
                            className="form-input"
                            onChange={this.onChange}
                            variant="outlined"
                        />
                    </div>
                    
                    
                    <Button type="submit" variant="contained" color="primary" style={{ width: '20%', margin: 'auto' }}>
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
export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
