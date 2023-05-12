import { useCallback } from 'react'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'

export default (spaceData, commentData, contentId) => {
  const { currentUser } = useGetCurrentUser()

  return useCallback(() => {
    if (!spaceData && !commentData) return null
    const {
      createdByUsername, createdByIconSrc, createdAt, editorState, id
    } = spaceData || commentData
    const {
      createdByUsername: createdByUsernameComment, editorState: commentEditorState, id: commentId
    } = commentData || {}

    console.log(commentData)

    return {
      ...spaceData,
      ...commentData,
      contentId,
      discussionId: null,
      spaceId: spaceData?.id || id,
      createdByIconSrc,
      username: currentUser?.username,
      createdBy: createdByUsername || createdByUsernameComment,
      time: createdAt,
      lexicalRawContent: editorState || commentEditorState,
      parentId: null,
      rootId: null,
    }
  }, [currentUser, commentData, spaceData, contentId])
}
