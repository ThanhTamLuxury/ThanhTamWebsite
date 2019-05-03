import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {LABEL_NOT_FOUND} from './../constants/Constant';
class NotFoundPage extends Component {
    
    componentWillMount(){
        document.title = LABEL_NOT_FOUND
    }
    render() {
        return (
            <div>
                <div className="face">
                    <div className="band">
                        <div className="red" />
                        <div className="white" />
                        <div className="blue" />
                    </div>
                    <div className="eyes" />
                    <div className="dimples" />
                    <div className="mouth" />
                </div>
                <h1>Oops! Đã xảy ra lỗi !</h1>
                <Link to ="/">
                    <div className="not-found-but">Trở về trang chủ</div>                
                </Link>
            </div>
        );
    }
}

export default NotFoundPage;
