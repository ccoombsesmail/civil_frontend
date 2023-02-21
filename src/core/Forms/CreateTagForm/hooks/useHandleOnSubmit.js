import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { useCreateUserTagMutation } from '../../../../api/services/users.ts'

export default (userId, closeModal) => {
  const [createUserTag] = useCreateUserTagMutation()

  return useCallback(async (values, { setSubmitting, resetForm }) => {
    await toast.promise(
      createUserTag(values),
      {
        pending: 'Creating Tag...',
        success: {
          render() {
            closeModal()
            return 'Unique Tag Succefully Created!'
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
  }, [userId, closeModal])
}
