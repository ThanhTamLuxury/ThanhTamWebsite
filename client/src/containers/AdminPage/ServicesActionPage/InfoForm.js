import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {  onLoading } from '../actions';
import {  axios_update_password } from '../axios_call';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import * as Constant from '../../../containers/constants';

class InfoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            txtUsername: '',
            txtOldPassword: '',
            txtNewPassword: '',
            messages:'',
        };
    }
    componentWillReceiveProps(nextProps){
        const USERNAME = localStorage.getItem('USERNAME');
        if(this.state.txtUsername===''){
            this.setState({
                txtUsername: USERNAME ? USERNAME:'',
            })
        }
        
    }
    componentWillMount(){
        const USERNAME = localStorage.getItem('USERNAME');
        this.setState({
            txtUsername: USERNAME ? USERNAME:'',
            txtOldPassword: '',
            txtNewPassword: '',
            messages:'',
        })
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        this.setState({
            [name]: target.value
        });
    }
    onSave = (e) => {
        e.preventDefault();
        var { txtUsername,txtOldPassword, txtNewPassword } = this.state;
        if(txtNewPassword.length < 5){
            this.setState({
                messages : Constant.MSG_PASSWORD_LENGTH
            })
        }else{
            let info = {
                username: txtUsername,
                oldPassword: txtOldPassword,
                newPassword: txtNewPassword,
            }
            this.props.onUpdatePassword(info);
            this.setState({
                txtUsername: '',
                txtOldPassword: '',
                txtNewPassword: '',
                messages:'',
            })
            this.props.onLoading(true);
        }
        
    }
    handleActionSnackbarClose = (event, reason) => {
        this.setState({ messages: '' });
        if (reason === 'clickaway') {
            return;
        }
    };
    render() {
        var { txtOldPassword,txtNewPassword, txtUsername,messages } = this.state;
        return (
            <div style={{ minWidth: '400px' }}>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2> </h2>
                    <form onSubmit={this.onSave} >
                        <div className="form-group">
                            <TextField
                                label="Tên tài khoản"
                                name="txtUsername"
                                className="form-input"
                                value={txtUsername || ''}
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Mật khẩu cũ"
                                type ="password"
                                name="txtOldPassword"
                                value={txtOldPassword || ''}
                                className="form-input"
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Mật khẩu mới"
                                name="txtNewPassword"
                                type ="password"
                                className="form-input"
                                value={txtNewPassword || ''}
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <Button type="submit" variant="contained" color="primary" style={{ width: '20%', margin: 'auto' }}>
                            Thay đổi</Button>
                    </form>
                    <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={(messages !== '')}
                    onClose={this.handleActionSnackbarClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<h5>{messages}</h5>}
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
        messages: state.adminPage.messages,
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoading: (isLoading) => {
            dispatch(onLoading(isLoading));
        },
        onUpdatePassword: (info) => {
            axios_update_password(info, dispatch);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoForm);
