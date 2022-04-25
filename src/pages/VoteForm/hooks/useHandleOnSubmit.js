import { useCallback } from 'react'
import { toast } from 'react-toastify'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import uiActionCreators from '../../../redux/actions/ui/index'
import topicTribunalVotesActionCreactors from '../../../redux/actions/topic_tribunal_votes/index'
// const resolveAfter1500ms = new Promise((resolve) => setTimeout(resolve, 1500))

export default (topicId, voteForSelected, voteAgainstSelected) => {
  const {
    createTopicTribunalVote,
  } = useBindDispatch(uiActionCreators, topicTribunalVotesActionCreactors)
  return useCallback((values, { setSubmitting, resetForm }) => {
    const data = {
      topicId,
      voteAgainst: voteAgainstSelected || null,
      voteFor: voteForSelected || null,
    }
    toast.promise(
      createTopicTribunalVote(data),
      {
        pending: 'Submitting Your Vote...',
        success: 'Vote Successfully Cast!',
        error: {
          render({ data: errorData }) {
            const { response } = errorData
            const { data: responseData } = response
            return `${responseData.msg} 🤯 `
          },
        },
      },
    )
    setSubmitting(false)
    resetForm({})
  }, [topicId, voteForSelected, voteAgainstSelected])
}
