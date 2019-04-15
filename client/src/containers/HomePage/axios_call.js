import * as Actions from "./actions";
import callApi from "../../utils/apiCaller";

// TOTO : CHANGE TO CALL API WITH SERVICESTYPE

// Fetch
export const axios_fetch_Sliders = () => {
  return dispatch => {
    return callApi("banner", "GET", null).then(res => {
      if (res != null) {
        dispatch(Actions.actFetchSlidersJson(res.data));
      }
    });
  };
};
export const axios_fetch_TopAlbums = () => {
  return dispatch => {
    return callApi("service/top?serviceType=ALBUM", "GET", null).then(res => {
      if (res != null) {
        dispatch(Actions.actFetchTopAlbumsJson(res.data));
      }
    });
  };
};

export const axios_fetch_TopVideos = () => {
  return dispatch => {
    return callApi("service/top?serviceType=WEDDING_VIDEO", "GET", null).then(res => {
      if (res != null) {
        dispatch(Actions.actFetchTopVideosJson(res.data));
      }
    });
  };
};

export const axios_fetch_TopDresses = () => {
  return dispatch => {
    return callApi("service/top?serviceType=WEDDING_DRESS", "GET", null).then(res => {
      if (res != null) {
        dispatch(Actions.actFetchTopDressesJson(res.data));
      }
    });
  };
};

export const axios_fetch_AboutUsDetails = () => {
  return dispatch => {
    return callApi("location", "GET", null).then(res => {
      if (res != null) {
        dispatch(Actions.actFetchAboutUsJson(res.data));
      }
    });
  };
};
