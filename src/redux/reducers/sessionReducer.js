import jwtDecode from 'jwt-decode'
import { setAuthToken } from '../../api/util/auth'

export const LOGIN = 'LOGIN'
export const LOG_OUT = 'LOG_OUT'
export const UPDATE = 'UPDATE'

const reducer = (state = {}, action) => {
  const token = action.payload
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('jwt', JSON.stringify(token))
      setAuthToken(JSON.stringify(token))
      return { ...state, currentUser: jwtDecode(token) }
    case LOG_OUT:
      localStorage.setItem('jwt', null)
      setAuthToken(null)
      return { ...state, currentUser: null }
    case UPDATE:
      return { ...state, currentUser: action.payload }
    default:
      return state
  }
}

export default reducer
