import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { useCreateReportMutation } from '../../../../api/services/reports.ts'

export default (contentId, closeModal) => {
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
    closeModal()
    setSubmitting(false)
    resetForm({})
  }, [contentId, closeModal])
}
