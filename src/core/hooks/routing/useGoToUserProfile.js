import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default (userId) => {
  const navigate = useNavigate()
  return useCallback((e) => {
    e.stopPropagation()
    navigate(`/user/${userId}`)
  }, [userId])
}
