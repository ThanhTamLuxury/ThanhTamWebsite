import React, { Component } from 'react';
import { AdminPageContainer } from '../containers/index';
import {LABEL_PASSWORD_EDIT,TAB_PASSWORD_EDIT} from '../constants/Constant';
import { history } from '../App';

class AdminChangePasswordPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceType: '',
            tabCode: 'SERVICE_ADMIN'
        };
    }
    componentWillMount() {
        document.title = LABEL_PASSWORD_EDIT
               
    }
    render() {
        var { serviceType,tabCode } = this.state;
        return (
            <div className="gla_page" id="gla_page">
                <section className="gla_content admin_content">
                    <AdminPageContainer tabCode ={TAB_PASSWORD_EDIT} />
                </section>
            </div>

        );
    }

}
export default AdminChangePasswordPage;
