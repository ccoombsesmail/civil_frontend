import { useCallback, useContext } from 'react'
import { useUpdateSpaceLikesMutation } from '../../../../../../api/services/spaces.ts'

import {
  SPACE,
  COMMENT,
  TRIBUNAL_COMMENT,
} from '../../../../../../enums/content_type'
import { calculateLikeValueToAdd } from '../../../utils/calculateLikeValueToAdd'
import { useUpdateCommentLikesMutation } from '../../../../../../api/services/comments.ts'
import { useUpdateTribunalCommentLikesMutation } from '../../../../../../api/services/tribunal_comments.ts'
import useDetectCurrentPage from '../../../../../hooks/routing/useDetectCurrentPage.ts'
import { ParentCommentContext } from '../../../../../pages/DiscussionsPage/components/CommentColumn/ParentCommentContext'
import {
  LikedState,
  NeutralState,
} from '../../../../../../enums/like_state'
import { SpaceItemContext } from '../../../../../pages/HomePage/components/Spaces/components/SpaceItem/SpaceItemContex.tsx'

export default (content, user, contentType, currentPageSpace) => {
  const {
    isReplies,
    isFocusedComment,
    commentId,
    currentPage,
    rootOfCommentReplyThreadId,
    commentType,
    reportedContentId,
  } = useContext(ParentCommentContext) || {}

  const { updateFollowedSpacesQuery } = useContext(SpaceItemContext) || {}
  console.log(content)

  const [updateTribunalCommentLikes] = useUpdateTribunalCommentLikesMutation()
  const [updateLikes] = useUpdateSpaceLikesMutation()
  const [updateCommentLikes] = useUpdateCommentLikesMutation()
  const { isOnDiscussionsPage, isOnTribunalPage } = useDetectCurrentPage()
  return useCallback(async () => {
    const likeData = {
      id: content?.id,
      commentId,
      createdByUserId: content.createdByUserData.createdByUserId,
      updateLikeValue: calculateLikeValueToAdd(
        content.likeState,
        content.likeState === LikedState ? NeutralState : LikedState,
      ),
      updateGetSpaceQuery: isOnDiscussionsPage || isOnTribunalPage,
      isReplies,
      isFocusedComment,
      ...content,
      currentPage: currentPageSpace ?? currentPage,
      rootOfCommentReplyThreadId,
      rootId: content?.rootId,
      newLikeState:
        content.likeState === LikedState ? NeutralState : LikedState,
      likeAction: content.likeState === LikedState ? NeutralState : LikedState,
      commentType,
      reportedContentId,
      updateFollowedSpacesQuery,
    }
    switch (contentType) {
      case SPACE:
        await updateLikes(likeData)
        break
      case COMMENT:
        await updateCommentLikes(likeData)
        break
      case TRIBUNAL_COMMENT:
        await updateTribunalCommentLikes(likeData)
        break
      default:
        break
    }
  }, [content, contentType])
}
