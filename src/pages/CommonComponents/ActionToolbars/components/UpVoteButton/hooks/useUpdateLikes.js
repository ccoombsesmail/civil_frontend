import { useCallback } from 'react'
import useBindDispatch from '../../../../../hooks/redux/useBindDispatch'
import topicActionCreators from '../../../../../../redux/actions/topics/index'
import commentActionCreators from '../../../../../../redux/actions/comments/index'
import tribunalCommentActionCreators from '../../../../../../redux/actions/tribunal_comments/index'
import { useUpdateTopicLikesMutation } from '../../../../../../api/services/topics'

import { TOPIC, COMMENT, TRIBUNAL_COMMENT } from '../../../../../../enums/content_type'
import { calculateLikeValueToAdd } from '../../../utils/calculateLikeValueToAdd'
import useDetectCurrentPage from '../../../../../hooks/routing/useDetectCurrentPage'
import { useUpdateCommentLikesMutation } from '../../../../../../api/services/comments'

export default (content, user, contentType) => {
  const {
    updateTribunalCommentLikes,
  } = useBindDispatch(topicActionCreators, commentActionCreators, tribunalCommentActionCreators)
  const { isOnSubtopicsPage, isOnTribunalPage } = useDetectCurrentPage()
  const [updateLikes, {}] = useUpdateTopicLikesMutation()
  const [updateCommentLikes, {}] = useUpdateCommentLikesMutation()

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
      commentId: content?.id,
      value,
      createdByUserId: content.createdByUserId,
      updateLikeValue: calculateLikeValueToAdd(content.likeState, value),
      updateGetTopicQuery: isOnSubtopicsPage || isOnTribunalPage,
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
