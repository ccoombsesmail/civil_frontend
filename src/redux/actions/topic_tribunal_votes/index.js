import { toast } from 'react-toastify'
import { closeModal } from '../ui/index'
import { ADD_TOPIC_TRIBUNAL_VOTE } from '../../reducers/topic_reports/topicReportsReducer'
import * as TopicTribunalVotesApiUtil from '../../../api/v1/topic_tribunal_votes/topic_tribunal_votes_api_util'
import { errorFormatter } from '../../utils/errorFormatter'

const addTopicTribunalVoteActionCreator = (vote) => ({
  type: ADD_TOPIC_TRIBUNAL_VOTE,
  payload: vote,
})

export const createTopicTribunalVote = (topicTribunalVote) => (dispatch) => (
  TopicTribunalVotesApiUtil.createTopicTribunalVote(topicTribunalVote)
    .then((res) => dispatch(addTopicTribunalVoteActionCreator(res.data)))
    .catch((error) => toast.error(errorFormatter(error)))
    .finally(() => dispatch(closeModal()))
)

export default {
  createTopicTribunalVote,
}
