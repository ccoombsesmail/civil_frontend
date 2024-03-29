import { useMemo } from 'react'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'

export default (spaceData, commentData, discussionData, contentId) => {
  const { currentUser } = useGetCurrentUser()

  return useMemo(() => {
    if (!spaceData && !commentData && !discussionData) return null
    const {
      createdByUsername, createdByIconSrc, createdAt, editorState, id,
    } = spaceData || discussionData || commentData
    const {
      createdByUsername: createdByUsernameComment, editorState: commentEditorState,
    } = commentData || {}

    return {
      ...spaceData,
      ...commentData,
      ...discussionData,
      contentId,
      discussionId: null,
      spaceId: discussionData?.spaceId || spaceData?.id || id,
      createdByIconSrc,
      username: currentUser?.username,
      createdBy: createdByUsername || createdByUsernameComment,
      time: createdAt,
      lexicalRawContent: editorState || commentEditorState,
      parentId: null,
      rootId: null,
    }
  }, [currentUser, commentData, spaceData, discussionData, contentId])
}
