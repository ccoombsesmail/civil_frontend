// action creator is just a function that dispatches an action
import { toast } from 'react-toastify'
import { closeModal } from '../ui/index'
import { ADD_SPACE, GET_ALL_SPACES, UPDATE_SPACE_LIKES } from '../../reducers/spacesReducer'
import * as SpacesApiUtil from '../../../api/v1/spaces/spaces_api_util'
import { errorFormatter } from '../../utils/errorFormatter'

const getAllSpacesActionCreator = (spaces) => ({
  type: GET_ALL_SPACES,
  payload: spaces,

})

const addSpaceActionCreator = (spaceData) => ({
  type: ADD_SPACE,
  payload: spaceData,
})

const updateSpaceLikesActionCreator = (data) => ({
  type: UPDATE_SPACE_LIKES,
  payload: data,
})

export const createSpace = (spaceData) => (dispatch) => SpacesApiUtil.createSpace(spaceData)
  .then((res) => dispatch(addSpaceActionCreator(res.data)))
  .finally(() => dispatch(closeModal()))
  .catch((error) => toast.error(errorFormatter(error)))

export const getAllSpaces = () => (dispatch) => SpacesApiUtil.getAllSpaces()
  .then((res) => dispatch(getAllSpacesActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export const getSpace = (spaceId, userId) => (dispatch) => SpacesApiUtil.getSpace(spaceId, userId)
  .then((res) => dispatch(addSpaceActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export const updateSpaceLikes = (data) => (dispatch) => SpacesApiUtil.updateSpaceLikes(data)
  .then((res) => dispatch(updateSpaceLikesActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

const uploadSpaceMedia = (data, fileType, fileFormat) => () => SpacesApiUtil
  .uploadSpaceMedia(data, fileType, fileFormat)
  .catch((error) => toast.error(errorFormatter(error)))

export default {
  createSpace,
  getAllSpaces,
  getSpace,
  updateSpaceLikes,
  uploadSpaceMedia,
}
