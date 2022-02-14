import { addAllFollowed, addAllFollowers } from './index'

export const ADD_FOLLOW = 'ADD_FOLLOW'
export const ADD_ALL_FOLLOWERS = 'ADD_ALL_FOLLOWERS'
export const ADD_ALL_FOLLOWED = 'ADD_ALL_FOLLOWED'

const reducerActionMap = new Map([
  [ADD_ALL_FOLLOWERS, addAllFollowers],
  [ADD_ALL_FOLLOWED, addAllFollowed],
])

const reducer = (state = { followers: [], followed: [] }, action) => {
  if (!reducerActionMap.has(action.type)) return state
  return reducerActionMap.get(action.type)(action, state)
}

export default reducer
