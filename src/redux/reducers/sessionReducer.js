/* eslint-disable max-len */
import { setAuthToken } from '../../api/util/auth'

export const ADD_SESSION_DATA_BACKEND = 'ADD_SESSION_DATA_BACKEND'
export const ADD_SESSION_DATA_CLERK = 'ADD_SESSION_DATA_CLERK'
export const ADD_SESSION_DATA_DID = 'ADD_SESSION_DATA_DID'

export const LOG_OUT = 'LOG_OUT'
export const UPDATE_SESSION = 'UPDATE_SESSION'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_SESSION_DATA_BACKEND:
      return { ...state, currentUser: { ...state.currentUser, ...action.payload } }
    case ADD_SESSION_DATA_CLERK:
      return { ...state, currentUser: { ...state.currentUser, ...action.payload } }
    case ADD_SESSION_DATA_DID:
      return {
        ...state,
        currentUser: {
          ...action.payload,
          ...state.currentUser,
          username: action.payload.username,
          id: action.payload.did?.repr || action.payload.userId,
        },
      }
    case LOG_OUT:
      localStorage.setItem('jwt', null)
      setAuthToken(null)
      return { ...state, currentUser: null }
    case UPDATE_SESSION:
      return { ...state, currentUser: action.payload }
    default:
      return state
  }
}

export default reducer
