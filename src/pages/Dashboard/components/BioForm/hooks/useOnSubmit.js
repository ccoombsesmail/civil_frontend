import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import useBindDispatch from '../../../../hooks/redux/useBindDispatch'
import userActions from '../../../../../redux/actions/users'

export default (bio, experience) => {
  const currentUser = useSelector((s) => s.session.currentUser)
  const { updateUserBioInformation } = useBindDispatch(userActions)
  return useCallback((e) => {
    e.preventDefault()

    toast.promise(updateUserBioInformation(bio || null, experience || null),
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
      })
  }, [currentUser, bio, experience])
}
