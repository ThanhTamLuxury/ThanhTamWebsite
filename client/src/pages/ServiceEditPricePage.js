import React, { Component } from 'react';
import { AdminPageContainer } from '../containers/index';
import * as Constant from './../constants/Constant'
class ServiceEditPricePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceType: '',
            id: '',
            tabCode: '',
        };
    }
    componentWillMount() {
        if (this.props && this.props.match) {
            let params = this.props.match.params;
            this.setState({
                serviceType: params.serviceType,
                id: params.id,
                tabCode: params.serviceType + '_PRICE'
            })
            switch (params.serviceType) {
                case Constant.TYPE_ALBUM:
                    document.title = Constant.LABEL_PRICE_ALBUM_EDIT;
                    break;
                case Constant.TYPE_VIDEO:
                    document.title = Constant.LABEL_PRICE_VIDEO_EDIT;
                    break;
                case Constant.TYPE_FULL_WEDDING_DAY:
                    document.title = Constant.LABEL_FULL_WEDDING_DAY_EDIT;
                    break;

            }
        } else {
            console.log("Not found params");
        }



    }
    render() {
        var { serviceType, id, tabCode } = this.state;
        return (
            <div className="gla_page" id="gla_page">
                <section className="gla_content admin_content">
                    <AdminPageContainer serviceType={serviceType} tabCode={tabCode} id={id} />
                </section>
            </div>

        );
    }

}
export default ServiceEditPricePage;
