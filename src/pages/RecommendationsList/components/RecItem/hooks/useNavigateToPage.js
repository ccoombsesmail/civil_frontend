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
    if (topic) navigate(`/home/topics/${topic.id}/discussions/`)
    else navigate(`/home/topics/${subTopic.topicId}/discussions/${subTopic.id}`)
  }, [rec])
}
