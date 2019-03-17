
import * as Actions from './actions';
import callApi from '../../utils/apiCaller';

// Fetch
export const axios_fetch_dressesList = () => {
    return dispatch => {
        return callApi('dresses_list_json', 'GET', null).then(res => {
            dispatch(Actions.actFetchDressesListJson(res.data));
        });
    };
}


