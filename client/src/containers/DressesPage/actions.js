
import * as Types from './constants';

export const actFetchDressesListJson = (dressesList) => {
    return {
        type : Types.FETCH_DRESSESLIST,
        dressesList
    }
}