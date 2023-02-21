import { useCallback } from 'react'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'

export default (topicData, commentData, contentId) => {
  const { currentUser } = useGetCurrentUser()

  return useCallback(() => {
    if (!topicData && !commentData) return null
    const {
      createdByUsername, createdByIconSrc, createdAt, description, id,
    } = topicData || commentData
    const {
      createdBy, content, id: commentId,
    } = commentData || {}
    return {
      contentId,
      discussionId: null,
      topicId: id || commentId,
      createdByIconSrc,
      username: currentUser?.username,
      createdBy: createdByUsername || createdBy,
      time: createdAt,
      lexicalRawContent: JSON.parse(description || content),
      parentId: null,
      rootId: null,
    }
  }, [currentUser, commentData, topicData, contentId])
}
