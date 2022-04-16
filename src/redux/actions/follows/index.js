/* eslint-disable max-len */
import { toast } from 'react-toastify'
import { ADD_ALL_FOLLOWERS, ADD_ALL_FOLLOWED } from '../../reducers/follows/followsReducer'
import * as FollowsApiUtil from '../../../api/v1/follows/follows_api_util'
import { updateUserActionCreator } from '../users'

const addAllFollowersActionCreator = (followers) => ({
  type: ADD_ALL_FOLLOWERS,
  payload: followers,
})

const addAllFollowedActionCreator = (followed) => ({
  type: ADD_ALL_FOLLOWED,
  payload: followed,
})

export const addNewFollow = (userId, followerId) => (dispatch) => FollowsApiUtil.addNewFollow(userId, followerId)
  .then((res) => dispatch(updateUserActionCreator(res.data)))
  .catch((error) => toast.error(error))

export const removeFollow = (userId, followerId) => (dispatch) => FollowsApiUtil.removeFollow(userId, followerId)
  .then((res) => dispatch(updateUserActionCreator(res.data)))
  .catch((error) => toast.error(error))

export const getAllFollowers = (userId, followerId) => (dispatch) => FollowsApiUtil.getAllFollowers(userId, followerId)
  .then((res) => dispatch(addAllFollowersActionCreator(res.data)))
  .catch((error) => toast.error(error))

export const getAllFollowed = (userId, followerId) => (dispatch) => FollowsApiUtil.getAllFollowed(userId, followerId)
  .then((res) => dispatch(addAllFollowedActionCreator(res.data)))
  .catch((error) => toast.error(error))

export default {
  addNewFollow,
  removeFollow,
  getAllFollowers,
  getAllFollowed,
}
