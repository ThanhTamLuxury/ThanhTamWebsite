import * as Actions from "./actions";
import callApi from "../../utils/apiCaller";

// TOTO : CHANGE TO CALL API WITH SERVICESTYPE

// Fetch
export const axios_fetch_MenusItems = () => {
  return dispatch => {
    return callApi("menus_json", "GET", null).then(res => {
      dispatch(Actions.actFetchMenuItemsJson(res.data));
    });
  };
};
export const axios_fetch_Sliders = () => {
  return dispatch => {
    return callApi("sliders_json", "GET", null).then(res => {
      console.log(res.data);
      dispatch(Actions.actFetchSlidersJson(res.data));
    });
  };
};
export const axios_fetch_TopAlbums = () => {
  return dispatch => {
    return callApi("service/top?serviceType=ALBUM", "GET", null).then(res => {
      console.log(res.data);
      dispatch(Actions.actFetchTopAlbumsJson(res.data));
    });
  };
};

export const axios_fetch_TopVideos = () => {
  return dispatch => {
    return callApi("top_videos_json", "GET", null).then(res => {
      dispatch(Actions.actFetchTopVideosJson(res.data));
    });
  };
};

export const axios_fetch_TopDresses = () => {
  return dispatch => {
    return callApi("top_dresses_json", "GET", null).then(res => {
      dispatch(Actions.actFetchTopDressesJson(res.data));
    });
  };
};

export const axios_fetch_AboutUsDetails = () => {
  return dispatch => {
    return callApi("about_us_json", "GET", null).then(res => {
      dispatch(Actions.actFetchAboutUsJson(res.data));
    });
  };
};
