import React, { Component } from 'react';
import { AdminPageContainer } from '../containers/index';
class AdminSearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceType: '',
            tabCode: 'SERVICE_HOME',
            searchValue:'',
        };
    }
    componentWillMount(){
        if (this.props && this.props.match) {
            let params = this.props.match.params;
            console.log(params);
            if (params) {
                this.setState({
                    serviceType: params.serviceType,
                    tabCode: params.serviceType,
                    searchValue:params.searchValue,
                })
            }
        } else {
            console.log("Not found params");
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.match)
        if (nextProps && nextProps.match) {
            let params = nextProps.match.params;
            console.log(params);
            if (params) {
                this.setState({
                    serviceType: params.serviceType,
                    tabCode: params.serviceType,
                    searchValue:params.searchValue,
                })
            }
        } else {
            console.log("Not found params");
        }
    }
    render() {
        var { serviceType,tabCode,searchValue } = this.state;

        return (
            <div className="gla_page" id="gla_page">
                <section className="gla_content admin_content">
                    <AdminPageContainer serviceType={serviceType} tabCode ={tabCode} searchValue ={searchValue} />
                </section>
            </div>

        );
    }

}
export default AdminSearchPage;
