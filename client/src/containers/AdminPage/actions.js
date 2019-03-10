
import * as Types from './constants';

export const actFetchServices = (listServies) => {
    return {
        type : Types.FETCH_SERVICES,
        listServies  
    }
}