import { useCallback } from 'react'
import { useHistory } from 'react-router'

export default (topicId) => {
  const history = useHistory()
  return useCallback(() => {
    history.push(`/topics/${topicId}/subtopics/`)
  }, [topicId])
}
