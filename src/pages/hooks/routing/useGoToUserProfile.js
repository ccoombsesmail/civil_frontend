import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default (username) => {
  const navigate = useNavigate()
  return useCallback((e) => {
    e.stopPropagation()
    navigate(`/user/${username}`)
  }, [username])
}
