
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

// Response 
export const is2xx = (action,response) => {
    return {
        response:response,
        type : action,
        statusCode:200
    }
}

// Response 
export const isNot2xx = (statusCode,messages) => {
    return {
        type : Types.RES_NOT_2xx,
        statusCode:statusCode,
        messages:messages
    }
}
export const reset = () => {
    return {
        type : Types.PAGE_RESET
    }
}