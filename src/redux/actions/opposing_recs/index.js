/* eslint-disable max-len */
import { toast } from 'react-toastify'

import { closeModal } from '../ui/index'
import { GET_ALL_OPPOSING_RECS } from '../../reducers/recs/recsReducer'
import * as OpposingRecsApiUtil from '../../../api/v1/opposing_recs/opposing_recs_api_util'

const getAllOpposingRecsActionCreator = (opposingRecs) => ({
  type: GET_ALL_OPPOSING_RECS,
  payload: opposingRecs,

})

export const createOpposingRec = (opposingRec) => (dispatch) => OpposingRecsApiUtil.createOpposingRec(opposingRec)
  .then(() => dispatch(closeModal()))
  .then(() => toast.success('Succesfully Submitted Recommendation'))
  .catch((err) => toast.error(`Problem Submitting Recommendation \n ${err}`, { autoClose: 2500 }))

export const getAllOpposingRecs = (targetContentId) => (dispatch) => OpposingRecsApiUtil.getAllOpposingRecs(targetContentId)
  .then((res) => dispatch(getAllOpposingRecsActionCreator(res.data)))

export default {
  createOpposingRec,
  getAllOpposingRecs,
}
