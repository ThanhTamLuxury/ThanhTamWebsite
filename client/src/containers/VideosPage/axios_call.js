
import * as Actions from './actions';
import callApi from '../../utils/apiCaller';

// Fetch
export const axios_fetch_videosList = () => {
    return dispatch => {
        return callApi('videos_list_json', 'GET', null).then(res => {
            dispatch(Actions.actFetchVideosListJson(res.data));
        });
    };
}


