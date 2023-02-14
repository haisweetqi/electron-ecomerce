import { URL_PAYMENT } from '../constants/url'

import apiService from '../services'

export const paymentService = {
  payment(params: any) {
    const { dataCheckout } = params
    return apiService.post(URL_PAYMENT, dataCheckout)
  }
}
