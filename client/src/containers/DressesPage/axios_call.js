
import * as Actions from './actions';
import callApi from '../../utils/apiCaller';

// Fetch
export const axios_fetch_dressesList = () => {
    return dispatch => {
        return callApi('service/all/outside-page?serviceType=WEDDING_DRESS&page=1&size=5', 'GET', null).then(res => {
            dispatch(Actions.actFetchDressesListJson(res.data));
        });
    };
}


