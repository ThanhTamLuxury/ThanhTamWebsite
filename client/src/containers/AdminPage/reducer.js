import * as Constants from './../constants';

const initialState = {
    serviceType: '',
    tabCode: Constants.SERVICE_HOME,
    servicesResponse: null,
    serviceItem: null,
    serviceID:'',
};

const adminPage = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case Constants.FETCH_SERVICES:
            return Object.assign({}, state, {
                servicesResponse: action.servicesResponse
            });
        case Constants.FETCH_SERVICEBYID:
            return Object.assign({}, state, {
                serviceItem: action.serviceItem
            });
        case Constants.ON_CHANGE_MENU:
            return Object.assign({}, state, {
                tabCode: action.tabCode,
                serviceType: action.serviceType,
            });
        case Constants.ON_EDIT:
            return Object.assign({}, state, {
                tabCode: action.tabCode,
                serviceID:action.serviceID
            });
        case Constants.ON_ADDNEW:
            return Object.assign({}, state, {
                tabCode: action.tabCode,
            });
            case Constants.ON_VIEW_PRICE:
            return Object.assign({}, state, {
                tabCode: action.tabCode,
                serviceID:action.serviceID
            });
        default:
            return state;
    }
};

export default adminPage;