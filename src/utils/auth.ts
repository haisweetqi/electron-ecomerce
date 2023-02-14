export const LocalStorageEventTarget = new EventTarget()
/**
 * It takes in a string, and sets it to the local storage
 * @param {string} access_token - The access token that you received from the server.
 */
export const setAccessTokenToLS = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}

/**
 * It takes a string as an argument and sets it to the local storage
 * @param {string} refresh_token - The refresh token that was returned from the server.
 */
export const setRefreshTokenToLS = (refresh_token: string) => {
  localStorage.setItem('refresh_token', refresh_token)
}

/**
 * Get the access token from local storage, or return an empty string if it doesn't exist.
 */
export const getAccessTokenFromLS = () => localStorage.getItem('access_token') || ''

/**
 * It returns the refresh token from local storage, or an empty string if it doesn't exist
 */
export const getRefreshTokenFromLS = () => localStorage.getItem('refresh_token') || ''

/**
 * It gets the profile from localStorage, and if it exists, it returns the parsed JSON, otherwise it
 * returns null
 * @returns The result of the localStorage.getItem('profile') method.
 */
export const getProfileFromLS = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}

/**
 * It takes a profile object, converts it to a string, and saves it to local storage
 * @param {any} profile - any - this is the profile object that we get from Auth0.
 */
export const setProfileToLS = (profile: any) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
export const clearLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('profile')
  localStorage.removeItem('totalAmount')
  const clearLSEvent = new Event('clearLS')
  LocalStorageEventTarget.dispatchEvent(clearLSEvent)
}

export const getCartToLS = () => {
  const result = localStorage.getItem('cart') || ''
  return result ? JSON.parse(result) : []
}

export const setCartToLS = (cart: any) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const setTotalAmountToLS = (totalAmount: any) => {
  localStorage.setItem('totalAmount', JSON.stringify(totalAmount))
}

export const getTotalAmountToLS = () => {
  const result = localStorage.getItem('totalAmount') || ''
  return result ? JSON.parse(result) : ''
}
