import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default (userId) => {
  const navigate = useNavigate()
  return useCallback((e) => {
    e.stopPropagation()
    if (userId) navigate(`/user/${userId}`)
  }, [userId])
}

export const useGoToUserProfile = () => {
  const navigate = useNavigate()
  return useCallback((e, userId) => {
    e.stopPropagation()
    navigate(`/user/${userId}`)
  }, [])
}
