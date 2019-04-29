import React, { Component } from 'react';
import { AdminPageContainer } from '../containers/index';
import * as Constant from '../containers/constants';
import * as Label from './../constants/Constant';
class AdminViewListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceType: '',
            tabCode: 'SERVICE_ADMIN'
        };
    }
    componentWillMount(){
        if (this.props && this.props.match) {
            let params = this.props.match.params;
            if (params) {
                this.setState({
                    serviceType: params.serviceType,
                    tabCode: params.serviceType
                })
                switch(params.serviceType){
                    case Constant.SERVICE_ALBUM:
                        document.title = Label.LABEL_ALBUMS
                    break;
                    case Constant.SERVICE_WEDDING_DRESS:
                        document.title = Label.LABEL_WEDDING_DRESSES                    
                    break;
                    case Constant.SERVICE_WEDDING_VIDEO:
                        document.title = Label.LABEL_WEDDING_VIDEOS                    
                    break;
                    case Constant.SERVICE_FULL_WEDDING_DAY:
                        document.title = Label.LABEL_FULL_WEDDING_DAY                                        
                    break;
                }
            }
        } else {
            console.log("Not found params");
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.match)
        if (nextProps && nextProps.match) {
            let params = nextProps.match.params;
            if (params) {
                this.setState({
                    serviceType: params.serviceType,
                    tabCode: params.serviceType
                })
            }
            switch(params.serviceType){
                case Constant.SERVICE_ALBUM:
                    document.title = Label.LABEL_ALBUMS
                break;
                case Constant.SERVICE_WEDDING_DRESS:
                    document.title = Label.LABEL_WEDDING_DRESSES                    
                break;
                case Constant.SERVICE_WEDDING_VIDEO:
                    document.title = Label.LABEL_WEDDING_VIDEOS                    
                break;
                case Constant.SERVICE_FULL_WEDDING_DAY:
                    document.title = Label.LABEL_FULL_WEDDING_DAY                                        
                break;
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
export default AdminViewListPage;
