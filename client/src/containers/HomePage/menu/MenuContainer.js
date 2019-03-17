import React, { Component } from 'react';
import Menu from '../../../components/Menu/Menu';
import { connect } from 'react-redux';
import { axios_fetch_MenusItems } from './../axios_call';

const defaultMenu = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true,
    },
    {
        name: 'Albums',
        to: '/albums',
        exact: true,
    },
    {
        name: 'Áo cưới',
        to: '/ao-cuoi',
        exact: true,
    },
    {
        name: 'Videos',
        to: '/videos',
        exact: true,
    },
    {
        name: 'Bảng giá',
        to: '#',
        exact: true,
        itemSliders: [
            {
                id: 1,
                name: 'Albums',
                slug: '/bang-gia/albums'
            },
            {
                id: 2,
                name: 'Videos',
                slug: '/bang-gia/videos'
            },
            {
                id: 3,
                name: 'Trọn gói',
                slug: '/bang-gia/tron-goi'
            }
        ]
    }
];

class MenuContainer extends Component {

    componentDidMount() {
        this.props.fetchMenuItems();
    }
    render() {
        var { menuItems } = this.props;
        return (
            <Menu menus={menuItems != null ? menuItems.menus : defaultMenu} />
        );
    }
}


const mapStateToProps = state => {
    return {
        menuItems: state.homePage.menuItems
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchMenuItems: () => {
            dispatch(axios_fetch_MenusItems());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
