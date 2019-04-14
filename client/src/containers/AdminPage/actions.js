
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

export const onCheckPriceDetail = (id) => {
    return {
        type : Types.ON_VIEW_PRICE,
        serviceID:id
    }
}