import axios from "axios";
import * as Config from "./../constants/Config";

export default function callApi(endpoint, method = "GET", body) {
  let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU1MzQ3MjM5OX0.8aGFjeRcyJnklIrq1aFdybRuuhsjwnKwpvoqz2lt08SGnow4rMQSRJa8C0iAylX05hRvd1gnMBcxGMpSsEOYVQ';
  var config = {
    headers: {'Authorization': "Bearer " + token}
};
  return axios({
    method: method,
    url: `/api/${endpoint}`,
    data: body,
    config
  }).catch(err => {
    console.log(err);
  });
}
