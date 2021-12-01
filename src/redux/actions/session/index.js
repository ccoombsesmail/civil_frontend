// action creator is just a function that dispatches an action
import { closeModal } from '../ui/index'
import { ADD_SESSION, LOG_OUT, UPDATE } from '../../reducers/sessionReducer'
import * as SessionApiUtil from '../../../api/v1/session/session_api_util'
import * as UsersApiUtl from '../../../api/v1/users/users_api_util'

const logoutActionCreator = () => ({
  type: LOG_OUT,
})

const addUserActionCreator = (userData) => ({
  type: ADD_SESSION,
  payload: userData,
})

const updateActionCreator = (data) => ({
  type: UPDATE,
  payload: data,
})

export const signIn = (userData) => (dispatch) => SessionApiUtil.signIn(userData)
  .then((res) => dispatch(addUserActionCreator(JSON.parse(res.data).token)))
  .then(() => dispatch(closeModal()))

export const getCurrentUser = (userId) => (dispatch) => UsersApiUtl.getUser(userId)
  .then((res) => dispatch(addUserActionCreator(res.data)))

export const logout = () => (dispatch) => {
  dispatch(logoutActionCreator())
}

export const updateUserIcon = (userData) => (dispatch) => SessionApiUtil.updateUserIcon(userData)
  .then((res) => dispatch(updateActionCreator(res.data)))

const uploadUserIcon = (dta, username) => (dispatch) => SessionApiUtil.uploadUserIcon(dta, username)
  .then((res) => dispatch(updateActionCreator(res.data)))

export default {
  logout,
  getCurrentUser,
  signIn,
  updateUserIcon,
  uploadUserIcon,
}

// create a central index.js file

// bind provides the dispatch function to the action creators (it's a shortcut!)
