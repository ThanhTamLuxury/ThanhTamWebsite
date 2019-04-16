import React, { Component } from 'react';
import * as Constant from './../constants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
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
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import StarBorder from '@material-ui/icons/StarBorder';
import { fade } from '@material-ui/core/styles/colorManipulator';
import HomePageService from './ServicesTab/HomePageService';
import ListItemsService from './ServicesTab/ListItemsService';

import SvgIcon from '@material-ui/core/SvgIcon';
import AlbumForm from './ServicesActionPage/AlbumForm';
import DressForm from './ServicesActionPage/DressForm';
import VideoForm from './ServicesActionPage/VideoForm';
import AlbumsPriceForm from './ServicesActionPage/AlbumsPriceForm';
import { actChangeMenu, onLoading, onAdding,onUpdate } from './actions';


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
        tabCode: Constant.SERVICE_HOME,
        name: 'Trang chủ'
    },
    {
        id: Constant.SERVICE_ALBUM,
        tabCode: Constant.SERVICE_ALBUM,
        name: 'Danh sách albums'
    },
    {
        id: Constant.SERVICE_WEDDING_DRESS,
        tabCode: Constant.SERVICE_WEDDING_DRESS,
        name: 'Danh sách áo cưới'
    },
    {
        id: Constant.SERVICE_WEDDING_VIDEO,
        tabCode: Constant.SERVICE_WEDDING_VIDEO,
        name: 'Danh sách videos'
    },
    {
        id: Constant.SERVICE_FULL_WEDDING_DAY,
        tabCode: Constant.SERVICE_FULL_WEDDING_DAY,
        name: 'Danh sách bảng giá trọn gói'
    },
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
            width: theme.spacing.unit * 7 + 1,
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
        minWidth:'400px'
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
        isLoading: false,
        isAdding:false,
        isUpdate:false,
        open: true,
        toggleOpen: false,
        tabLabel: 'Trang chủ',
        displayingTab: Constant.SERVICE_HOME,
        serviceID: 1,
        isUploadFinished: false,
        uploadMessages: [],
        isDoneAction:false,
        msgAction :'',
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
    handleSnackbarClick = () => {
        this.setState({ isUploadFinished: true });
    };

    handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ isUploadFinished: false });
    };

    handleActionSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ isDoneAction: false });
    };

    onChangeTab = (serviceType, tabCode) => {
        this.props.onChangeMenu(serviceType, tabCode);
        let label = this.getLabelName(tabCode);
        this.setState({
            tabLabel: label,
            displayingTab: tabCode,
        });
    }
    renderUploadMSG = (uploadMessages) => {
        let result = null;
        if (uploadMessages != null) {
            if (uploadMessages.length > 0) {
                result = uploadMessages.map((item, index) => {
                    return (
                        <h5 key={index}>
                            {item.fileName}
                            {item.success ? <i className="fa fa-check-circle"
                                style={{ color: 'green', marginLeft: '1em', float: 'right' }}></i> :
                                <i className="fa fa-times-circle"
                                    style={{ color: 'red', marginLeft: '1em', float: 'right' }}></i>}
                        </h5>
                    );
                });
            }
        }

        return result;
    }
    componentWillReceiveProps(nextProps) {
        
        this.setState({
            isLoading: nextProps.isLoading,
            isAdding:nextProps.isAdding
        });
        if(nextProps.filesStatus){
            if (nextProps.filesStatus.length > 0 && !nextProps.isAdding) {
                this.setState({
                    uploadMessages: nextProps.filesStatus,
                    isUploadFinished: true,
                    isDoneAction:true
                })
            }
        }
        this.props.onAdding(nextProps.isAdding);
        this.props.onUpdate(nextProps.isUpdate);
        this.props.onLoading(nextProps.isLoading);

    }



    render() {

        const { classes, theme } = this.props;
        const { displayingTab, isLoading,isAdding, uploadMessages,isUpdate,msgAction } = this.state;
        return (
            <div className={classes.root}>
                
                {(isLoading || isAdding || isUpdate) ? <LinearProgress color="secondary" style={{position:'fixed', top:'0',zIndex:'9999',width:'100%'}} /> : ''}
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
                         <div style={{marginRight: 20,position:'absolute',right:'0'}}>{isLoading ? 'Đang xử lý':''}</div>   
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
                    <List>
                        {/*DAnh sách các menu ở đây  */}
                        {this.renderServicesMenu(menus)}
                        <Divider />
                    </List>

                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {/* Content */}
                    {displayingTab === Constant.SERVICE_HOME && <HomePageService />}
                    {displayingTab === Constant.SERVICE_ALBUM && <ListItemsService onChangeTab={this.onChangeTab} />}
                    {displayingTab === Constant.SERVICE_WEDDING_DRESS && <ListItemsService onChangeTab={this.onChangeTab} />}
                    {displayingTab === Constant.SERVICE_WEDDING_VIDEO && <ListItemsService onChangeTab={this.onChangeTab} />}
                    {displayingTab === Constant.SERVICE_FULL_WEDDING_DAY && <ListItemsService onChangeTab={this.onChangeTab} />}

                    {(displayingTab === Constant.TAB_ALBUM_ADD) && <AlbumForm onChangeTab={this.onChangeTab} />}
                    {(displayingTab === Constant.TAB_ALBUM_EDIT) && <AlbumForm onChangeTab={this.onChangeTab} />}
                    {(displayingTab === Constant.TAB_WEDDING_DRESS_ADD) && <DressForm onChangeTab={this.onChangeTab} />}
                    {(displayingTab === Constant.TAB_WEDDING_DRESS_EDIT) && <DressForm onChangeTab={this.onChangeTab} />}
                    {(displayingTab === Constant.TAB_WEDDING_VIDEO_ADD) && <VideoForm onChangeTab={this.onChangeTab} />}
                    {(displayingTab === Constant.TAB_WEDDING_VIDEO_EDIT) && <VideoForm onChangeTab={this.onChangeTab} />}

                    {(displayingTab === Constant.TAB_FULL_WEDDING_DAY_ADD) && <AlbumsPriceForm onChangeTab={this.onChangeTab} />}
                    {(displayingTab === Constant.TAB_FULL_WEDDING_DAY_EDIT) && <AlbumsPriceForm onChangeTab={this.onChangeTab} />}

                    {(displayingTab === Constant.TAB_ALBUM_PRICE) && <AlbumsPriceForm onChangeTab={this.onChangeTab} />}
                    {(displayingTab === Constant.WEDDING_VIDEO_PRICE) && <AlbumsPriceForm onChangeTab={this.onChangeTab} />}

                </main>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={this.state.isUploadFinished}
                    onClose={this.handleSnackbarClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={
                        <div><h5>Files tải lên</h5><hr />{this.renderUploadMSG(uploadMessages)}</div>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            variant="outlined"
                            color="secondary"
                            onClick={this.handleSnackbarClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={this.state.isDoneAction}
                    onClose={this.handleActionSnackbarClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<h5>{msgAction}</h5>}
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
        );
    }



    selectIcon(text) {
        switch (text) {
            case Constant.SERVICE_HOME:
                return <HomeIcon />;
            case Constant.SERVICE_ALBUM:
                return <AlbumIcon />;
            case Constant.SERVICE_WEDDING_DRESS:
                return <DressIcon />;
            case Constant.SERVICE_WEDDING_VIDEO:
                return <VideoIcon />;
            case Constant.SERVICE_FULL_WEDDING_DAY:
                return <PriceIcon />;
        }
    }

    getLabelName(key) {
        switch (key) {
            case Constant.SERVICE_HOME:
                return 'Trang chủ';
            case Constant.SERVICE_ALBUM:
                return 'Danh sách albums';
            case Constant.SERVICE_WEDDING_DRESS:
                return 'Danh sách áo cưới';
            case Constant.SERVICE_WEDDING_VIDEO:
                return 'Danh sách videos';
            case Constant.SERVICE_FULL_WEDDING_DAY:
                return 'Danh sách bảng giá trọn gói';


            case Constant.TAB_ALBUM_ADD:
                return 'Thêm mới album';
            case Constant.TAB_WEDDING_DRESS_ADD:
                return 'Thêm mới áo cưới';
            case Constant.TAB_WEDDING_VIDEO_ADD:
                return 'Thêm mới video';
            case Constant.TAB_FULL_WEDDING_DAY_ADD:

            case Constant.TAB_ALBUM_EDIT:
                return 'Chỉnh sửa album';
            case Constant.TAB_WEDDING_DRESS_EDIT:
                return 'Chỉnh sửa áo cưới';
            case Constant.TAB_WEDDING_VIDEO_EDIT:
                return 'Chỉnh sửa video';
            case Constant.TAB_FULL_WEDDING_DAY_EDIT:
                return 'Chỉnh sửa bảng giá trọn gói';

            case Constant.ALBUM_PRICE:
                return 'Chỉnh sửa bảng giá album';
            case Constant.WEDDING_VIDEO_PRICE:
                return 'Chỉnh sửa bảng giá video';

            default:
                return <StarBorder />;
        }
    }
    renderServicesMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <ListItem className="text-center" button key={index} onClick={() => this.onChangeTab(menu.id, menu.tabCode)} >
                        <ListItemIcon >
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
const mapStateToProps = state => {
    return {
        serviceType: state.adminPage.serviceType,
        tabCode: state.adminPage.tabCode,
        response: state.adminPage.response,
        isLoading: state.adminPage.isLoading,
        isAdding: state.adminPage.isAdding,
        filesStatus: state.adminPage.filesStatus,


    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeMenu: (tabCode, serviceType) => {
            dispatch(actChangeMenu(tabCode, serviceType));
        },
         onLoading: (isLoading) => {
            dispatch(onLoading(isLoading));
        },
        onAdding: (isAdding) => {
            dispatch(onAdding(isAdding));
        },
        onUpdate: (isUpdate) => {
            dispatch(onUpdate(isUpdate));
        },

    }
}
export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer));
