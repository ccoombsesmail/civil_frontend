import { useMemo } from 'react'

import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'

export default (discussion) => {
  const { currentUser } = useGetCurrentUser()

  // const { data: discussion, isUninitialized, isLoading } = useLazyGetDiscussionQuery(discussionId, {
  //   skip: !discussionId || !currentUser,
  // })

  return useMemo(() => {
    // if (isUninitialized || isLoading || discussion?.title === 'General') return null
    const replyingToContent = discussion?.editorState
    return {
      discussionId: discussion.id,
      contentId: discussion.id,
      spaceId: discussion.spaceId,
      createdByIconSrc: discussion?.createdByIconSrc,
      username: currentUser?.username,
      createdByUsername: discussion?.createdByUsername,
      time: discussion?.createdAt,
      lexicalRawContent: replyingToContent,
      parentId: null,
      rootId: null,
    }
  }, [discussion, currentUser, discussion])
}
