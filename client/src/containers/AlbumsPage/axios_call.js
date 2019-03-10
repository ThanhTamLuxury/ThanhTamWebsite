
import * as Actions from './actions';
import callApi from '../../utils/apiCaller';

// Fetch
export const axios_fetch_albumsList = () => {
    return dispatch => {
        return callApi('albums_list_json', 'GET', null).then(res => {
            dispatch(Actions.actFetchAlbumsListJson(res.data));
        });
    };
}


