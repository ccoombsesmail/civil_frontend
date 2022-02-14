import { ADD_USER, UPDATE_USER } from '../../reducers/users/usersReducer'
import * as UsersApiUtil from '../../../api/v1/users/users_api_util'

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

export default {
  getUser,
}
