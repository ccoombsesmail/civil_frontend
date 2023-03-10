import { useCallback } from 'react'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'

export default (topicData, commentData, contentId) => {
  const { currentUser } = useGetCurrentUser()

  return useCallback(() => {
    if (!topicData && !commentData) return null
    const {
      createdByUsername, createdByIconSrc, createdAt, editorState, id,
    } = topicData || commentData
    const {
      createdByUsername: createdByUsernameComment, editorState: commentEditorState, id: commentId,
    } = commentData || {}
    return {
      contentId,
      discussionId: null,
      topicId: id || commentId,
      createdByIconSrc,
      username: currentUser?.username,
      createdBy: createdByUsername || createdByUsernameComment,
      time: createdAt,
      lexicalRawContent: JSON.parse(editorState || commentEditorState),
      parentId: null,
      rootId: null,
    }
  }, [currentUser, commentData, topicData, contentId])
}
