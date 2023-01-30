import { useCallback } from 'react'

import { useGetTopicQuery } from '../../../../../../../api/services/topics.ts'
import { useGetGeneralDiscussionIdQuery } from '../../../../../../../api/services/discussions.ts'

import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'

export default (topicId) => {
  const { currentUser } = useGetCurrentUser()

  const { data: topic, isLoading: isTopicLoading, isUninitialized: isTopicUninit } = useGetTopicQuery(topicId, {
    skip: !topicId || !currentUser,
  })

  const { data: genDiscussionId, isLoading: isIdLoading, isUninitialized: isIdUninit } = useGetGeneralDiscussionIdQuery(topicId, {
    skip: !topicId || !currentUser,
  })

  console.log(isTopicLoading, isTopicUninit, isIdLoading, isIdUninit)

  return useCallback(() => {
    if (isTopicLoading || isTopicUninit || isIdLoading || isIdUninit) return null
    const replyingToContent = topic?.description
    return {
      discussionId: genDiscussionId.id,
      topicId,
      contentId: genDiscussionId.id,
      createdByIconSrc: topic?.createdByIconSrc,
      username: currentUser?.username,
      createdBy: topic?.createdByUsername,
      time: topic?.createdAt,
      lexicalRawContent: JSON.parse(replyingToContent),
      parentId: null,
      rootId: null,
    }
  }, [topic, currentUser, isTopicLoading, isTopicUninit, isIdLoading, isIdUninit, genDiscussionId])
}
