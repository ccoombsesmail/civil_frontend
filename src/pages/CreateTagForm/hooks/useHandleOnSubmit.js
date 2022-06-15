import { useCallback } from 'react'
import { toast } from 'react-toastify'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import uiActionCreators from '../../../redux/actions/ui/index'
import topicTribunalVotesActionCreactors from '../../../redux/actions/tribunal_votes/index'
// const resolveAfter1500ms = new Promise((resolve) => setTimeout(resolve, 1500))

export default (userId) => {
  const {
    createTribunalVote,
  } = useBindDispatch(uiActionCreators, topicTribunalVotesActionCreactors)
  return useCallback((values, { setSubmitting, resetForm }) => {
    const data = {
    }
    toast.promise(
      createTribunalVote(data),
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
  }, [userId])
}
