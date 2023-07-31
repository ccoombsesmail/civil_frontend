import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { useCreateTribunalVoteMutation } from '../../../../api/services/tribunal_votes.ts'

export default (contentId, voteToStrikeSelected, voteToAcquitSelected, closeModal) => {
  const [createTribunalVote] = useCreateTribunalVoteMutation()
  return useCallback((values, { setSubmitting, resetForm }) => {
    const data = {
      contentId,
      voteToStrike: voteToStrikeSelected || null,
      voteToAcquit: voteToAcquitSelected || null,
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
    closeModal()
  }, [contentId, voteToStrikeSelected, voteToAcquitSelected])
}
