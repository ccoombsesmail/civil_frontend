// action creator is just a function that dispatches an action
import { toast } from 'react-toastify'
import { closeModal, openModal } from '../ui/index'
import {
  ADD_SESSION_DATA_CLERK, ADD_SESSION_DATA_BACKEND, LOG_OUT, UPDATE, ADD_SESSION_DATA_DID,
} from '../../reducers/sessionReducer'
import * as SessionApiUtil from '../../../api/v1/session/session_api_util'
import * as UsersApiUtl from '../../../api/v1/users/users_api_util'
import { errorFormatter } from '../../utils/errorFormatter'
import { CREATE_TAG_FORM } from '../../../pages/App/Modal/Index'
import { OPEN_MODAL } from '../../reducers/ui_reducer'

const logoutActionCreator = () => ({
  type: LOG_OUT,
})

export const addUserActionCreatorClerk = (userData) => ({
  type: ADD_SESSION_DATA_CLERK,
  payload: userData,
})

const addUserActionCreatorBackend = (userData) => ({
  type: ADD_SESSION_DATA_BACKEND,
  payload: userData,
})

const addSessionDataDID = (didData) => ({
  type: ADD_SESSION_DATA_DID,
  payload: didData,
})

const updateActionCreator = (data) => ({
  type: UPDATE,
  payload: data,
})

export const signIn = (userData) => (dispatch) => SessionApiUtil.signIn(userData)
  .then((res) => dispatch(addUserActionCreatorBackend(JSON.parse(res.data).token)))
  .then(() => dispatch(closeModal()))
  .catch((error) => toast.error(errorFormatter(error)))

export const getCurrentUser = (userId) => (dispatch) => UsersApiUtl.getUser(userId)
  .then((res) => {
    if (!res.data.tag) {
      dispatch({
        type: OPEN_MODAL,
        payload: { modalType: CREATE_TAG_FORM, modalProps: { userId } },
      })
    }
    return dispatch(addUserActionCreatorBackend(res.data))
  })
  .catch((error) => toast.error(errorFormatter(error)))

export const logout = () => (dispatch) => {
  dispatch(logoutActionCreator())
}

export const addDIDSession = (didData) => (dispatch) => {
  dispatch(addSessionDataDID(didData))
}

export const updateUserIcon = (userData) => (dispatch) => SessionApiUtil.updateUserIcon(userData)
  .then((res) => dispatch(updateActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

const uploadUserIcon = (dta, username) => (dispatch) => SessionApiUtil.uploadUserIcon(dta, username)
  .then((res) => dispatch(updateActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export default {
  logout,
  getCurrentUser,
  signIn,
  updateUserIcon,
  uploadUserIcon,
  addDIDSession,
}

// create a central index.js file

// bind provides the dispatch function to the action creators (it's a shortcut!)
