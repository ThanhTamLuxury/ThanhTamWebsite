import React, { Component } from 'react';
import * as Constant from '../../constants';
import { connect } from 'react-redux';
import { axios_fetch_services, axios_search_services, axios_delete_services } from './../axios_call';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import { onOpenAddNewForm, onEditItem, onCheckPriceDetail, onLoading } from '../actions';



class ListItemsService extends Component {


    state = {
        page: 1,
        data: [],
        rowsPerPage: 5,
        selected: [],
        totalItems: 0,
        tabCode: '',
        isSearching: false,
        searchValue :'',
    };

    componentDidMount() {
        this.props.fetchServicesList(this.props.serviceType, this.state.page, this.state.rowsPerPage);
        this.setState({
            isSearching: false
        })
        this.props.onLoading(true);
        if (this.props.servicesResponse != null) {
            this.setState({
                tabCode: this.props.serviceType,
            });
        }
    }
    onChangePage = (e, page) => {
        this.setState({ page: page });
        this.props.fetchServicesList(this.props.serviceType, page, this.state.rowsPerPage);
        this.props.onLoading(true);
    };

    handleChangeRowsPerPage = (e) => {
        let newRowsCount = e.target.value;
        this.setState({ rowsPerPage: newRowsCount });
        this.props.fetchServicesList(this.props.serviceType, this.state.page, newRowsCount);
        this.props.onLoading(true);

    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.servicesResponse != null) {
            this.setState({
                data: nextProps.servicesResponse.content,
                totalItems: nextProps.servicesResponse.totalItem
            });
        }
        if (nextProps.searchValue !== this.state.searchValue) {
            this.props.searchServices(nextProps.searchValue, this.props.serviceType, this.state.page, this.state.rowsPerPage);
            this.setState({
                isSearching: true,
                searchValue : nextProps.searchValue,
            })
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
        var {isSearching,selected, searchValue, page,rowsPerPage } = this.state;
        if (selected.length == 0) {
            alert(Constant.MSG_NO_SELECTED_DELETED);
        } else {
            this.props.onDelete(selected);
            if(isSearching){
                this.props.searchServices(searchValue, this.props.serviceType, page, rowsPerPage);
            }else{
                this.props.fetchServicesList(this.props.serviceType, page, rowsPerPage);
            }
        }
    }

    render() {
        const { page, data, selected, rowsPerPage, totalItems } = this.state;
        const { serviceType } = this.props;
        return (
            <div>
                <div className="services-table">
                    <Table  >
                        <TableHead>
                            <TableRow>
                                <TableCell align="left"><Checkbox checked={selected.length === data.length} onClick={this.onSelectAllClick} /></TableCell>
                                <TableCell align="left" >Tên</TableCell>
                                <TableCell align="left">Giá hôm nay (VNĐ)</TableCell>
                                <TableCell align="left">Chi tiết</TableCell>
                                {((serviceType === Constant.SERVICE_WEDDING_DRESS) || (serviceType === Constant.SERVICE_FULL_WEDDING_DAY)) ? null : <TableCell align="left">Bảng giá</TableCell>}
                            </TableRow>
                        </TableHead>
                        <TableBody  >
                            {data && this.renderData(data, serviceType)}
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

    renderData(data, serviceType) {
        var formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

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
                        <TableCell align="left">{formatter.format(item.price)}</TableCell>
                        <TableCell align="left">
                            <Button variant="outlined" color="primary" onClick={() => this.onEditItem(item.id, Constant.SERVICE_EDIT_ALBUM)}>Chi tiết</Button>
                        </TableCell>
                        {((serviceType === Constant.SERVICE_WEDDING_DRESS) || (serviceType === Constant.SERVICE_FULL_WEDDING_DAY)) ? null : <TableCell align="left"><Button variant="outlined" color="primary" onClick={() => this.onCheckPriceDetail(item.id)}  >Thông tin</Button></TableCell>}
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
        onLoading: (isLoading) => {
            dispatch(onLoading(isLoading));
        },
        fetchServicesList: (serviceType, page, size) => {
            dispatch(axios_fetch_services(serviceType, page, size));
        },
        onOpenAddNewForm: () => {
            dispatch(onOpenAddNewForm())
        },
        onEditItem: (id) => {
            dispatch(onEditItem(id))
        },
        onDelete: (idArr) => {
            dispatch(axios_delete_services(idArr))
        },
        onCheckPriceDetail: (id) => {
            dispatch(onCheckPriceDetail(id))
        },
        searchServices: (searchValue, serviceType, page, size) => {
            dispatch(axios_search_services(searchValue,serviceType, page, size));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListItemsService);
