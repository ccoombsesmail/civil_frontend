import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default () => {
  const navigate = useNavigate()
  return useCallback(() => {
    navigate('/dashboard')
  }, [])
}
