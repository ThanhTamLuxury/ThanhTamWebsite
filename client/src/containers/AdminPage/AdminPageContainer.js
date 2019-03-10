import React, { Component } from 'react';
import * as Constant from './constants';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import { fade } from '@material-ui/core/styles/colorManipulator';
import HomePageService from './ServicesTab/HomePageService';
import ListItemsService from './ServicesTab/ListItemsService';

import SvgIcon from '@material-ui/core/SvgIcon';
import AlbumForm from './ServicesActionPage/AlbumForm';
import DressForm from './ServicesActionPage/DressForm';
import VideoForm from './ServicesActionPage/VideoForm';
import AlbumsPriceForm from './ServicesActionPage/AlbumsPriceForm';


function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
function AlbumIcon(props) {
    return (
        <SvgIcon {...props}>
            <path xmlns="http://www.w3.org/2000/svg" d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
            <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0z" fill="none" />
        </SvgIcon>
    );
}
function DressIcon(props) {
    return (
        <SvgIcon {...props}>
            <path xmlns="http://www.w3.org/2000/svg" d="M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z" />
            <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0z" fill="none" />
        </SvgIcon>
    );
}
function PriceIcon(props) {
    return (
        <SvgIcon {...props}>
            <path xmlns="http://www.w3.org/2000/svg" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
            <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0z" fill="none" />
        </SvgIcon>
    );
}

function VideoIcon(props) {
    return (
        <SvgIcon {...props}>
            <path xmlns="http://www.w3.org/2000/svg" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
            <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0z" fill="none" />
        </SvgIcon>
    );
}

const menus = [
    {
        id: Constant.SERVICE_HOME,
        name: 'Trang chủ'
    },
    {
        id: Constant.SERVICE_ALBUMS,
        name: 'Danh sách albums'
    },
    {
        id: Constant.SERVICE_DRESSES,
        name: 'Danh sách áo cưới'
    },
    {
        id: Constant.SERVICE_VIDEOS,
        name: 'Danh sách videos'
    },
]
const priceListItems = [
    {
        id: Constant.SERVICE_PRICE_ALBUMS,
        name: 'Bảng giá albums'
    },
    {
        id: Constant.SERVICE_PRICE_VIDEOS,
        name: 'Bảng giá videos'
    },
    {
        id: Constant.SERVICE_PRICE_INCLUSIVE,
        name: 'Bảng giá trọn gói'
    }
]

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 10,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 3,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 5,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 5,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 5,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
        fontSize: '1.2em',
    }
});


class AdminPageContainer extends Component {
    state = {
        open: true,
        toggleOpen: false,
        tabLabel: 'Trang chủ',
        displayingTab: Constant.SERVICE_HOME,
        serviceItem: { key: Constant.SERVICE_HOME, id: 1 }
    };

