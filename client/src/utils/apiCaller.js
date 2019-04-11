import axios from "axios";
import * as Config from "./../constants/Config";

export default function callApi(endpoint, method = "GET", body) {
  console.log("api caller");
  return axios({
    method: method,
    url: `api/${endpoint}`,
    data: body
  }).catch(err => {
    console.log(err);
  });
}
