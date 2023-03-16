import { useCallback, useContext } from 'react'
import { useUpdateTopicLikesMutation } from '../../../../../../api/services/topics.ts'

import { TOPIC, COMMENT, TRIBUNAL_COMMENT } from '../../../../../../enums/content_type'
import { calculateLikeValueToAdd } from '../../../utils/calculateLikeValueToAdd'
import { useUpdateCommentLikesMutation } from '../../../../../../api/services/comments.ts'
import { useUpdateTribunalCommentLikesMutation } from '../../../../../../api/services/tribunal_comments.ts'
import useDetectCurrentPage from '../../../../../hooks/routing/useDetectCurrentPage'
import { ParentCommentContext } from '../../../../../pages/DiscussionsPage/components/CommentColumn/ParentCommentContext'

export default (content, user, contentType) => {
  const { isReplies, isFocusedComment, commentId } = useContext(ParentCommentContext) || {}
  const [updateTribunalCommentLikes] = useUpdateTribunalCommentLikesMutation()
  const [updateLikes] = useUpdateTopicLikesMutation()
  const [updateCommentLikes] = useUpdateCommentLikesMutation()
  const { isOnDiscussionsPage, isOnTribunalPage } = useDetectCurrentPage()

  return useCallback(() => {
    let value
    switch (content.likeState) {
      case -1:
        value = 1
        break
      case 0:
        value = 1
        break
      case 1:
        value = 0
        break
      default:
        break
    }
    const likeData = {
      id: content?.id,
      commentId,
      value,
      createdByUserId: content.createdByUserId,
      updateLikeValue: calculateLikeValueToAdd(content.likeState, value),
      updateGetTopicQuery: isOnDiscussionsPage || isOnTribunalPage,
      isReplies,
      isFocusedComment,
      ...content
    }
    switch (contentType) {
      case TOPIC:
        updateLikes(likeData)
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
  }, [content, contentType])
}
