import React, { Component } from 'react';
import { AdminPageContainer } from './../containers/index';
import {LABEL_ADMIN} from './../constants/Constant';
import { history } from '../App';

class AdminPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceType: '',
            tabCode: 'SERVICE_ADMIN'
        };
    }
    componentWillMount() {
        document.title = LABEL_ADMIN
        if (this.props && this.props.match) {
            let params = this.props.match.params;
            if (params.length > 0) {
                this.setState({
                    serviceType: params.serviceType,
                    tabCode: params.serviceType
                })
            }
        } else {
            history.push('/notfound');
        }



    }
    render() {
        var { serviceType,tabCode } = this.state;
        return (
            <div className="gla_page" id="gla_page">
                <section className="gla_content admin_content">
                    <AdminPageContainer serviceType={serviceType} tabCode ={tabCode} />
                </section>
            </div>

        );
    }

}
export default AdminPage;
