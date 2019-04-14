import * as Actions from './actions';
import callApi from '../../utils/apiCaller';

// Fetch
export const axios_fetch_services = (serviceType, page, size) => {
    return dispatch => {
        return callApi(`service/all/outside-page?serviceType=${serviceType}&page=${page}&size=${size}`, 'GET', null).then(res => {
            if (res != null) {
                dispatch(Actions.actFetchServies(res.data));
            }
        });
    };
}
// Fetch
export const axios_fetch_serviceByID = (id) => {
    return dispatch => {
        return callApi(`service/${id}`, 'GET', null).then(res => {
            if (res != null) {
                dispatch(Actions.actFetchServiceByID(res.data));
            }
        });
    };
}