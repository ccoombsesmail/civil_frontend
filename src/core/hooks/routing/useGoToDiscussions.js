import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default (topicId) => {
  const navigate = useNavigate()
  return useCallback(() => {
    navigate(`/home/topics/${topicId}/discussions/`)
  }, [topicId])
}
