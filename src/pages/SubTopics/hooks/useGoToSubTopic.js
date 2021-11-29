import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default (id) => {
  const navigate = useNavigate()
  return useCallback(() => navigate(id), [id])
}
