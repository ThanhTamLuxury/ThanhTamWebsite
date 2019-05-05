import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import * as Constant from '../../constants';
import { connect } from 'react-redux';
import { generate_slug } from './../../../methods/function_lib'
import Button from '@material-ui/core/Button';
import { axios_fetch_serviceByID, axios_add_update_service } from '../axios_call';
import { onLoading, onAdding, reset } from '../actions';

class VideoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            txtID: '',
            txtName: '',
            txtLink: '',
            txtDescription: '',
        };
    }

    onResetState = () => {
        this.setState({
            isEditing: false,
            xtID: '',
            txtName: '',
            txtLink: '',
            txtDescription: '',
        })
    }
    componentWillMount() {
        this.onResetState();
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;

        this.setState({
            [name]: target.value
        });
        if (name === 'txtName') {
            let slug = generate_slug(target.value);
            this.setState({
                txtSlug: slug
            })
        }
    }
    componentDidMount() {
        let id = this.props.serviceID;
        if (id) {
            this.props.fetchServiceItem(id);
            this.props.onLoading(true);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isUpdate == true) {
            let id = this.props.serviceID;
            if (id) {
                this.props.fetchServiceItem(id);
                this.props.onLoading(true);
            }
            this.props.onResetProps();
        }

        let serviceItem = nextProps.serviceItem;
        if (serviceItem != null) {
            this.setState({
                isEditing: true,
                txtID: serviceItem.id,
                txtName: serviceItem.name,
                txtLink: Constant.YOUTUBE_PREFIX + serviceItem.mainImage,
                txtDescription: serviceItem.description,
            })
        } else {
            this.setState({
                isEditing: false,
            });
        }
    }
    onSave = (e) => {
        e.preventDefault();
        var { txtID, txtName, txtDescription, txtLink, isEditing } = this.state;
        let linkArr = txtLink.split('=');
        let service = null;
        if (isEditing) {
            service = {
                id: txtID,
                name: txtName ? txtName : '',
                description: txtDescription ? txtDescription : '',
                mainImage: linkArr[1],
                serviceType: Constant.SERVICE_WEDDING_VIDEO,
                type: Constant.SERVICE_WEDDING_VIDEO,
            }

            this.props.onUpdate(service, Constant.SERVICE_WEDDING_VIDEO);
        } else {
            service = {
                name: txtName ? txtName : '',
                description: txtDescription ? txtDescription : '',
                mainImage: linkArr[1],
                serviceType: Constant.SERVICE_WEDDING_VIDEO,
                type: Constant.SERVICE_WEDDING_VIDEO,
            }
            this.props.onAdd(service, Constant.SERVICE_WEDDING_VIDEO);
        }

        this.setState({
            isEditing: false,
            txtID: '',
            txtName: '',
            txtLink: '',
            txtDescription: '',
        })
        this.props.onAdding(true);
        this.props.onLoading(true);



    }
    onDeleteImage = (id) => {
        this.setState(prevState => {
            const imageData = prevState.imageData.filter(image => image.id !== id);
            return { imageData };
        });

    }
    render() {
        var { txtName, txtLink, txtDescription, isEditing } = this.state;
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2></h2>
                    <form onSubmit={this.onSave} >
                        <div className="form-group">
                            <TextField
                                label="Tên video"
                                name="txtName"
                                className="form-input"
                                value={txtName}
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Đường dẫn"
                                name="txtLink"
                                value={txtLink}
                                className="form-input"
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>

                        <div className="form-group">
                            <TextField
                                id="standard-textarea"
                                multiline
                                label="Đặc điểm nổi bật"
                                name="txtDescription"
                                value={txtDescription}
                                className="form-input"
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>


                        <Button type="submit" variant="contained" color="primary" style={{ width: '20%', margin: 'auto' }}>
                            {isEditing ? "Lưu lại" : "Thêm mới"}</Button>
                    </form>

                </div>
            </div >

        );
    }
}
const mapStateToProps = state => {
    return {
        serviceItem: state.adminPage.serviceItem
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoading: (isLoading) => {
            dispatch(onLoading(isLoading));
        },
        onAdding: (isAdding) => {
            dispatch(onLoading(isAdding));
        },
        fetchServiceItem: (id) => {
            axios_fetch_serviceByID(id, dispatch);
        },
        onUpdate: (service, serviceType) => {
            axios_add_update_service(service, serviceType, dispatch, true);
        },
        onAdd: (service, serviceType) => {
            axios_add_update_service(service, serviceType, dispatch, false);
        },
        onResetProps: () => {
            dispatch(reset());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
