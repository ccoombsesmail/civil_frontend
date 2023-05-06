import { useCallback } from 'react'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'

export default (topicData, commentData, contentId) => {
  const { currentUser } = useGetCurrentUser()

  return useCallback(() => {
    if (!topicData && !commentData) return null
    const {
      createdByUsername, createdByIconSrc, createdAt, editorState, id
    } = topicData || commentData
    const {
      createdByUsername: createdByUsernameComment, editorState: commentEditorState, id: commentId
    } = commentData || {}

    console.log(commentData)

    return {
      ...topicData,
      ...commentData,
      contentId,
      discussionId: null,
      topicId: topicData?.id || id,
      createdByIconSrc,
      username: currentUser?.username,
      createdBy: createdByUsername || createdByUsernameComment,
      time: createdAt,
      lexicalRawContent: editorState || commentEditorState,
      parentId: null,
      rootId: null,
    }
  }, [currentUser, commentData, topicData, contentId])
}
