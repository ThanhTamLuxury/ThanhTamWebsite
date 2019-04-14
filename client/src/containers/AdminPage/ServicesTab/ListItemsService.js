import React, { Component } from 'react';
import * as Constant from '../../constants';
import { connect } from 'react-redux';
import { axios_fetch_services } from './../axios_call';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import { onOpenAddNewForm, onEditItem, onCheckPriceDetail } from '../actions';



class ListItemsService extends Component {


    state = {
        page: 1,
        data: [],
        rowsPerPage: 5,
        selected: [],
        totalItems: 0,
        tabCode: '',
    };

    componentDidMount() {
        this.props.fetchServicesList(this.props.serviceType, this.state.page, this.state.rowsPerPage);
        if (this.props.servicesResponse != null) {
            this.setState({
                data: this.props.servicesResponse.content,
                totalItems: this.props.servicesResponse.totalItem
            });
        }
    }
    onChangePage = (event, page) => {
        this.setState({ page: page });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.servicesResponse != null) {
            this.setState({
                data: nextProps.servicesResponse.content,
                totalItems: nextProps.servicesResponse.totalItem
            });
        }

    }
    onSelectAllClick = event => {
        if (event.target.checked) {
            this.setState(state => ({ selected: state.data.map(n => n.id) }));
            return;
        }
        this.setState({ selected: [] });
    };

    onChangeSelected = (event, id) => {
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        this.setState({ selected: newSelected });
    };

    isSelected = id => this.state.selected.indexOf(id) !== -1;


    onEditItem = (id) => {
        let tabCode = this.props.serviceType + '_EDIT';
        this.props.onEditItem(id);
        this.props.onChangeTab(this.props.serviceType, tabCode);
    }
    onOpenAddNewForm = () => {
        let tabCode = this.props.serviceType + '_ADD';
        this.props.onOpenAddNewForm();
        this.props.onChangeTab(this.props.serviceType, tabCode);
    }
    
    onCheckPriceDetail = (id) => {
        let tabCode = this.props.serviceType + '_PRICE';
        this.props.onCheckPriceDetail(id);
        this.props.onChangeTab(this.props.serviceType, tabCode);
    }
    onDelete = () => {
        if (this.state.selected.length == 0) {
            alert(Constant.MSG_NO_SELECTED_DELETED);
        } else {
            //TODO
            //call api to delete
        }
    }
    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };
    render() {
        const { page, data, selected, rowsPerPage, totalItems } = this.state;
        const { tabCode } = this.props;
        return (
            <div>
                <div className="services-table">
                    <Table  >
                        <TableHead>
                            <TableRow>
                                <TableCell align="left"><Checkbox checked={selected.length === data.length} onClick={this.onSelectAllClick} /></TableCell>
                                <TableCell align="left" >Tên</TableCell>
                                <TableCell align="left">Ngày tạo</TableCell>
                                <TableCell align="left">Chi tiết</TableCell>
                                {(tabCode !== Constant.SERVICE_WEDDING_DRESS && tabCode !== Constant.SERVICE_FULL_WEDDING_DAY) ? <TableCell align="left">Bảng giá</TableCell> : null}
                            </TableRow>
                        </TableHead>
                        <TableBody  >
                            {data && this.renderData(data, tabCode)}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>

                </div>
                <TablePagination
                    className='table-paging'
                    style={{ fontSize: '1.1em' }}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={totalItems}     // số documents
                    rowsPerPage={rowsPerPage}  // default mỗi lần 5 records
                    page={page} // page hiện tại
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.onChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
                <Button variant="contained" color="primary"
                    style={{ width: '10%', height: 'auto', marginTop: '2em' }}
                    onClick={this.onDelete}>
                    Xóa
                </Button>
                <Button variant="contained" color="primary"
                    style={{ width: '10%', height: 'auto', marginLeft: '2em', marginTop: '2em' }}
                    onClick={() => this.onOpenAddNewForm(null)}>
                    Thêm
                </Button>
            </div>
        );
    }

    renderData(data, tabCode) {
        let result = null;
        if (data.length > 0) {
            result = data.map(item => {
                const isSelected = this.isSelected(item.id);
                return (
                    <TableRow key={item.id} onClick={event => this.onChangeSelected(event, item.id)} >
                        <TableCell align="left">
                            <Checkbox checked={isSelected} />
                        </TableCell>
                        <TableCell align="left" component="th" scope="row">
                            {item.name}
                        </TableCell>
                        <TableCell align="left">{item.dateCreated}</TableCell>
                        <TableCell align="left">
                            <Button variant="outlined" color="primary" onClick={() => this.onEditItem(item.id, Constant.SERVICE_EDIT_ALBUM)}>Chi tiết</Button>
                        </TableCell>
                        {((tabCode !== Constant.SERVICE_WEDDING_DRESS) && (tabCode !== Constant.SERVICE_FULL_WEDDING_DAY)) ? <TableCell align="left"><Button variant="outlined" color="primary" onClick={() => this.onCheckPriceDetail(item.id)}  >Thông tin</Button></TableCell> : null}
                    </TableRow>
                )
            })
        }
        return result;
    }

}
const mapStateToProps = state => {
    return {
        servicesResponse: state.adminPage.servicesResponse,
        serviceType: state.adminPage.serviceType
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchServicesList: (serviceType, page, size) => {
            dispatch(axios_fetch_services(serviceType, page, size));
        },
        onOpenAddNewForm: () => {
            dispatch(onOpenAddNewForm())
        },
        onEditItem: (id) => {
            dispatch(onEditItem(id))
        },
        onCheckPriceDetail: (id) => {
            dispatch(onCheckPriceDetail(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListItemsService);
