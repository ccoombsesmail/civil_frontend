export const setLocalStorageDidJwt = (token) => {
  window.localStorage.setItem('did-jwt', token)
}

export const getLocalStorageDidJwt = () => {
  window.localStorage.getItem('did-jwt')
}

export const deleteLocalStorageDidJwt = () => {
  window.localStorage.removeItem('did-jwt')
}
