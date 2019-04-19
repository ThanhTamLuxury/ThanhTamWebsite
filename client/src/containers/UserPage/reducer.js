import * as Types from './constants';

const initialState = {
    servicesResponse: null,
    serviceItem: null,
    isLogin: false
};

const userPage = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SERVICES:
            return Object.assign({}, state, {
                servicesResponse: action.servicesResponse
            });
        case Types.FETCH_SERVICEBYID:
            return Object.assign({}, state, {
                serviceItem: action.serviceItem
            });
        case Types.FETCH_PRICE_SERVICES:
            return Object.assign({}, state, {
                servicesResponse: action.servicesResponse
            });
        default:
            return state;
    }
};

export default userPage;