import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { updateUserBioInformation } from '../../../../../api/v1/users/users_api_util'

export default (bio, experience, setBio, setExperience) => {
  const currentUser = useSelector((s) => s.session.currentUser)
  return useCallback((e) => {
    e.preventDefault()
    updateUserBioInformation(currentUser?.id, bio, experience)
    setBio('')
    setExperience('')
  }, [currentUser, bio, experience])
}
