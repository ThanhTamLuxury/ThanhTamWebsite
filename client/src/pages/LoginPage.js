import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class LoginPage extends Component {
    onLogin= (e)=>{
        e.preventDefault();
        
    }
    render() {
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
                        />
                         <br/>
                        <TextField
                            label="Mật khẩu"
                            type="password"
                            className="form-input"
                        />
                        <br/><br/>
                        <div className ="text-center" >
                        <Button type="submit" variant="outlined" color="secondary" style={{ width: '70%', margin:'auto' }}>
                            Đăng nhập</Button>
                        </div>
                        
                    </div>
                </form>

            </div>


        );
    }
}

export default LoginPage;
