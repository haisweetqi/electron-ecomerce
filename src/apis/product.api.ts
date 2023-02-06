import { URL_GET_PRODUCTS, URL_GET_PRODUCTS_DETAIL } from '../constants/url'

import apiService from '../services'

export const productService = {
  /* Calling the apiService.get method and passing in the URL_GETPRODUCTS constant. */
  getProducts() {
    return apiService.get(URL_GET_PRODUCTS)
  },

  getProductsDetails(id: any) {
    return apiService.get(`${URL_GET_PRODUCTS_DETAIL}/${id}`)
  }
}
