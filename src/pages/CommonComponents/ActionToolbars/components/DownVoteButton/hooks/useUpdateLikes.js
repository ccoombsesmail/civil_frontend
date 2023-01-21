import { useCallback } from 'react'
import { useUpdateTopicLikesMutation } from '../../../../../../api/services/topics.ts'

import { TOPIC, COMMENT, TRIBUNAL_COMMENT } from '../../../../../../enums/content_type'
import useDetectCurrentPage from '../../../../../hooks/routing/useDetectCurrentPage'
import { calculateLikeValueToAdd } from '../../../utils/calculateLikeValueToAdd'
import { useUpdateCommentLikesMutation } from '../../../../../../api/services/comments.ts'
import { useUpdateTribunalCommentLikesMutation } from '../../../../../../api/services/tribunal_comments.ts'

export default (content, user, contentType) => {
  const [updateTribunalCommentLikes] = useUpdateTribunalCommentLikesMutation()
  const [updateTopicLikes] = useUpdateTopicLikesMutation()
  const [updateCommentLikes] = useUpdateCommentLikesMutation()
  const { isOnDiscussionsPage, isOnTribunalPage } = useDetectCurrentPage()

  return useCallback(() => {
    let value
    switch (content.likeState) {
      case -1:
        value = 0
        break
      case 0:
        value = -1
        break
      case 1:
        value = -1
        break
      default:
        break
    }
    const likeData = {
      id: content?.id,
      commentId: content?.id,
      value,
      updateLikeValue: calculateLikeValueToAdd(content.likeState, value),
      updateGetTopicQuery: isOnDiscussionsPage || isOnTribunalPage,
      createdByUserId: content.createdByUserId,
      ...content,

    }
    switch (contentType) {
      case TOPIC:
        updateTopicLikes(likeData)
        break
      case COMMENT:
        updateCommentLikes(likeData)
        break
      case TRIBUNAL_COMMENT:
        updateTribunalCommentLikes(likeData)
        break
      default:
        break
    }
  }, [content])
}
