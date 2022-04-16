import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { createTopicReport } from '../../../api/v1/topic_reports/topic_reports_api_util'

import topicActions from '../../../redux/actions/topics/index'
import useBindDispatch from '../../hooks/redux/useBindDispatch'

// const resolveAfter1500ms = new Promise((resolve) => setTimeout(resolve, 1500))

export default (topicId) => {
  console.log(topicId)
  return useCallback((values, { setSubmitting, resetForm }) => {
    console.log(values)
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
        success: 'Topic Report Successfully Submitted!',
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
