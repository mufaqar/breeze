import axios from "axios";
import { getToken } from "./tokens";

export const BASE_URL = "";

// api get request method
export const apiGetRequest = (endpoint,token=null,props={}) => 
    ApiRequest("GET",endpoint,token,props);

// api post request method
export const apiPostRequest = (endpoint, payload, token=null) =>
    ApiRequest("POST", endpoint, token, {data:payload});

// api patch rrequest method
export const apiPatchRequest = (endpoint,payload,token=null) => 
    ApiRequest("PATCH",endpoint,token,{data:payload})

// api put request method 
export const apiPutRequest = (endpoint, payload, token=null) =>
    ApiRequest("PUT",endpoint,token,{data:payload})

// api delete request metthod
export const apiDeleteRequest = (endpoint, token, props={}) => 
    ApiRequest("DELETE", endpoint,token, props)


// api request for all mmethod
export const ApiRequest = (method,endpoint,token, props) => {
    if (!token) {
        token = getToken()
    };

    const parms = {
        method,
        baseURL:BASE_URL,
        url:endpoint,
        parms:(method === "GET" || method === "DELETE") ? props:undefined,
        headers:{
            Accept:"application/json",
            "content-type":"application/json"
        }
    }
    Object.assign(parms, props);
    if(token) {
        parms.headers.Authorization = `Bearer ${token}`
    }
    return axios(parms)
}