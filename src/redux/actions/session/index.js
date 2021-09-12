// action creator is just a function that dispatches an action
import { closeModal } from '../ui/index'
import { LOGIN, LOG_OUT } from '../../reducers/sessionReducer'
import * as SessionApiUtil from '../../../api/v1/session/session_api_util'

const logoutActionCreator = () => ({
  type: LOG_OUT,
})

const loginActionCreator = (userData) => ({
  type: LOGIN,
  payload: userData,
})

export const signIn = (userData) => (dispatch) => SessionApiUtil.signIn(userData)
  .then((res) => dispatch(loginActionCreator(JSON.parse(res.data).token)))
  .then(() => dispatch(closeModal()))

export const signUp = (userData) => (dispatch) => SessionApiUtil.signUp(userData)
  .then((res) => dispatch(loginActionCreator(res.data)))
  .then(() => dispatch(closeModal()))

export const logout = () => (dispatch) => {
  dispatch(logoutActionCreator())
}

export default {
  logout,
  signUp,
  signIn,
}

// create a central index.js file

// bind provides the dispatch function to the action creators (it's a shortcut!)
