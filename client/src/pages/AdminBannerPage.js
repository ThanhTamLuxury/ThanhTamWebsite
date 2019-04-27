import React, { Component } from 'react';
import { AdminPageContainer } from '../containers/index';
class AdminBannerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceType: '',
            tabCode: 'BANNER_EDIT'
        };
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
export default AdminBannerPage;
