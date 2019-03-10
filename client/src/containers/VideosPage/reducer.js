import * as Types from './constants';

const initialState = {
    videosList: null,
};

const videosPage = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_VIDEOSLIST:
            return Object.assign({}, state, {
                videosList: action.videosList
            });
        default:
            return state;
    }
};

export default videosPage;