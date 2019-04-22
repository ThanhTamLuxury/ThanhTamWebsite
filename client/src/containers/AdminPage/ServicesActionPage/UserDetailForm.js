import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Button from '@material-ui/core/Button';
import { axios_fetch_AboutUsDetails } from '../axios_call';
import { connect } from 'react-redux';
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
        this.props.fetchAboutUsDetails();
    }
    onSave = (e) => {
        e.preventDefault();
       
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
                                label="Mật khẩu cũ"
                                name="txtOldPassword"
                                className="form-input"
                                value={txtAddress}
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Số điện thoại"
                                name="t"
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
const mapStateToProps = state => {
    return {
        aboutUsDetails: state.homePage.aboutUsDetails
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAboutUsDetails: () => {
            dispatch(axios_fetch_AboutUsDetails());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageService);
