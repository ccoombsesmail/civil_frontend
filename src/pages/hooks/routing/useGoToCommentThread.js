import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default (topicId, subtopicId) => {
  const navigate = useNavigate()
  return useCallback(() => {
    navigate(`/home/topics/${topicId}/subtopics/${subtopicId}`)
  }, [])
}
