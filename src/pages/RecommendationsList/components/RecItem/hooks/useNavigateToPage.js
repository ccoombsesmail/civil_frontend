import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default (rec) => {
  const { topic, subTopic } = rec
  const navigate = useNavigate()
  return useCallback(() => {
    if (rec.externalRecommendedContent) {
      window.open(rec.externalRecommendedContent, '_blank')
      return
    }
    if (topic) navigate(`/topics/${topic.id}/subtopics/`)
    else navigate(`/topics/${subTopic.topicId}/subtopics/${subTopic.id}`)
  }, [rec])
}
