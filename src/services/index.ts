import axios from 'axios'
import {
  clearLS,
  getAccessTokenFromLS,
  getRefreshTokenFromLS,
  setAccessTokenToLS,
  setProfileToLS
} from './../utils/auth'
import { URL_LOGIN, URL_LOGOUT, URL_REGISTER } from './../constants/url'

/* Creating a new instance of axios with the baseURL, headers and timeout. */
const apiConfig = axios.create({
  baseURL: 'http://hung.fresher.ameladev.click/',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000
})

/* Intercepting the request and doing something before the request is sent. */
apiConfig.interceptors.request.use(
  function (config) {
    let accessToken = getAccessTokenFromLS()

    // let refreshToken = getRefreshTokenFromLS()
    // Do something before request is sent
    if (accessToken && config.headers) {
      config.headers.authorization = `Bearer ${accessToken}`
      return config
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
/* Intercepting the response and doing something before the response is sent. */
apiConfig.interceptors.response.use(
  function (response) {
    let accessToken = getAccessTokenFromLS()
    // let refreshToken = getRefreshTokenFromLS()
    const { url } = response.config

    if (url === URL_LOGIN || url === URL_REGISTER) {
      const data = response.data
      accessToken = data.authorisation.token
      //   refreshToken = data.data.refresh_token
      setAccessTokenToLS(accessToken)
      //   setRefreshTokenToLS(refreshToken)
      setProfileToLS(data.user)
    } else if (url === URL_LOGOUT) {
      //   accessToken = ''
      //   refreshToken = ''
      clearLS()
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

const apiService = {
  /* A function that is using the axios post method to send a request to the server. */
  post(urlApi: string, params?: any) {
    return apiConfig
      .post(urlApi, params)
      .then((response) => response)
      .catch((error) => {
        throw error
      })
  },
  /* A function that is using the axios patch method to send a request to the server. */
  patch(urlApi: string, params?: any) {
    return apiConfig
      .patch(urlApi, params)
      .then((response) => response)
      .catch((error) => {
        throw error
      })
  },
  /* A function that is making a put request to the urlApi and passing in the params. */
  put(urlApi: string, params?: any) {
    return apiConfig
      .put(urlApi, params)
      .then((response) => response)
      .catch((error) => {
        throw error
      })
  },
  /* Making a get request to the urlApi and passing in the params. */
  get(urlApi: string, params?: any) {
    return apiConfig
      .get(urlApi, params)
      .then((response) => response)
      .catch((error) => {
        throw error
      })
  },
  /**
   * The delete function takes a urlApi as a parameter and returns a promise that either resolves to a
   * response or rejects with an error
   * @param {string} urlApi - The URL of the API endpoint.
   * @returns The response from the API.
   */
  delete(urlApi: string) {
    return apiConfig
      .delete(urlApi)
      .then((response) => response)
      .catch((error) => {
        throw error
      })
  }
}

export default apiService
