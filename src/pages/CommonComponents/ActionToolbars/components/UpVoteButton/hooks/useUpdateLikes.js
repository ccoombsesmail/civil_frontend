import { useCallback } from 'react'
import useBindDispatch from '../../../../../hooks/redux/useBindDispatch'
import topicActionCreators from '../../../../../../redux/actions/topics/index'
import commentActionCreators from '../../../../../../redux/actions/comments/index'
import tribunalCommentActionCreators from '../../../../../../redux/actions/tribunal_comments/index'

import { TOPIC, COMMENT, TRIBUNAL_COMMENT } from '../../../../../../enums/content_type'

export default (content, user, contentType) => {
  const {
    updateTopicLikes,
    updateCommentLikes,
    updateTribunalCommentLikes,
  } = useBindDispatch(topicActionCreators, commentActionCreators, tribunalCommentActionCreators)

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
      userId: user?.id,
      value,
      createdById: content.createdById || content.userId,
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
