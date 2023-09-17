import React, { memo, useMemo } from 'react'
import { useGetAllCommentRepliesQuery } from '../../../../../api/services/comments.ts'
import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'

import LineWithOverlayText from '../LineWithTextOverlay/Index'
import CommentItem from '../../../../CommonComponents/InfiniteLoaders/ContentItems/CommentItem/CommentItem'
import { ParentCommentContext } from '../../../../CommonComponents/InfiniteLoaders/ContentItems/CommentItem/ParentCommentContext.tsx'

function ParentComment({ spaceId, commentId }) {
  const { data: commentData, isLoading, isUninitialized } = useGetAllCommentRepliesQuery(commentId)

  const contextValue = useMemo(() => ({
    commentId,
    spaceId,
    isFocusedComment: true,
    rootOfCommentReplyThreadId: commentData?.comment.id,
  }), [commentId, spaceId, commentData])

  if (isUninitialized) return null
  if (isLoading) return <CircleLoading size="15vw" />
  return (
    <>
      <LineWithOverlayText>
        Discussion Comment
      </LineWithOverlayText>
      <ParentCommentContext.Provider
        value={contextValue}
      >
        <CommentItem commentData={commentData.comment} replies={[]} isFocusedComment />
      </ParentCommentContext.Provider>
    </>

  )
}

export default memo(ParentComment)
