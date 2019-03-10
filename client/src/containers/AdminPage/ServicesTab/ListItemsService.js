import React, { Component } from 'react';
import * as Constant from '../constants';
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


const services_json = {
    totalItems: 15,
    services: [
        {
            id: 1,
            name: 'Albums chụp hình cưới tại Đồng Nai1',
            dateCreated: '30-03-2019'
        }, {
            id: 2,
            name: 'Albums chụp hình cưới tại Đồng Nai2',
            dateCreated: '30-03-2019'
        }, {
            id: 3,
            name: 'Albums chụp hình cưới tại Đồng Nai3',
            dateCreated: '30-03-2019'
        }, {
            id: 4,
            name: 'Albums chụp hình cưới tại Đồng Nai4',
            dateCreated: '30-03-2019'
        },
    ]
}


class ListItemsService extends Component {


    state = {
        page: 0,
        data: [],
        rowsPerPage: 5,
        selected: [],
        totalItems: 0,
    };

    componentDidMount() {
        this.props.fetchServicesList();
        // let { listServies } = this.props;
        // console.log(listServies);
        // console.log(this.state.data);

        // if(services){
        //     this.setState({
        //         data: services
        //     });
        // }
       
    }
    onChangePage = (event, page) => {
        this.setState({ page: page });
        console.log(this.state.page);
    };

    componentWillReceiveProps(nextProps){
        this.setState({
             data: nextProps.listServies.services,
             totalItems:  nextProps.listServies.totalItems
            });
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

    onAddOrUpdate = (key, id) => {
        let tabKey = "";
        switch (key) {
            case Constant.SERVICE_ALBUMS:
                tabKey = Constant.SERVICE_ADDNEW_ALBUM;
                if (id) {
                    tabKey = Constant.SERVICE_EDIT_ALBUM;
                }
                break;
            case Constant.SERVICE_DRESSES:
                tabKey = Constant.SERVICE_ADDNEW_DRESS;
                if (id) {
                    tabKey = Constant.SERVICE_EDIT_DRESS;
                }
                break;
            case Constant.SERVICE_VIDEOS:
                tabKey = Constant.SERVICE_ADDNEW_VIDEO;
                if (id !== null) {
                    tabKey = Constant.SERVICE_EDIT_VIDEO;
                }
                break;
            case Constant.SERVICE_PRICE_ALBUMS:
                tabKey = Constant.SERVICE_ADDNEW_PRICE_ALBUM;
                if (id !== null) {
                    tabKey = Constant.SERVICE_EDIT_PRICE_ALBUM;
                }
                break;
            case Constant.SERVICE_PRICE_VIDEOS:
                tabKey = Constant.SERVICE_ADDNEW_PRICE_VIDEO;
                if (id !== null) {
                    tabKey = Constant.SERVICE_EDIT_PRICE_VIDEO;
                }
                break;
            case Constant.SERVICE_PRICE_INCLUSIVE:
                tabKey = Constant.SERVICE_ADDNEW_PRICE_INCLUSIVE;
                if (id !== null) {
                    tabKey = Constant.SERVICE_EDIT_PRICE_INCLUSIVE;
                }
                break;
            default:
                tabKey = Constant.SERVICE_HOME
        }
        this.props.onChangeTab(tabKey, id);
    }

    onDelete = () => {
        if (this.state.selected.length == 0) {
            alert(Constant.MSG_NO_SELECTED_DELETED);
        } else {
            //TODO
            //call api to delete
        }
    }

    render() {
        const { page, data, selected, rowsPerPage,totalItems } = this.state;
        const { serviceCode } = this.props;
        
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
                            </TableRow>
                        </TableHead>
                        <TableBody  >
                            {data && this.renderData(data)}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>

                </div>
                <TablePagination
                    style={{ fontSize: '1.1em' }}
                    rowsPerPageOptions={[]}
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
                />
                <Button variant="contained" color="primary"
                    style={{ width: '10%', height: 'auto', marginTop: '2em' }}
                    onClick={this.onDelete}>
                    Xóa
                </Button>
                <Button variant="contained" color="primary"
                    style={{width: '10%', height: 'auto', marginLeft: '2em', marginTop: '2em' }}
                    onClick={() => this.onAddOrUpdate(serviceCode, null)}>
                    Thêm 
                </Button>
            </div>
        );
    }

    renderData(data) {
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
                            <Button variant="outlined" color="primary" onClick={() => this.onAddOrUpdate(this.props.serviceCode, item.id)}  >Chi tiết</Button>
                        </TableCell>
                    </TableRow>
                )
            })
        }
        return result;
    }

}
const mapStateToProps = state => {
    return {
        listServies: state.adminPage.listServies
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchServicesList: () => {
            dispatch(axios_fetch_services());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListItemsService);
