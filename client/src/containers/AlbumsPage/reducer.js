import * as Types from './constants';

const initialState = {
    albumsList: null,
};

const albumsPage = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case Types.FETCH_ALBUMSLIST:
            return Object.assign({}, state, {
                albumsList: action.albumsList
            });
        default:
            return state;
    }
};

export default albumsPage;