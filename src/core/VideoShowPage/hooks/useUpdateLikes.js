import { useCallback } from 'react'

export default (updateTopicLikes, topic, user) => useCallback(() => {
  if (!topic || !user) return // Some somrt of error here maybe
  updateTopicLikes({
    id: topic.id,
    userId: user.id,
    increment: !topic.liked,
  })
}, [topic])
