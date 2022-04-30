/* eslint-disable max-len */
import { toast } from 'react-toastify'
import { GET_ALL_RECS } from '../../reducers/recs/recsReducer'
import * as RecsApiUtil from '../../../api/v1/recs/recs_api_util'
import { errorFormatter } from '../../utils/errorFormatter'

const getAllRecsActionCreator = (recs) => ({
  type: GET_ALL_RECS,
  payload: recs,

})

export const getAllRecs = (targetContentId) => (dispatch) => RecsApiUtil.getAllRecs(targetContentId)
  .then((res) => dispatch(getAllRecsActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export default {
  getAllRecs,
}
