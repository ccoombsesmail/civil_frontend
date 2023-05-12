/* eslint-disable max-len */
// action creator is just a function that dispatches an action
import { toast } from 'react-toastify'
import { closeModal } from '../ui/index'
import { ADD_SUB_SPACE, GET_ALL_SUB_SPACES } from '../../reducers/discussions/subSpacesReducer'
import * as DiscussionsApiUtil from '../../../api/v1/discussions/discussions_api_util'
import { errorFormatter } from '../../utils/errorFormatter'

const getAllSpacesActionCreator = (discussions) => ({
  type: GET_ALL_SUB_SPACES,
  payload: discussions,

})

const addSpaceActionCreator = (subSpaceData) => ({
  type: ADD_SUB_SPACE,
  payload: subSpaceData,
})

export const createDiscussion = (spaceData) => (dispatch) => DiscussionsApiUtil.createDiscussion(spaceData)
  .then((res) => dispatch(addSpaceActionCreator(res.data)))
  .then(() => dispatch(closeModal()))
  .catch((error) => toast.error(errorFormatter(error)))

export const getAllDiscussions = (spaceId) => (dispatch) => DiscussionsApiUtil.getAllDiscussions(spaceId)
  .then((res) => dispatch(getAllSpacesActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export const getDiscussion = (subSpaceId) => (dispatch) => DiscussionsApiUtil.getDiscussion(subSpaceId)
  .then((res) => dispatch(addSpaceActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export default {
  createDiscussion,
  getAllDiscussions,
  getDiscussion,
}
