import http from "./httpService"
import {api} from "../config.json"


const apiEndpoint = api + '/users/login'

export function login(email, password){
    return http.post(apiEndpoint, {
        email, password
    })
}