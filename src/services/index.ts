import axios from 'axios'

/* Creating a new instance of axios with the baseURL, headers and timeout. */
const apiConfig = axios.create({
  baseURL: process.env.BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 1000
})

/* Intercepting the request and doing something before the request is sent. */
apiConfig.interceptors.request.use(
  function (config) {
    // Do something before request is sent
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
  get(urlApi: string) {
    return apiConfig
      .get(urlApi)
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
