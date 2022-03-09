/* eslint-disable max-len */
import { GET_ALL_RECS } from '../../reducers/recs/recsReducer'
import * as RecsApiUtil from '../../../api/v1/recs/recs_api_util'

const getAllRecsActionCreator = (recs) => ({
  type: GET_ALL_RECS,
  payload: recs,

})

export const getAllRecs = (targetContentId) => (dispatch) => RecsApiUtil.getAllRecs(targetContentId)
  .then((res) => dispatch(getAllRecsActionCreator(res.data)))

export default {
  getAllRecs,
}
