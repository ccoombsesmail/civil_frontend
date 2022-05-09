import { toast } from 'react-toastify'
import { closeModal } from '../ui/index'
import { ADD_TRIBUNAL_VOTE } from '../../reducers/reports/reportsReducer'
import * as TribunalVotesApiUtil from '../../../api/v1/tribunal_votes/tribunal_votes_api_util'
import { errorFormatter } from '../../utils/errorFormatter'

const addTribunalVoteActionCreator = (vote) => ({
  type: ADD_TRIBUNAL_VOTE,
  payload: vote,
})

export const createTribunalVote = (tribunalVote) => (dispatch) => (
  TribunalVotesApiUtil.createTribunalVote(tribunalVote)
    .then((res) => dispatch(addTribunalVoteActionCreator(res.data)))
    .catch((error) => toast.error(errorFormatter(error)))
    .finally(() => dispatch(closeModal()))
)

export default {
  createTribunalVote,
}
