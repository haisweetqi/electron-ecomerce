import apiService from '../services'
import { URL_LOGOUT, URL_REGISTER, URL_LOGIN } from '../constants/url'

export const authApi = {
  /* A function that takes an object with two properties, email and password, and returns the result of
  the apiService.post function. */
  register(params: { email: string; password: string }) {
    return apiService.post(URL_REGISTER, params)
  },
  /* A function that takes an object with two properties, email and password, and returns the result of
    the apiService.post function. */
  login(params: { email: string; password: string }) {
    return apiService.post(URL_LOGIN, params)
  },
  /**
   * It returns a promise that will resolve to the response of the POST request to the URL_LOGOUT
   * endpoint
   * @returns The return value is a promise.
   */
  logout() {
    return apiService.get(URL_LOGOUT)
  }
}
