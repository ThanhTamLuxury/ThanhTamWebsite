import * as Actions from './actions';
import * as Constants from './../constants';
import callApi from '../../utils/apiCaller';

// Fetch
export const axios_fetch_services = (serviceType, page, size) => {
    return dispatch => {
        return callApi(`service/all/outside-page?serviceType=${serviceType}&page=${page}&size=${size}`, 'GET', null, 'ADMIN').then(res => {
            if (res != null) {
                dispatch(Actions.actFetchServies(res.data));
            }
        });
    };
}
export const axios_search_services = (searchValue, serviceType, page, size) => {
    return dispatch => {
        //server start from 0 but client start from 1. Substract 1
        if (page > 0) {
            page--;
        }
        return callApi(`service/search?serviceType=${serviceType}&searchValue=${searchValue}&page=${page}&size=${size}`, 'GET', null, 'ADMIN').then(res => {
            if (res != null) {
                dispatch(Actions.actFetchServies(res.data));
            }
        });
    };
}
// Fetch
export const axios_fetch_serviceByID = async (id,dispatch) => {
       let res = await callApi(`service/${id}`, 'GET', null, 'ADMIN');
        if (res != null) {
                handleResponse(res,dispatch,Constants.FETCH_SERVICEBYID);
        }
}
export const axios_get_banners = async (dispatch) => {
    let res = await callApi(`banner`, 'GET', null, 'ADMIN');
    if (res != null) {
        handleResponse(res, dispatch, Constants.FETCH_BANNERS, '');
    }
}
export const axios_update_password = async (info,dispatch) => {
    let res = await callApi(`account/change-password`, 'PUT', info, 'ADMIN');
    if (res != null) {
        handleResponse(res, dispatch, Constants.UPDATE_PASSWORD, '');
    }
}
export const axios_add_update_with_file_service = async (service, serviceType, files, file, dispatch, isUpdate) => {
    let resImage = null;
    let mainImage = null;
    let filesStatus = [];
    let mainImagePath = null;
    if (files.entries().next().value) {
        const result = await callApi(`upload/uploadMultipleFiles`, 'POST', files, 'UPLOAD');
        resImage = result.data;
        if (resImage) {
            resImage.map((res) => {
                service.imageItems.push({
                    id: null,
                    path: res.fileDownloadUri
                });
                filesStatus.push(res);
            });
        }
    }
    if (file.entries().next().value) {
        const res = await callApi(`upload/uploadFile`, 'POST', file, 'UPLOAD')
        mainImage = res.data;
        if (mainImage) {
            mainImagePath = mainImage.fileDownloadUri;
            filesStatus.push(mainImage);
            service = {
                ...service, mainImage: mainImagePath
            }
        };
    } else if (!isUpdate) {
        service = {
            ...service, mainImage: null
        }
    }

    if (!isUpdate) {
        const finalResult = await callApi(`service/${serviceType}`, 'POST', service, 'ADMIN')
        if (finalResult) {
            dispatch(Actions.actOnAddService(finalResult, filesStatus));
        }
    } else {
        const finalResult = await callApi(`service/${service.id}`, 'PUT', service, 'ADMIN')
        if (finalResult) {
            dispatch(Actions.actOnUpdateService(finalResult, filesStatus));
        }
    }
}

export const axios_add_update_service = async (service, serviceType, dispatch, isUpdate) => {
    if (!isUpdate) {
        const response = await callApi(`service/${serviceType}`, 'POST', service, 'ADMIN')
        if (response) {
            if (response.status === 200) {
                dispatch(Actions.actOnAddService(response, []));
            } else {

            }
        }
    } else {
        const response = await callApi(`service/${service.id}`, 'PUT', service, 'ADMIN')
        if (response) {
            dispatch(Actions.actOnUpdateService(response, []));
        }
    }
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('USER');
}

export const axios_uploadBanner = async (file, dispatch) => {
    if (file.entries().next().value) {
        const res = await callApi(`upload/uploadFile`, 'POST', file, 'UPLOAD');
        if (res != null) {
            dispatch(Actions.actUploadSuccess(res.data));
        }
    }
}

export const axios_updateBanners = async (imgArr, dispatch) => {
    if (imgArr && imgArr.length > 0) {
        const res = await callApi(`banner/many`, 'POST', imgArr, 'ADMIN');
        if (res != null) {
            handleResponse(res, dispatch, Constants.UPDATE_SERVICE, '');
        }
    }
}

export const axios_update_service = (service, serviceType) => {
    return dispatch => {
        return callApi(`service/update-info/${service.id}`, 'PUT', service, 'ADMIN').then(res => {
            if (res != null) {
                dispatch(Actions.actOnUpdateService(res.data));
            }
        });
    };
}
export const axios_delete_services = async (idArr, dispatch) => {
    let res = await callApi(`service`, 'DELETE', idArr, 'ADMIN');
    if (res != null) {
        handleResponse(res, dispatch, Constants.DELETE_SERVICES, '');
    }
}
export const login = async (username, password, redirect, dispatch) => {
    const response = await callApi(`login`, 'POST', JSON.stringify({ username, password }), 'LOGIN')
    if (response) {
        if (response.status === 401) {
            logout();
        }
        else if (response.status === 200) {
            localStorage.setItem('USER', response.headers.authorization);
            redirect();
        }
    }
}

const handleResponse = async (res, dispatch, action, msg) => {
    let status = res.status;
    let messages = '';
    switch (status) {
        case 200:
            await dispatch(Actions.is2xx(action, res.data));
            break;
        case 400:
            messages= await getMessages(res.data.message);            
            await dispatch(Actions.isNot2xx(400, messages));
            break;
        case 401:
            await dispatch(Actions.isNot2xx(401, Constants.MSG_REQUEST_LOGIN));
            break;
        case 403:
            await dispatch(Actions.isNot2xx(403, Constants.MSG_REQUEST_LOGIN));
            break;
        case 404:
            messages = await getMessages(res.data.message);
            await dispatch(Actions.isNot2xx(404, messages));
            break;
        default:
            await dispatch(Actions.isNot2xx(500, "Đã xảy ra lỗi !"));
            break;
    }
}
const getMessages = async (msgCode)=>{
    let result = Constants.MSG_NOT_FOUND_SERVICEITEM;
    if(msgCode.includes("UNF")){
        result= Constants.MSG_WRONG_USERNAME
    }else if(msgCode.includes("WOP")){
        result= Constants.MSG_WRONG_OLD_PASSWORD
    }else if(msgCode.includes("NPMD")){
        result= Constants.MSG_SIMILAR_OLD_PASSOWRD
    }
    return result;
}
export const axios_fetch_AboutUsDetails = () => {
    return dispatch => {
        return callApi("location/first", "GET", null).then(res => {
            if (res != null) {
                dispatch(Actions.actFetchAboutUsJson(res.data));
            }
        });
    };
};

export const axios_update_AboutUsDetails = async (info, dispatch) => {
    let res = await callApi("location", "POST", info, "ADMIN")
    if (res != null) {
        handleResponse(res, dispatch, Constants.UPDATE_ABOUT_US);
    }
};