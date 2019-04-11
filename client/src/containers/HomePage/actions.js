
import * as Types from './constants';


export const actFetchSlidersJson = (sliderItems) => {
    return {
        type : Types.FETCH_SLIDER,
        sliderItems
    }
}
export const actFetchTopAlbumsJson = (topAlbums) => {
    return {
        type : Types.FETCH_TOPALBUMS,
        topAlbums
    }
}
export const actFetchTopVideosJson = (topVideos) => {
    return {
        type : Types.FETCH_TOPVIEOS,
        topVideos
    }
}

export const actFetchTopDressesJson = (topDresses) => {
    return {
        type : Types.FETCH_TOPDRESSES,
        topDresses
    }
}


export const actFetchAboutUsJson = (aboutUsDetails) => {
    return {
        type : Types.FETCH_ABOUTUS,
        aboutUsDetails
    }
}