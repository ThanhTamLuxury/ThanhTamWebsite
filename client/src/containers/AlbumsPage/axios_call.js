import * as Actions from './actions';
import callApi from '../../utils/apiCaller';

// Fetch
export const axios_fetch_albumsList = () => {
    return dispatch => {
        return callApi('service/all/outside-page?serviceType=ALBUM&page=1&size=5', 'GET', null).then(res => {
            if (res != null) {
                dispatch(Actions.actFetchAlbumsListJson(res.data));
            }

        });
    };
}