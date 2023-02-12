import { URL_GET_CATEGORY } from '../constants/url'
import apiService from '../services'

export const categoryService = {
  /* Calling the apiService.get method and passing in the URL_GETPRODUCTS constant. */
  getCategory() {
    return apiService.get(`${URL_GET_CATEGORY}`)
  }
}
