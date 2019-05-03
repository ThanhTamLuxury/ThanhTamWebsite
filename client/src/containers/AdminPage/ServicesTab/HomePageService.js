import React, { Component } from 'react';
import * as Constant from '../../constants';
import TextField from '@material-ui/core/TextField';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Button from '@material-ui/core/Button';
import { axios_fetch_AboutUsDetails, axios_update_AboutUsDetails } from '../axios_call';
import { connect } from 'react-redux';
import { onLoading, reset } from '../actions';
class HomePageService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtID:'',
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
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.isUpdate == true) {
            this.props.fetchAboutUsDetails();
            this.props.onLoading(true);
            this.props.onResetProps();
        }
        let aboutUsDetails = nextProps.aboutUsDetails;
        if (aboutUsDetails != null) {
            this.setState({
                txtID: aboutUsDetails.id,
                txtAddress: aboutUsDetails.address,
                txtPhoneNo: aboutUsDetails.phone,
                txtEmail: aboutUsDetails.email,
                txtLocation: aboutUsDetails.googleLocation,
            });
        }
    }
    onSave = (e) => {
        e.preventDefault();
        var { txtID,txtAddress, txtPhoneNo, txtEmail, txtLocation } = this.state;
        let info = {
            id: txtID,
            address: txtAddress,
            phone: txtPhoneNo,
            email: txtEmail,
            googleLocation: txtLocation,
        }
        this.props.onUpdateAboutUsDetails(info);

        this.setState({
            txtAddress: '',
            txtPhoneNo: '',
            txtEmail: '',
            txtLocation: '',
        })

        this.props.onLoading(true);
    }
    render() {
        var { txtAddress, txtPhoneNo, txtEmail, txtLocation, isEditing } = this.state;
        return (
            <div style={{ minWidth: '400px' }}>
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
const mapStateToProps = state => {
    return {
        aboutUsDetails: state.adminPage.aboutUsDetails,
        isUpdate: state.adminPage.isUpdate,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoading: (isLoading) => {
            dispatch(onLoading(isLoading));
        },
        fetchAboutUsDetails: () => {
            dispatch(axios_fetch_AboutUsDetails());
        },
        onUpdateAboutUsDetails: (info)=>{
            axios_update_AboutUsDetails(info, dispatch);
        },
        onResetProps: () => {
            dispatch(reset());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageService);
