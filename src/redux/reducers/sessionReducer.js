import { setAuthToken } from '../../api/util/auth'

export const ADD_SESSION = 'ADD_SESSION'
export const LOG_OUT = 'LOG_OUT'
export const UPDATE = 'UPDATE'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_SESSION:
      return { ...state, currentUser: action.payload }
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
