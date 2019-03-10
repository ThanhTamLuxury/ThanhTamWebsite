
import * as Types from './constants';

export const actFetchAlbumsListJson = (albumsList) => {
    return {
        type : Types.FETCH_ALBUMSLIST,
        albumsList
    }
}