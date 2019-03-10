import * as Types from './constants';

const initialState = {
    listServies: null,
};

const adminPage = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SERVICES:
            return Object.assign({}, state, {
                listServies: action.listServies
            });
        default:
            return state;
    }
};

export default adminPage;