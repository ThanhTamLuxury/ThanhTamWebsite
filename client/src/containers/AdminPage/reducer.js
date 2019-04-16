import * as Constants from './../constants';

const initialState = {
    isLoading: false,
    isAdding : false,
    serviceType: '',
    tabCode: Constants.SERVICE_HOME,
    servicesResponse: null,
    serviceItem: null,
    serviceID: '',
    response: {
        singleFileResponse: null,
        mutipleFilesResponse: [],
    },
    filesStatus:[],
    isLogin: false,
    user:{},
    actionsPage:[],
};

const adminPage = (state = initialState, action) => {
    switch (action.type) {
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
                isLoading: false
            });
        case Constants.FETCH_SERVICEBYID:
            return Object.assign({}, state, {
                serviceItem: action.serviceItem,
                isLoading: false
            });
        case Constants.ADD_SERVICE:
            return Object.assign({}, state, {
                response: action.response,
                filesStatus:action.filesStatus,
                isAdding: false,
                isLoading:false,
            });
        case Constants.UPDATE_SERVICE:
            return Object.assign({}, state, {
                response: action.response,
                isLoading: false
            });
        case Constants.ON_CHANGE_MENU:
            return Object.assign({}, state, {
                tabCode: action.tabCode,
                serviceType: action.serviceType,
                isLoading: false
            });

        case Constants.ON_EDIT:
            return Object.assign({}, state, {
                tabCode: action.tabCode,
                serviceID: action.serviceID,
                isLoading: false
            });
        case Constants.ON_ADDNEW:
            return Object.assign({}, state, {
                tabCode: action.tabCode,
                serviceID: '',
                isLoading: false
            });
        case Constants.ON_VIEW_PRICE:
            return Object.assign({}, state, {
                tabCode: action.tabCode,
                serviceID: action.serviceID,
                isLoading: false,
            });
        case Constants.UPLOAD_FILE:
            return Object.assign({}, state, {
                response: {
                    singleFileResponse: action.response,
                },
                isLoading: true,
            });
        case Constants.UPLOAD_MULTIPLE_FILES:
            return Object.assign({}, state, {
                response: {
                    mutipleFilesResponse: action.response,
                },
                isLoading: true
            });
        default:
            return state;
    }
};

export default adminPage;