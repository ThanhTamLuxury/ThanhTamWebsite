import React, { Component } from 'react';
import { AdminPageContainer } from '../containers/index';
class ServiceEditPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceType:'',
            id:'',
            tabCode:'',
        };
    }
    componentWillMount(){
        if(this.props && this.props.match){
            let params = this.props.match.params;
            this.setState({
                serviceType: params.serviceType,
                id:params.id,
                tabCode:params.serviceType+'_EDIT'
            })
        }else{
            console.log("Not found params");
        }
        
    }
    render() {
        var {serviceType,id, tabCode} = this.state;
        return (
            <div className="gla_page" id="gla_page">
                <section className="gla_content admin_content">
                    <AdminPageContainer serviceType ={serviceType} tabCode ={tabCode} id={id} />
                </section>
            </div>

        );
    }

}
export default ServiceEditPage;
