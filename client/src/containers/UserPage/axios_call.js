import * as Actions from './actions';
import * as Constants from './constants';
import callApi from '../../utils/apiCaller';

// Fetch
export const axios_fetch_services = (serviceType, page, size) => {
    return dispatch => {
        //server start from 0 but client start from 1. Substract 1
        if (page > 0) {
            page--;
        }
        return callApi(`service/all/outside-page?serviceType=${serviceType}&page=${page}&size=${size}`, 'GET', null).then(res => {
            if (res != null) {
                dispatch(Actions.actFetchServies(res.data));
            }
        });
    };
}

export const axios_fetch_price_services = (serviceType, page, size) => {
    return dispatch => {
        //server start from 0 but client start from 1. Substract 1
        if (page > 0) {
            page--;
        }
        return callApi(`service/price-info?serviceType=${serviceType}&page=${page}&size=${size}`, 'GET', null).then(res => {
            if (res != null) {
                dispatch(Actions.actFetchPriceServies(res.data));
            }
        });
    };
}
// Fetch
export const axios_fetch_serviceByID = async (id, dispatch) => {
    let res = await callApi(`service/${id}`, 'GET', null, 'ADMIN')
    if (res != null) {
        handleResponse(res, dispatch, Constants.FETCH_SERVICEBYID);
    }
}
const handleResponse = async (res, dispatch, action, msg) => {
    let status = res.status;
    switch (status) {
        case 200:
            await dispatch(Actions.is2xx(action, res.data));
            break;
        case 401:
            await dispatch(Actions.isNot2xx(401, "Vui lòng đăng nhập lại !"));
            break;
        case 403:
            await dispatch(Actions.isNot2xx(403, "Vui lòng đăng nhập lại !"));
            break;
        case 404:
            await dispatch(Actions.isNot2xx(404, "Không tìm thấy !"));
            break;
        default:
            await dispatch(Actions.isNot2xx(500, "Đã xảy ra lỗi !"));
            break;
    }
}