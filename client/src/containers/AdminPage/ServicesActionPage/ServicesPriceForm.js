import React, { Component } from 'react';
import * as Constant from '../../constants';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { axios_fetch_serviceByID, axios_add_update_service, axios_update_service_price } from '../axios_call';
import { onLoading, reset } from '../actions';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
class ServicesPriceForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            txtID: '',
            txtName: '',
            txtDescription: '',
            txtPriceDescription: '',
            txtPrice: '',
            editorState: EditorState.createEmpty(),
            price: "",
            applyDate: "",
            priceDetailItems: [],
            validateMsg:'',
        };

    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        const re = /^[0-9\b]+$/;

        if (name === 'txtPrice') {
            if (target.value === '' || re.test(target.value)) {
                this.setState({
                    [name]: target.value
                });
            }
        } else {
            this.setState({
                [name]: target.value
            });
        }
    }
    handleActionSnackbarClose = (event, reason) => {
        this.setState({ validateMsg: '' });
        if (reason === 'clickaway') {
            return;
        }
    };
    
    checkValidation = ()=>{
        var {txtName,txtPrice} = this.state;   
        if((txtName == null) || (txtName === '')){
            return Constant.getCheckValidateMessage('Tên albums','REQUIRED');
        }else if((txtPrice == null) ||(txtPrice === '')){
            return Constant.getCheckValidateMessage('Giá khởi điểm','REQUIRED');
        }else{
            return '';
        }
    }
    handleEditorChange = (e) => {
    }
    onSave = (e) => {
        e.preventDefault();
        let check = this.checkValidation();
        if (check !== '') {
            this.setState({
                validateMsg: check
            })
        } else {
            var { txtID, txtName, txtDescription, txtPrice, isEditing, priceDetailItems } = this.state;
            let htmlRaw = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));

            let service = null;
            if (isEditing) {
                service = {
                    id: txtID,
                    name: txtName ? txtName : '',
                    description: txtDescription ? txtDescription : '',
                    priceDescription: htmlRaw ? htmlRaw : '',
                    price: txtPrice ? txtPrice : 0,
                    priceDetails: priceDetailItems ? priceDetailItems : '',
                }
                this.props.onUpdate(service);

            } else {
                service = {
                    id: txtID,
                    name: txtName ? txtName : '',
                    description: txtDescription ? txtDescription : '',
                    priceDescription: htmlRaw ? htmlRaw : '',
                    price: txtPrice ? txtPrice : 0,
                    priceDetails: priceDetailItems ? priceDetailItems : '',
                    serviceType: this.props.serviceType,
                    type: this.props.serviceType,
                }
                this.props.onAdd(service, this.props.serviceType);
            }
            this.setState({
                isEditing: false,
                txtID: '',
                txtName: '',
                txtDescription: '',
                txtPriceDescription: '',
                txtPrice: '',
                editorState: EditorState.createEmpty(),
                price: "",
                applyDate: "",
                priceDetailItems: []
            })
            this.props.onLoading(true);
        }
    }

    handlePriceDetailItemNameChange = idx => evt => {
        const re = /^[0-9\b]+$/;
        if (evt.target.value === '' || re.test(evt.target.value)) {
            const newPriceDetailItems = this.state.priceDetailItems.map((priceDetailItem, sidx) => {
                if (idx !== sidx) return priceDetailItem;
                return { ...priceDetailItem, price: evt.target.value, applyDate: priceDetailItem.applyDate };
            });
            this.setState({ priceDetailItems: newPriceDetailItems });
        }
    };

    handlePriceDetailItemApplyDateChange = idx => evt => {
        const newPriceDetailItems = this.state.priceDetailItems.map((priceDetailItem, sidx) => {
            if (idx !== sidx) return priceDetailItem;
            return { ...priceDetailItem, price: priceDetailItem.price ? priceDetailItem.price : 0, applyDate: evt.target.value };
        });

        this.setState({ priceDetailItems: newPriceDetailItems });
    };


    handleAddPriceDetailItem = (e) => {
        e.preventDefault();
        var date = new Date();
        var dd = date.getDate();
        var mm = date.getMonth() + 1;

        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = yyyy + '-' + mm + '-' + dd;
        this.setState({
            priceDetailItems: this.state.priceDetailItems.concat([{ price: "", applyDate: today }])
        });
    };

    handleRemovePriceDetailItem = idx => () => {
        this.setState({
            priceDetailItems: this.state.priceDetailItems.filter((s, sidx) => idx !== sidx)
        });
    };
    onResetState = () => {
        this.setState({
            isEditing: false,
            txtID: '',
            txtName: '',
            txtDescription: '',
            txtPriceDescription: '',
            txtPrice: '',
            editorState: EditorState.createEmpty(),
            price: "",
            applyDate: "",
            priceDetailItems: [],
        })
    }
    componentWillMount() {
        this.onResetState();
    }
    componentDidMount() {
        let id = this.props.serviceID;
        if (id) {
            this.props.fetchServiceItem(id);
            this.props.onLoading(true);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isUpdate === true) {
            let id = this.props.serviceID;
            if (id) {
                this.props.fetchServiceItem(id);
                this.props.onLoading(true);
            }
            this.props.onResetProps();
        }

        let serviceItem = nextProps.serviceItem;

        if (serviceItem != null) {
            if (serviceItem.priceDescription) {
                const contentBlock = htmlToDraft(serviceItem.priceDescription);
                if (contentBlock) {
                    const contentState = ContentState.createFromBlockArray(contentBlock);
                    const editorState = EditorState.createWithContent(contentState);
                    this.setState({
                        editorState,
                    });
                }
            }
            this.setState({
                isEditing: true,
                txtID: serviceItem.id,
                txtName: serviceItem.name,
                txtDescription: serviceItem.description,
                txtPrice: serviceItem.price,
                priceDetailItems: serviceItem.priceDetails,
                txtPriceDescription: serviceItem.priceDescription
            });
        } else {
            this.setState({
                isEditing: false,
            });
        }

    }

    render() {
        
        var { txtName, txtDescription, txtPrice, isEditing, editorState, priceDetailItems,validateMsg } = this.state;
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2> </h2>
                    <form onSubmit={this.onSave} >
                        <div className="form-group">
                            <TextField
                                label="Tên bảng giá"
                                name="txtName"
                                className="form-input"
                                value={txtName || ''}
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Thông tin"
                                multiline
                                name="txtDescription"
                                value={txtDescription || ''}
                                className="form-input"
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Giá khởi điểm"
                                name="txtPrice"
                                className="form-input"
                                value={txtPrice || 0}
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>

                        <ExpansionPanel style={{ background: 'none', minWidth: "320px" }}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Danh sách giá theo ngày</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography style={{ width: '30%' }}>
                                    <Button type="submit" variant="contained" color="primary" style={{ width: '80%' }} onClick={this.handleAddPriceDetailItem}>
                                        Thêm giá</Button>
                                </Typography>

                                <ul className="event-date-picker">
                                    {(priceDetailItems.length > 0) && priceDetailItems.map((priceDetailItem, idx) => (
                                        <li key={idx}>
                                            <div className="priceDetailItem">
                                                <div className="form-group">
                                                    <TextField
                                                        label="Giá theo ngày"
                                                        name="txtTitle"
                                                        className="form-input"
                                                        value={priceDetailItem.price || ''}
                                                        onChange={this.handlePriceDetailItemNameChange(idx)}
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <TextField
                                                        label="Ngày áp dụng"
                                                        name="applyDate"
                                                        value={priceDetailItem.applyDate || ''}
                                                        onChange={this.handlePriceDetailItemApplyDateChange(idx)}
                                                        type="date"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                    <Button type="submit" variant="contained" color="primary" style={{ float: "right", marginLeft: "2em", marginTop: "2em" }}
                                                        onClick={this.handleRemovePriceDetailItem(idx)}>Xóa
                                                </Button>

                                                </div>

                                            </div>
                                            <br />
                                        </li>

                                    ))}
                                </ul>

                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <div>
                            <Editor
                                editorState={editorState}
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                onEditorStateChange={this.onEditorStateChange}
                                onChange={this.handleEditorChange}
                            />
                        </div>
                        <h2> </h2>
                        <Button type="submit" variant="contained" color="primary" style={{ width: '20%', margin: 'auto' }}>
                            {isEditing ? "Lưu lại" : "Thêm mới"}</Button>
                    </form>
                    <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={(validateMsg !== '')}
                    onClose={this.handleActionSnackbarClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<h5>{validateMsg}</h5>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            variant="outlined"
                            color="secondary"
                            onClick={this.handleActionSnackbarClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
                </div>
            </div >

        );
    }
}
const mapStateToProps = state => {
    return {
        serviceItem: state.adminPage.serviceItem,
        isUpdate: state.adminPage.isUpdate,
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoading: (isLoading) => {
            dispatch(onLoading(isLoading));
        },
        fetchServiceItem: (id) => {
            axios_fetch_serviceByID(id, dispatch);
        },
        onUpdate: (service) => {
            axios_update_service_price(service, dispatch);
        },
        onAdd: (service, serviceType) => {
            axios_add_update_service(service, serviceType, dispatch, false);
        },
        onResetProps: () => {
            dispatch(reset());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServicesPriceForm);
