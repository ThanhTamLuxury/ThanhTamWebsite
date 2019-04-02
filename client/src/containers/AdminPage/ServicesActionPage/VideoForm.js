import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import * as Constant from '../constants';
import { generate_slug } from './../../../methods/function_lib'
import Button from '@material-ui/core/Button';

class VideoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            txtName: '',
            txtLink:'',
            txtDescription: '',
            txtCamera:'',
            txtDirectorEkip:'',
        };
    }


    onChange = (e) => {
        var target = e.target;
        var name = target.name;

        console.log(target.value);
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
        this.setState({
            imageData: [
                {
                    id: '1',
                    img: 'https://genknews.genkcdn.vn/2017/photo-0-1504160949054.jpg',
                    title: 'Image',
                }, {
                    id: '2',
                    img: 'https://upload.wikimedia.org/wikipedia/tr/e/e2/SK_Telecom_T1.jpg',
                    title: 'Image',
                },
                {
                    id: '3',
                    img: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/062017/untitled-1_57.png?itok=tEAhECSi',
                    title: 'Image',
                },
                {
                    id: '4',
                    img: 'https://ih0.redbubble.net/image.270851672.6386/raf,750x1000,075,t,101010:01c5ca27c6.u1.jpg',
                    title: 'Image',
                },
                {
                    id: '5',
                    img: 'https://i.ytimg.com/vi/7aBiuSevfTE/maxresdefault.jpg',
                    title: 'Image',
                }
            ]
        })
        switch (this.props.serviceItem.key) {
            case Constant.SERVICE_EDIT_VIDEO:
                this.setState({
                    isEditing: true
                });
                break;
            default:
                this.setState({
                    isEditing: false
                });
        }

        // fetch API get Item
    }
    onSave = (e) => {
        console.log('Here');
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
        var { txtName, txtLink, txtCamera,txtDirectorEkip,txtDescription, isEditing } = this.state;
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
                            label="Máy quay"
                            name="txtCamera"
                            className="form-input"
                            value={txtCamera}
                            onChange={this.onChange}
                            variant="outlined"
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            label="Đạo diễn + Ekip"
                            name="txtDirectorEkip"
                            className="form-input"
                            value={txtDirectorEkip}
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

export default VideoForm;
