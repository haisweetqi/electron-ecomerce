import { URL_GET_ORDER } from '../constants/url'

import apiService from '../services'

export const userService = {
  /* Calling the apiService.get method and passing in the URL_GETPRODUCTS constant. */
  getUserAccount() {
    return apiService.get(`${URL_GET_ORDER}`)
  }
}
