import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { logOut } from './actions';
import { login } from './axios_call';
import queryString from 'query-string';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        // reset login status
        this.props.onLogOut();

        this.state = {
            txtUsername: '',
            txtPassword: '',
            submitted: false
        };
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        this.setState({
            [name]: target.value
        });
    }


    redirect = () => {
        const parseQueryString = queryString.parse(this.props.location.search);
        const { url } = parseQueryString;
        url ? window.location.replace(`${url}`) : window.location.replace(`admin`)
    }
    onLogin = (e) => {
        e.preventDefault();
        const { txtUsername, txtPassword } = this.state;
        this.props.onLogin(txtUsername, txtPassword, this.redirect);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
    render() {
        var { txtPassword, txtUsername } = this.state;
        return (
            <div className="gla_slider gla_image_bck  gla_wht_txt gla_fixed" data-stellar-background-ratio="0.8" style={{ backgroundImage: 'url("/images/wedding/andy_jeska/10099882125_4afe7c6786_k_mb.jpg")', backgroundAttachment: 'fixed', backgroundPosition: '50% 50%' }}>
                <form onSubmit={this.onLogin}  >

                    <div className="login-container">
                        <div className="imgcontainer">
                            <img src="/images/main_logo_wh.gif" alt="Avatar" className="avatar" />
                        </div>
                        <TextField
                            label="Tên tài khoản"
                            className="form-input"
                            name="txtUsername"
                            value={txtUsername}
                            onChange={this.onChange}
                        />
                        <br />
                        <TextField
                            label="Mật khẩu"
                            type="password"
                            className="form-input"
                            name="txtPassword"
                            value={txtPassword}
                            onChange={this.onChange}
                        />
                        <br /><br />
                        <div className="text-center" >
                            <Button type="submit" variant="outlined" color="secondary" style={{ width: '70%', margin: 'auto' }}>
                                Đăng nhập</Button>
                        </div>

                    </div>
                </form>

            </div>


        );
    }
}
const mapStateToProps = state => {
    return {
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin: (txtUsername, txtPassword, redirect) => {
            login(txtUsername, txtPassword, redirect, dispatch);
        },
        onLogOut: () => {
            logOut();
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
