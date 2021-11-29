import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default (topicId, subtopicId) => {
  const navigate = useNavigate()
  return useCallback(() => {
    navigate(`/topics/${topicId}/subtopics/${subtopicId}`)
  }, [])
}
