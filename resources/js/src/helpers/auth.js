import Axios from "../axios";
import decode from 'jwt-decode';
import qs from 'qs';
import { setAuthorization } from "./general";

let baseURL = '';

if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
  baseURL = 'http://localhost:8000'
}else{
  baseURL = 'http://planning.cldstorage.com'
} 

export function login(credentials, cb) {
    //console.log(credentials)
    return new Promise((res, rej) => {
        Axios.post(baseURL+'/api/login', qs.stringify(credentials.userDetails))
            .then((response) => {
                setAuthorization(response.data.accessToken);
                cb(response.data);
            })
            .catch((err) =>{
                cb(err);
            })
    })
}

export function registerACompany(payload, cb) {
    //console.log(payload)
    return new Promise((res, rej) => {
        Axios.post(baseURL+'/api/register', qs.stringify(payload.userDetails))
        .then((response) => {
          setAuthorization(response.data.accessToken);
          cb(response.data)
        })
        .catch((err) =>{
          cb(err)
        })
        
    })
}

export function resetPassword(payload, cb) {
    //console.log(payload)
    return new Promise((res, rej) => {
        Axios.post(baseURL+'/api/reset-password', qs.stringify(payload.userDetails))
        .then((response) => {
          setAuthorization(response.data.access_token);
          cb(response.data)
        })
        .catch((err) =>{
          cb(err)
        })
        
    })
}

export function forgetPassword(payload, cb) {
    //console.log(payload)
    return new Promise((res, rej) => {
        Axios.post(baseURL+'/api/forget-password', qs.stringify(payload.userDetails))
        .then((response) => {
          setAuthorization(response.data.access_token);
          cb(response.data)
        })
        .catch((err) =>{
          cb(err)
        })
        
    })
}


export function getLocalUser() {
    const userStr = localStorage.getItem("user");

    if(!userStr) {
        return null;
    }

    return JSON.parse(userStr);
}

export function getUserInfo(cb) {
  var tpayload = getTokenPayload()

  if(tpayload.picture == '' || tpayload.picture == 'users/default.png')
    tpayload.picture = LetterAvatar(tpayload.username,120)

  if(!tpayload.companylogo) tpayload.companylogo = LetterAvatar(tpayload.companyname,200)

  //console.log(tpayload)

  cb({
    company: tpayload.companyname?tpayload.companyname:'Demo Company',
    companylogo: tpayload.companylogo?tpayload.companylogo:'',
    user: tpayload.username?tpayload.username:'Demo User',
    isadmin: tpayload.isadmin?tpayload.isadmin:false,
    usertype: tpayload.usertype?tpayload.usertype:'Member',
    image: tpayload.picture?tpayload.picture:'users/default.png'
  })

  // console.log(getTokenPayload())
  // Axios.defaults.headers.common["Authorization"] = `Bearer ${getIdToken()}`
  // Axios.post(baseURL+'/api/my-company')
  //   .then((response) => {
  //       cb(response.data);
  //   })
  //   .catch((err) =>{
  //       cb(err);
  //   })
}
function getIdToken() {
  return localStorage.getItem('access_token');
}

export function getAccessToken() {
  return localStorage.getItem('access_token');
}

export function clearAccessToken() {
  localStorage.removeItem('access_token');
}

export function isLoggedIn() {

  const idToken = getIdToken();
 // console.log(idToken)
  return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  //console.log(expirationDate)
  return expirationDate < new Date();
}

export function getTokenPayload() {
  return JSON.parse(atob(getIdToken().split('.')[1]))
}

export function logout() {
  clearAccessToken();
}