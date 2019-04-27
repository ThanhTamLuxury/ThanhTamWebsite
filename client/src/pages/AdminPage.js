import React, { Component } from 'react';
import { AdminPageContainer } from './../containers/index';
class AdminPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceType: '',
            tabCode: 'SERVICE_HOME'
        };
    }
    componentWillMount() {
        if (this.props && this.props.match) {
            let params = this.props.match.params;
            if (params.length > 0) {
                this.setState({
                    serviceType: params.serviceType,
                    tabCode: params.serviceType
                })
            }
        } else {
            console.log("Not found params");
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
