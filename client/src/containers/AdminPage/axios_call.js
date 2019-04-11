
import * as Actions from './actions';
import callApi from '../../utils/apiCaller';

// Fetch
export const axios_fetch_services = () => {
    return dispatch => {
        return callApi('services_json', 'GET', null).then(res => {
            console.log(res);
            if(res !=null){
                dispatch(Actions.actFetchServices(res.data)); 
            }
        });
    };
}


