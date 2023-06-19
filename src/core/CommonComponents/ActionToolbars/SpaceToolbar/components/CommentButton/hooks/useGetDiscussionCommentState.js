import { useCallback } from 'react'

import { useGetDiscussionQuery } from '../../../../../../../api/services/discussions.ts'
import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'

export default (discussionId) => {
  const { currentUser } = useGetCurrentUser()

  const { data: discussion, isUninitialized, isLoading } = useGetDiscussionQuery(discussionId, {
    skip: !discussionId || !currentUser,
  })

  return useCallback(() => {
    if (isUninitialized || isLoading || discussion?.title === 'General') return null
    const replyingToContent = discussion?.editorState
    return {
      discussionId,
      contentId: discussionId,
      spaceId: discussion.spaceId,
      createdByIconSrc: discussion?.createdByIconSrc,
      username: currentUser?.username,
      createdByUsername: discussion?.createdByUsername,
      time: discussion?.createdAt,
      lexicalRawContent: replyingToContent,
      parentId: null,
      rootId: null,
    }
  }, [discussion, currentUser, discussionId, isUninitialized])
}
