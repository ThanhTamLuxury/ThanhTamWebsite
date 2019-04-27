import * as Actions from './actions';
import callApi from '../../utils/apiCaller';

// Fetch
export const axios_fetch_services = (serviceType, page, size) => {
    return dispatch => {
        //server start from 0 but client start from 1. Substract 1
        if (page > 0) {
            page--;
        }
        return callApi(`service/all/outside-page?serviceType=${serviceType}&page=${page}&size=${size}`, 'GET', null, 'ADMIN').then(res => {
            if (res != null) {
                dispatch(Actions.actFetchServies(res.data));
            }
        });
    };
}
export const axios_search_services = (searchValue,serviceType, page, size) => {
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
    let resImage = null;
    let mainImage = null;
    let imagesPath = [];
    let filesStatus = [];
    let mainImagePath = null;
    if (files.entries().next().value) {
        const result = await callApi(`upload/uploadMultipleFiles`, 'POST', files, 'UPLOAD');
        resImage = result.data;
        if (resImage) {
            resImage.map((res) =>{
                service.imageItems.push({
                    id:null,
                    path : res.fileDownloadUri
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
    } else if(!isUpdate) {
        service = {
            ...service, mainImage: 'defaultMainImage.jpg'
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

export const axios_add_update_service = async (service, serviceType,dispatch,isUpdate) => {
    if (!isUpdate) {
        const finalResult = await callApi(`service/${serviceType}`, 'POST', service, 'ADMIN')
        if (finalResult) {
            dispatch(Actions.actOnAddService(finalResult, []));
        }
    } else {
        const finalResult = await callApi(`service/${service.id}`, 'PUT', service, 'ADMIN')
        if (finalResult) {
            dispatch(Actions.actOnUpdateService(finalResult, []));
        }
    }
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('USER');
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
export const axios_delete_services = (idArr) => {
    return dispatch => {
        return callApi(`service`, 'DELETE', idArr, 'ADMIN').then(res => {
            if (res != null) {
                dispatch(Actions.onDelete('SUCCESS'));
            }
        });
    };
}
export const login = async (username, password, redirect, dispatch) => {
    const response = await callApi(`/login`, 'POST', JSON.stringify({ username, password }), 'LOGIN')
    if (response) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
        }
        else if (response.status === 200) {
            localStorage.setItem('USER', response.headers.authorization);
            redirect();
        }
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
export const axios_fetch_AboutUsDetails = () => {
    return dispatch => {
      return callApi("location/first", "GET", null).then(res => {
        if (res != null) {
          dispatch(Actions.actFetchAboutUsJson(res.data));
        }
      });
    };
  };
  