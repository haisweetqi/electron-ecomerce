import { URL_PAYMENT } from '../constants/url'

import apiService from '../services'

export const paymentService = {
  payment(params: any) {
    return apiService.post(URL_PAYMENT, params)
  }
}
