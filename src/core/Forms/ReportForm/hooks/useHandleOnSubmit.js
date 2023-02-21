import { useCallback } from 'react'
import { toast } from 'react-toastify'
import useBindDispatch from '../../../hooks/redux/useBindDispatch'
import uiActionCreators from '../../../../redux/actions/ui/index'
import { useCreateReportMutation } from '../../../../api/services/reports.ts'
// const resolveAfter1500ms = new Promise((resolve) => setTimeout(resolve, 1500))

export default (contentId) => {
  const { closeModal } = useBindDispatch(uiActionCreators)
  const [createReport, {}] = useCreateReportMutation()
  return useCallback((values, { setSubmitting, resetForm }) => {
    const data = {
      contentId,
      toxic: values.toxic || null,
      personalAttack: values.personalAttack || null,
      spam: values.spam || null,
    }
    toast.promise(
      createReport(data),
      {
        pending: 'Submitting Report...',
        success: {
          render() {
            closeModal()
            return 'Report Successfully Submitted!'
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
  }, [contentId])
}
