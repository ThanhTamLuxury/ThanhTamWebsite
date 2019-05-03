import * as Types from './constants';

const initialState = {
    servicesResponse: null,
    serviceItem: null,
    isLogin: false,
    isLoading: false,
    statusCode: 200,
};

const userPage = (state = initialState, action) => {
    switch (action.type) {
        case Types.PAGE_RESET:
            return Object.assign({}, state, {
                isLoading: false,
                messages: '',
                servicesResponse: null,
                serviceItem: null,
                isLogin: false,
                statusCode: 200,
            });
        case Types.PAGE_LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        case Types.FETCH_PRICE_SERVICES:
            return Object.assign({}, state, {
                servicesResponse: action.servicesResponse,
                isLoading: false,
            });
        case Types.FETCH_SERVICEBYID:
            return Object.assign({}, state, {
                serviceItem: action.response,
                isLoading: false,
                statusCode: 200,
            });
        case Types.FETCH_SERVICES:
            return Object.assign({}, state, {
                servicesResponse: action.servicesResponse,
                isLoading: false,
            });
        case Types.RES_NOT_2xx:
            return Object.assign({}, state, {
                statusCode: action.statusCode,
                messages: action.messages,
                isLoading: false,
            });
        default:
            return state;
    }
};

export default userPage;