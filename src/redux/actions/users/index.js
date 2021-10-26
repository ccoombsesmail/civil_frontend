import { ADD_USER } from '../../reducers/users/usersReducer'
import * as UsersApiUtil from '../../../api/v1/users/users_api_util'

const addUserActionCreator = (data) => ({
  type: ADD_USER,
  payload: data,
})

const getUser = (userId) => (dispatch) => UsersApiUtil.getUser(userId)
  .then((res) => dispatch(addUserActionCreator(res.data)))

export default {
  getUser,
}
