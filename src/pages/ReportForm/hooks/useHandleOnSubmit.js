import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { createTopicReport } from '../../../api/v1/topic_reports/topic_reports_api_util'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import uiActionCreators from '../../../redux/actions/ui/index'
// const resolveAfter1500ms = new Promise((resolve) => setTimeout(resolve, 1500))

export default (topicId) => {
  const { closeModal } = useBindDispatch(uiActionCreators)
  return useCallback((values, { setSubmitting, resetForm }) => {
    const data = {
      topicId,
      toxic: values.toxic || null,
      personalAttack: values.personalAttack || null,
      spam: values.spam || null,
    }
    toast.promise(
      createTopicReport(data),
      {
        pending: 'Submitting Topic Report...',
        success: {
          render() {
            closeModal()
            return 'Topic Report Successfully Submitted!'
          },
        },
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
  }, [topicId])
}
