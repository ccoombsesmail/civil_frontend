/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import { addUser } from './index'

export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'

const reducerActionMap = new Map([
  [ADD_USER, addUser],
  [UPDATE_USER, addUser],
])

const reducer = (state = {}, action) => {
  if (!reducerActionMap.has(action.type)) return state
  return reducerActionMap.get(action.type)(action, state)
}

export default reducer
