
import * as Types from './constants';

export const actFetchServies = (servicesResponse) => {
    return {
        type : Types.FETCH_SERVICES,
        servicesResponse
    }
}
export const actFetchPriceServies = (servicesResponse) => {
    return {
        type : Types.FETCH_PRICE_SERVICES,
        servicesResponse
    } 
}
export const onLoading = (isLoading) => {
    return {
        type : Types.PAGE_LOADING,
        isLoading:isLoading
    }
}
export const actFetchServiceByID = (serviceItem) => {
    return {
        type : Types.FETCH_SERVICEBYID,
        serviceItem
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
