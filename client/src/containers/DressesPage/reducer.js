import * as Types from './constants';

const initialState = {
    dressesList: null,
};

const dressesPage = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_DRESSESLIST:
            return Object.assign({}, state, {
                dressesList: action.dressesList
            });
        default:
            return state;
    }
};

export default dressesPage;