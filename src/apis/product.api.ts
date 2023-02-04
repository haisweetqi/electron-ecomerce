import { URL_GET_PRODUCTS } from '../constants/url'
import apiService from '../services'

export const productService = {
  /* Calling the apiService.get method and passing in the URL_GETPRODUCTS constant. */
  getProducts() {
    return apiService.get(URL_GET_PRODUCTS)
  },
  /**
   * It returns the product details of the product with the given id
   * @param {string} id - The id of the product you want to get details for.
   * @returns The product details
   */
  getProductsDetails(id: string) {
    return apiService.get(`${URL_GET_PRODUCTS}/${id}`)
  }
}
