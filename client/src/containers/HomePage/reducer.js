import * as Types from './constants';

const initialState = {
    sliderItems: null,
    topAlbums: null,
    topVideos: null,
    topDresses: null,
    aboutUsDetails: null,
};

const homePage = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case Types.FETCH_SLIDER:
            return Object.assign({}, state, {
                sliderItems: action.sliderItems
            });
        case Types.FETCH_TOPALBUMS:
            return Object.assign({}, state, {
                topAlbums: action.topAlbums
            });
        case Types.FETCH_TOPVIEOS:
            return Object.assign({}, state, {
                topVideos: action.topVideos
            });
        case Types.FETCH_TOPDRESSES:
            return Object.assign({}, state, {
                topDresses: action.topDresses
            });
        case Types.FETCH_ABOUTUS:
            return Object.assign({}, state, {
                aboutUsDetails: action.aboutUsDetails
            });
        default:
            return state;
    }
};

export default homePage;