import React, { Component } from 'react';
import { AdminPageContainer } from '../containers/index'
import * as Constant from './../constants/Constant';

class ServiceAddPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceType:'',
            tabCode:'',
        };
    }
    componentWillMount(){
        if(this.props && this.props.match){
            let params = this.props.match.params;
            this.setState({
                serviceType: params.serviceType,
                tabCode:params.serviceType+'_ADD'
            })
            switch (params.serviceType) {
                case Constant.TYPE_ALBUM:
                    document.title = Constant.LABEL_ALBUM_ADD;
                    break;
                case Constant.TYPE_WEDDING_DRESS:
                    document.title = Constant.LABEL_WEDDING_DRESS_ADD;
                    break;
                case Constant.TYPE_VIDEO:
                    document.title = Constant.LABEL_WEDDING_VIDEO_ADD;
                    break;
                case Constant.TYPE_FULL_WEDDING_DAY:
                    document.title = Constant.LABEL_FULL_WEDDING_DAY_ADD;
                    break;
            }
        }else{
            console.log("Not found params");
        }
        

        
    }
    render() {
        var {serviceType,id, tabCode} = this.state;
        return (
            <div className="gla_page" id="gla_page">
                <section className="gla_content admin_content">
                <AdminPageContainer serviceType ={serviceType} tabCode ={tabCode}/>
                </section>
            </div>

        );
    }

}
export default ServiceAddPage;
