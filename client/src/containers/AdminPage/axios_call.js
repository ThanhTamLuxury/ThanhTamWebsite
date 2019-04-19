import * as Actions from './actions';
import callApi from '../../utils/apiCaller';

// Fetch
export const axios_fetch_services = (serviceType, page, size) => {
    return dispatch => {
        //server start from 0 but client start from 1. Substract 1
        if(page > 0){
            page --;
        }
        return callApi(`service/all/outside-page?serviceType=${serviceType}&page=${page}&size=${size}`, 'GET', null, 'ADMIN').then(res => {
            if (res != null) {
                dispatch(Actions.actFetchServies(res.data));
            }
        });
    };
}
// Fetch
export const axios_fetch_serviceByID = (id) => {
    return dispatch => {
        return callApi(`service/${id}`, 'GET', null, 'ADMIN').then(res => {
            if (res != null) {
                dispatch(Actions.actFetchServiceByID(res.data));
            }
        });
    };
}

export const axios_add_update_with_file_service = async (service, serviceType, files, file, dispatch, isUpdate) => {
    const result = await callApi(`upload/uploadMultipleFiles`, 'POST', files, 'UPLOAD');
    let resImage = result.data;
    let imagesPath = [];
    if (resImage) {
        imagesPath = resImage.map((res, index) => ({
            path: res.fileDownloadUri
        }));
        service = {
            ...service, imageItems: imagesPath
        }
        const res = await callApi(`upload/uploadFile`, 'POST', file, 'UPLOAD')
        let mainImage = res.data;
        if (mainImage) {
            let mainImagePath = mainImage.fileDownloadUri;
            let filesStatus = [];
            resImage.map(item => {
                filesStatus.push(item);
            })
            filesStatus.push(mainImage);
            service = {
                ...service, imageItems: imagesPath, mainImage: mainImagePath
            }
            if (!isUpdate) {
                const finalResult = await callApi(`service/${serviceType}`, 'POST', service, 'ADMIN')
                if (finalResult) {
                    dispatch(Actions.actOnAddService(finalResult, filesStatus));
                }
            } else {
                const finalResult = await callApi(`service/${serviceType}`, 'PUT', service, 'ADMIN')
                if (finalResult) {
                    dispatch(Actions.actOnUpdateService(finalResult, filesStatus));
                }
            }

        };
    }
}

export const axios_add_update_service = async (service, serviceType, isUpdate, dispatch) => {
    if (!isUpdate) {
        const finalResult = await callApi(`service/${serviceType}`, 'POST', service, 'ADMIN')
        if (finalResult) {
            dispatch(Actions.actOnAddService(finalResult, []));
        }
    } else {
        const finalResult = await callApi(`service/${serviceType}`, 'PUT', service, 'ADMIN')
        if (finalResult) {
            dispatch(Actions.actOnUpdateService(finalResult, []));
        }
    }
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
export const axios_upload_file = (file) => {
    // return (dispatch) => {
    // let res = callApi(`upload/uploadFile`, 'POST', file, 'UPLOAD');
    // if (res != null) {
    //      dispatch(Actions.uploadFile(res.data));
    // }
    // return callApi(`upload/uploadFile`, 'POST', file, 'UPLOAD').then(res => {
    //     if (res != null) {
    //         // dispatch(Actions.uploadFile(res.data));
    //         return res.data;

    //     }
    // });
    // };
}
export const axios_upload_multipleFiles = (files) => {
    return dispatch => {
        return callApi(`upload/uploadMultipleFiles`, 'POST', files, 'UPLOAD').then(res => {
            if (res != null) {
                console.log(res);
                dispatch(Actions.uploadMultipleFiles(res.data));
            }
        });
    };
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

export const login = async (username, password,dispatch) => {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: 
    // };
    const response = await callApi(`/login`, 'POST', JSON.stringify({ username, password }), 'LOGIN')
    if (response) {
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                localStorage.setItem('USER', JSON.stringify(response));
            }
        }
        dispatch(Actions.logIn(response));
    }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}