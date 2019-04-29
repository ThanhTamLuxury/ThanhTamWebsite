import * as Constants from './../constants';

const initialState = {
    statusCode:200,
    isLoading: false,
    isDelete: false,
    isUpdate:false,
    serviceType: '',
    tabCode: Constants.SERVICE_ADMIN,
    servicesResponse: null,
    serviceItem: null,
    serviceID: '',
    response: null,
    bannerResponse:null,
    filesStatus:[],
    isLogin: false,
    user:{},
    actionsPage:[],
    idArr:[],
    messages :'',
    aboutUsDetails:null,
};

const adminPage = (state = initialState, action) => {
    switch (action.type) {
        case Constants.PAGE_RESET:
            return Object.assign({}, state, {
                isLoading: false,
                messages :'',
                filesStatus :[],
                response:{},
                isDelete:false,
                isUpdate:false,
            });
        case Constants.PAGE_LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        case Constants.LOG_IN:
            return Object.assign({}, state, {
                user: action.user
            });
        case Constants.LOG_OUT:
            localStorage.removeItem('ADMIN');
            return Object.assign({}, state, {
                isLogin: false
            });
        case Constants.FETCH_SERVICES:
            return Object.assign({}, state, {
                servicesResponse: action.servicesResponse,
                isLoading: false,
                isDelete:false,
            });
        case Constants.FETCH_SERVICEBYID:
            return Object.assign({}, state, {
                serviceItem: action.serviceItem,
                isLoading: false,
                isDelete:false,
            });
        case Constants.ADD_SERVICE:
            return Object.assign({}, state, {
                response: action.response,
                filesStatus:action.filesStatus,
                messages:'Thêm mới thành công',
                isLoading:false,
                isDelete:false,
            });
        case Constants.UPLOAD_SUCCESS:
            return Object.assign({}, state, {
                response: action.response,
                isLoading:false,
                isDelete:false,
            });
        case Constants.UPDATE_SERVICE:
            return Object.assign({}, state, {
                response: action.response,
                messages:'Thay đổi đã được cập nhật',
                isLoading: false,
                isDelete:false,
                isUpdate:true,
            });
        case Constants.DELETE_SERVICES:
            return Object.assign({}, state, {
                messages: 'Xóa thành công',
                isDelete:true,
            });
        case Constants.ON_CHANGE_MENU:
            return Object.assign({}, state, {
                tabCode: action.tabCode,
                serviceType: action.serviceType,
                isLoading: false,
                isDelete:false,
            });

        case Constants.ON_EDIT:
            return Object.assign({}, state, {
                tabCode: action.tabCode,
                serviceID: action.serviceID,
                isLoading: false,
                isDelete:false,
            });
        case Constants.ON_ADDNEW:
            return Object.assign({}, state, {
                tabCode: action.tabCode,
                serviceID: '',
                isLoading: false,
                isDelete:false,
            });
        case Constants.ON_VIEW_PRICE:
            return Object.assign({}, state, {
                tabCode: action.tabCode,
                serviceID: action.serviceID,
                isLoading: false,
                isDelete:false,
            });
            case Constants.FETCH_ABOUTUS:
            return Object.assign({}, state, {
                aboutUsDetails: action.aboutUsDetails
            });
            case Constants.FETCH_BANNERS:
            return Object.assign({}, state, {
                bannerResponse:action.response,
                statusCode:action.statusCode,
            });
            case Constants.RES_NOT_2xx:
            return Object.assign({}, state, {
                statusCode: action.statusCode,
                messages:action.messages
            });
            
        default:
            return state;
    }
};

export default adminPage;