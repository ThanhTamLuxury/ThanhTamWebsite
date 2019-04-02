import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import * as Constant from '../constants';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Button from '@material-ui/core/Button';
import { generate_slug } from './../../../methods/function_lib';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class AlbumsPriceForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            txtSlug: '',
            txtName: '',
            txtShortDescription: '',
            txtTitle:'',
            txtPrice: '',
            events: [],
            editorState: EditorState.createEmpty(),
            inputs: ['input-0'],
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

        console.log(target.value);
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
    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }

    componentDidMount() {
        this.setState({
            imageData: [
                {
                    id: '1',
                    img: 'https://genknews.genkcdn.vn/2017/photo-0-1504160949054.jpg',
                    title: 'Image',
                }, {
                    id: '2',
                    img: 'https://upload.wikimedia.org/wikipedia/tr/e/e2/SK_Telecom_T1.jpg',
                    title: 'Image',
                },
                {
                    id: '3',
                    img: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/062017/untitled-1_57.png?itok=tEAhECSi',
                    title: 'Image',
                },
                {
                    id: '4',
                    img: 'https://ih0.redbubble.net/image.270851672.6386/raf,750x1000,075,t,101010:01c5ca27c6.u1.jpg',
                    title: 'Image',
                },
                {
                    id: '5',
                    img: 'https://i.ytimg.com/vi/7aBiuSevfTE/maxresdefault.jpg',
                    title: 'Image',
                }
            ]
        })
        switch (this.props.serviceItem.key) {
            case Constant.SERVICE_PRICE_ALBUMS:
                this.setState({
                    isEditing: true
                });
                break;
            default:
                this.setState({
                    isEditing: false
                });
        }

        // fetch API get Item
    }
    onSave = (e) => {
        console.log('Here');
        e.preventDefault();
        // var { id, txtName, txtPrice, chkbStatus } = this.state;
        // var { history } = this.props;
        // var product = {
        //     id : id,
        //     name : txtName,
        //     price : txtPrice,
        //     status : chkbStatus
        // };
        // if (id) {
        //     this.props.onUpdateProduct(product);
        // } else {
        //     this.props.onAddProduct(product);
        // }
        // history.goBack(); // save xong thì back lại trang cũ ! có thể xài push để vào trang mới
    }
    addEvents = () => {
        var newEvents = [];
        this.setState({
            events: newEvents
        })
    }
    appendInput() {
        var newInput = `input-${this.state.inputs.length}`;
        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }

    render() {
        var { txtName, txtSlug, txtShortDescription,txtTitle, txtPrice, isEditing, editorState } = this.state;
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2></h2>
                    <form onSubmit={this.onSave} >
                        <div className="form-group">
                            <TextField
                                label="Tên bảng giá"
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
                                name="txtSlug"
                                className="form-input"
                                value={txtSlug}
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Thông tin"
                                name="txtShortDescription"
                                value={txtShortDescription}
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
                                value={txtPrice}
                                onChange={this.onChange}
                                variant="outlined"
                            />
                        </div>

                        <ExpansionPanel style={{ background: 'none' }}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Danh sách giá theo ngày</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography style={{ width: '30%' }}>
                                    <Button type="submit" variant="contained" color="primary"style={{ width: '80%' }} onClick={() => this.appendInput()}>
                                        Thêm giá</Button>
                                </Typography>

                                <ul className="event-date-picker">
                                    {this.state.inputs.map((input,index) =>
                                        <li key ={index}>
                                            <div className="form-group">
                                                <TextField
                                                    label="Thông tin, khuyến mãi, giá theo ngày,.."
                                                    name="txtTitle"
                                                    className="form-input"
                                                    value={txtTitle}
                                                    onChange={this.onChange}
                                                    variant="outlined"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <TextField
                                                    label="Ngày bắt đầu"
                                                    name="startDate"
                                                    type="date"
                                                    style={{marginRight:"6em"}}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                                <TextField
                                                    label="Ngày kết thúc"
                                                    name="endDate"
                                                    type="date"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />

                                            </div>

                                        </li>
                                    )
                                    }
                                </ul>

                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <div>
                            <Editor
                                editorState={editorState}
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                onEditorStateChange={this.onEditorStateChange}
                            />
                        </div>
                        <h2></h2>
                        <Button type="submit" variant="contained" color="primary" style={{ width: '20%', margin: 'auto' }}>
                            {isEditing ? "Lưu lại" : "Thêm mới"}</Button>
                    </form>

                </div>
            </div >

        );
    }
}

export default AlbumsPriceForm;
