import { toast } from 'react-toastify'
import { ADD_USER, UPDATE_USER } from '../../reducers/users/usersReducer'
import * as UsersApiUtil from '../../../api/v1/users/users_api_util'
import { errorFormatter } from '../../utils/errorFormatter'
import { updateSessionActionCreator } from '../session/index'

const addUserActionCreator = (data) => ({
  type: ADD_USER,
  payload: data,
})

export const updateUserActionCreator = (data) => ({
  type: UPDATE_USER,
  payload: data,
})

const getUser = (userId, requesterId) => (dispatch) => UsersApiUtil.getUser(userId, requesterId)
  .then((res) => dispatch(addUserActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

const upsertDidUser = (didUserData) => (dispatch) => UsersApiUtil.upsertDidUser(didUserData)
  .then((res) => dispatch(addUserActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

const createUserTag = (tag) => (dispatch) => UsersApiUtil.createUserTag(tag)
  .then((res) => dispatch(updateSessionActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

const updateUserBioInformation = (userId, bio, experience) => (dispatch) => UsersApiUtil
  .updateUserBioInformation(userId, bio, experience)
  .then((res) => dispatch(addUserActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export default {
  getUser,
  upsertDidUser,
  createUserTag,
  updateUserBioInformation,
}
