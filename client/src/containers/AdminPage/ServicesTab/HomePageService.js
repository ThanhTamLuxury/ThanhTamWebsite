import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Button from '@material-ui/core/Button';

class HomePageService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: true,
            txtAddress: '',
            txtPhoneNo: '',
            txtEmail: '',
            txtLocation: '',
        };
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    componentDidMount() {

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
    render() {
        var { txtAddress, txtPhoneNo,txtEmail,txtLocation, isEditing } = this.state;
        return (
            <div style={{minWidth:'400px'}}>
                <h2>Thông tin liên lạc</h2>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2></h2>
                    <form onSubmit={this.onSave} >
                        <div className="form-group">
                            <TextField
                                label="Địa chỉ"
                                name="txtAddress"
                                className="form-input"
                                value={txtAddress}
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Số điện thoại"
                                name="txtPhoneNo"
                                value={txtPhoneNo}
                                className="form-input"
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Địa chỉ email"
                                name="txtEmail"
                                className="form-input"
                                value={txtEmail}
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Địa chỉ liên hệ"
                                name="txtLocation"
                                className="form-input"
                                value={txtLocation}
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <Button type="submit" variant="contained" color="primary" style={{ width: '20%', margin: 'auto' }}>
                            Thay đổi</Button>
                    </form>

                </div>
            </div >

        );
    }
}

export default HomePageService;
