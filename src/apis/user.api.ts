import { URL_GET_ORDER, URL_GET_ORDER_DETAIL, URL_USER_ACCOUNT } from '../constants/url'

import apiService from '../services'

export const userService = {
  /* Calling the apiService.get method and passing in the URL_GETPRODUCTS constant. */
  getUserAccount() {
    return apiService.get(`${URL_USER_ACCOUNT}`)
  },

  getUserOrder() {
    return apiService.get(`${URL_GET_ORDER}`)
  },

  getUserOrderDetails(id: any) {
    return apiService.get(`${URL_GET_ORDER_DETAIL}/${id}`)
  }
}
