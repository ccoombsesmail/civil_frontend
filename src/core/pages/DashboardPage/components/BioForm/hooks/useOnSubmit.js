import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { useUpdateUserBioInformationMutation } from '../../../../../../api/services/users.ts'

export default (bio, experience) => {
  const [updateUserBioInformation] = useUpdateUserBioInformationMutation()
  return useCallback((e) => {
    e.preventDefault()

    toast.promise(
      updateUserBioInformation({ bio: bio || null, experience: experience || null }),
      {
        pending: 'Saving Bio Infromation...',
        success: 'Bio Info Succefully Saved!',
        error: {
          render({ data: errorData }) {
            const { response } = errorData
            const { data: responseData } = response
            return `${responseData.msg} 🤯 `
          },
        },
      },
    )
  }, [bio, experience])
}
