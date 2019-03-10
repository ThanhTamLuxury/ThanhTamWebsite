
import * as Actions from './actions';
import callApi from '../../utils/apiCaller';

// Fetch
export const axios_fetch_services = () => {
    return dispatch => {
        return callApi('services_json', 'GET', null).then(res => {
            dispatch(Actions.actFetchServices(res.data)); 
        });
    };
}


