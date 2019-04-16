
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
export const actFetchServiceByID = (serviceItem) => {
    return {
        type : Types.FETCH_SERVICEBYID,
        serviceItem
    }
}

