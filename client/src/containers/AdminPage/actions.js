
import * as Types from '../constants';

export const actFetchServies = (servicesResponse) => {
    return {
        type : Types.FETCH_SERVICES,
        servicesResponse
    }
}
export const actFetchServiceByID = (serviceItem) => {
    return {
        type : Types.FETCH_SERVICEBYID,
        serviceItem
    }
}

export const actChangeMenu = (serviceType,tabCode) => {
    return {
        type : Types.ON_CHANGE_MENU,
        tabCode:tabCode,
        serviceType:serviceType
    }
}
export const onOpenAddNewForm = () => {
    return {
        type : Types.ON_ADDNEW
    }
}

export const onEditItem = (id) => {
    return {
        type : Types.ON_EDIT,
        serviceID:id
    }
}
export const onDelete = () => {
    return {
        type : Types.DELETE_SERVICES
    }
}
export const onCheckPriceDetail = (id) => {
    return {
        type : Types.ON_VIEW_PRICE,
        serviceID:id
    }
}

export const actOnUpdateService = (response,filesStatus) => {
    return {
        type : Types.UPDATE_SERVICE,
        response:response,
        filesStatus:filesStatus,
    }
}

export const actUploadSuccess = (response) => {
    return {
        type : Types.UPLOAD_SUCCESS,
        response:response,
    }
}
export const actOnAddService = (response,filesStatus) => {
    return {
        type : Types.ADD_SERVICE,
        response:response,
        filesStatus:filesStatus,
    }
}


export const uploadFile = (response) => {
    return {
        type : Types.UPLOAD_FILE,
        response:response
    }
}
export const uploadMultipleFiles = (response) => {
    return {
        type : Types.UPLOAD_MULTIPLE_FILES,
        response:response
    }
}
export const actFetchAboutUsJson = (aboutUsDetails) => {
    return {
        type : Types.FETCH_ABOUTUS,
        aboutUsDetails
    }
}

export const reset = () => {
    return {
        type : Types.PAGE_RESET
    }
}

export const onLoading = (isLoading) => {
    return {
        type : Types.PAGE_LOADING,
        isLoading:isLoading
    }
}
export const onAdding = (isAdding) => {
    return {
        type : Types.PAGE_LOADING,
        isAdding:isAdding
    }
}
export const onUpdate = (isUpdate) => {
    return {
        type : Types.PAGE_LOADING,
        isUpdate:isUpdate
    }
}

export const onDoingAction = (type,isDoing) => {
    return {
        type : type,
        isDoing:isDoing
    }
}
export const logOut = () => {
    return {
        type : Types.LOG_OUT
    }
}
export const logIn = (user) => {
    return {
        type : Types.LOG_IN,
        user:user
    }
}

// Response 
export const is2xx = (action,resonse) => {
    return {
        response:resonse,
        type : action,
        statusCode:200
    }
}

// Response 
export const isNot2xx = (statusCode,msg) => {
    return {
        type : Types.RES_NOT_2xx,
        statusCode:statusCode,
        msg:msg
    }
}
