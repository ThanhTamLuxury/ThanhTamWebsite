
import * as Types from './constants';

export const actFetchVideosListJson = (videosList) => {
    return {
        type : Types.FETCH_VIDEOSLIST,
        videosList
    }
}