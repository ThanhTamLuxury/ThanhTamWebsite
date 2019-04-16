import axios from "axios";

export default function  callApi(endpoint, method = "GET", body, callKey) {
  let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU1Nzc2OTMxMn0.x2CoG6t_lMLsSdM6bLdgv9DDfkDDPy9mdmmL5Xw0B6W-6Is4OXHjlLCQ2_QKr9lwF913Lfzto_ryTscoYZX5Jw';
  let headers = {}
  if(callKey === 'ADMIN'){
    headers= { 'Authorization': "Bearer " + token }
  }else if(callKey ==='UPLOAD'){
    headers= { 'Authorization': "Bearer " + token, 'Content-Type': 'multipart/form-data' }
  }else if(callKey === 'LOGIN'){
    headers= { 'Content-Type': 'application/json' }
  }
  return axios({
    method: method,
    url: `/api/${endpoint}`,
    data: body,
    headers: headers
  }).catch(err => {
    console.log(err);
  });
}
