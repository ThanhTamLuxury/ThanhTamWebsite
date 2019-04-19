
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