    handleToggleClick = (text) => {
        this.setState({
            toggleOpen: !this.state.toggleOpen,
            tabLabel: text,
        });
    };
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    onChangeTab = (key, id) => {
        console.log(key + "- " + id)
        let label = this.getLabelName(key);
        this.setState({
            tabLabel: label,
            displayingTab: key,
            serviceItem: {
                key: key,
                id: id,
            },
        });
    }
    render() {

        const { classes, theme } = this.props;
        const { displayingTab, serviceItem } = this.state;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                    })}
                >
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, {
                                [classes.hide]: this.state.open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h4" color="inherit" noWrap>
                            {this.state.tabLabel}
                        </Typography>
                        <Typography variant="h6" color="inherit" noWrap>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Tìm kiếm..."
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                />
                            </div>
                        </Typography>

                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        }),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List
                        style={{ paddingLeft: '0.5em' }}>
                        {/*DAnh sách các menu ở đây  */}
                        {this.renderServicesMenu(menus)}
                        <Divider />
                        <ListItem button onClick={() => this.handleToggleClick("Danh sách bảng giá")} >
                            <ListItemIcon>
                                <PriceIcon />
                            </ListItemIcon>
                            <ListItemText inset primary="Danh sách bảng giá" />
                            {this.state.toggleOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </List>

                    <Collapse in={this.state.toggleOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding style={{ paddingLeft: '0.5em', fontSize: '0.9em' }}>

                            {priceListItems.map((item, index) => (
                                <ListItem button key={index} onClick={() => this.onChangeTab(item.id)} >
                                    <ListItemIcon>
                                        {this.selectIcon(item.id)}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>


                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {/* Content */}
                    {displayingTab === Constant.SERVICE_HOME && <HomePageService />}
                    {displayingTab === Constant.SERVICE_ALBUMS && <ListItemsService onChangeTab={this.onChangeTab} serviceCode={Constant.SERVICE_ALBUMS} />}
                    {displayingTab === Constant.SERVICE_DRESSES && <ListItemsService onChangeTab={this.onChangeTab} serviceCode={Constant.SERVICE_DRESSES} />}
                    {displayingTab === Constant.SERVICE_VIDEOS && <ListItemsService onChangeTab={this.onChangeTab} serviceCode={Constant.SERVICE_VIDEOS} />}
                    {displayingTab === Constant.SERVICE_PRICE_ALBUMS && <ListItemsService onChangeTab={this.onChangeTab} serviceCode={Constant.SERVICE_PRICE_ALBUMS} />}
                    {displayingTab === Constant.SERVICE_PRICE_VIDEOS && <ListItemsService onChangeTab={this.onChangeTab} serviceCode={Constant.SERVICE_PRICE_VIDEOS}/>}
                    {displayingTab === Constant.SERVICE_PRICE_INCLUSIVE && <ListItemsService onChangeTab={this.onChangeTab} serviceCode={Constant.SERVICE_PRICE_INCLUSIVE}/>}
                    
                    {(displayingTab === Constant.SERVICE_EDIT_ALBUM || displayingTab === Constant.SERVICE_ADDNEW_ALBUM) && <AlbumForm serviceItem={serviceItem} />}
                    {(displayingTab === Constant.SERVICE_EDIT_DRESS || displayingTab === Constant.SERVICE_ADDNEW_DRESS) && <DressForm serviceItem={serviceItem} />}   
                    {(displayingTab === Constant.SERVICE_EDIT_VIDEO || displayingTab === Constant.SERVICE_ADDNEW_VIDEO) && <VideoForm serviceItem={serviceItem} />}
                    {(displayingTab === Constant.SERVICE_EDIT_PRICE_ALBUM|| displayingTab === Constant.SERVICE_ADDNEW_PRICE_ALBUM) && <AlbumsPriceForm serviceItem={serviceItem} />}               
                </main>
            </div>
        );
    }



    selectIcon(text) {
        switch (text) {
            case Constant.SERVICE_HOME:
                return <HomeIcon />;
            case Constant.SERVICE_ALBUMS:
                return <AlbumIcon />;
            case Constant.SERVICE_DRESSES:
                return <DressIcon />;
            case Constant.SERVICE_VIDEOS:
                return <VideoIcon />;
            case Constant.SERVICE_PRICELIST:
                return <PriceIcon />;
            default:
                return <StarBorder />;
        }
    }

    getLabelName(key) {
        switch (key) {
            case Constant.SERVICE_HOME:
                return 'Trang chủ';
            case Constant.SERVICE_ALBUMS:
                return 'Danh sách albums';
            case Constant.SERVICE_DRESSES:
                return 'Danh sách áo cưới';
            case Constant.SERVICE_VIDEOS:
                return 'Danh sách videos';
            case Constant.SERVICE_PRICELIST:
                return 'Danh sách bảng giá';
            case Constant.SERVICE_PRICE_ALBUMS:
                return 'Bảng giá albums';
            case Constant.SERVICE_PRICE_VIDEOS:
                return 'Bảng giá videos';
            case Constant.SERVICE_PRICE_INCLUSIVE:
                return 'Bảng giá trọn gói';
            case Constant.SERVICE_EDIT_ALBUM:
                return 'Chỉnh sửa album';
            case Constant.SERVICE_EDIT_DRESS:
                return 'Chỉnh sửa áo cưới';
            case Constant.SERVICE_EDIT_VIDEO:
                return 'Chỉnh sửa video';
            case Constant.SERVICE_EDIT_OTHERS:
                return 'Chỉnh sửa dịch vụ';
            case Constant.SERVICE_EDIT_PRICE_ALBUM:
                return 'Chỉnh sửa bảng giá album';
            case Constant.SERVICE_EDIT_PRICE_VIDEO:
                return 'Chỉnh sửa bảng giá video';
            case Constant.SERVICE_EDIT_PRICE_INCLUSIVE:
                return 'Chỉnh sửa bảng giá trọn gói';
            case Constant.SERVICE_ADDNEW_ALBUM:
                return 'Thêm mới album';
            case Constant.SERVICE_ADDNEW_DRESS:
                return 'Thêm mới áo cưới';
            case Constant.SERVICE_ADDNEW_VIDEO:
                return 'Thêm mới video';
            case Constant.SERVICE_ADDNEW_OTHERS:
                return 'Thêm mới dịch vụ';
            case Constant.SERVICE_ADDNEW_PRICE_ALBUM:
                return 'Thêm mới bảng giá album';
            case Constant.SERVICE_ADDNEW_PRICE_VIDEO:
                return 'Thêm mới bảng giá video';
            case Constant.SERVICE_ADDNEW_PRICE_INCLUSIVE:
                return 'Thêm mới bảng giá trọn gói';
            default:
                return <StarBorder />;
        }
    }
    renderServicesMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (

                    <ListItem button key={index} onClick={() => this.onChangeTab(menu.id)} >
                        <ListItemIcon>
                            {this.selectIcon(menu.id)}
                        </ListItemIcon>
                        <ListItemText primary={menu.name} />
                    </ListItem>
                );

            });
        }
        return result;
    }
}
AdminPageContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(AdminPageContainer);
