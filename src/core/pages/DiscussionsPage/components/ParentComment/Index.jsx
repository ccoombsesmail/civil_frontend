import React, { memo, useCallback, useMemo } from 'react'
import { useGetAllCommentRepliesQuery } from '../../../../../api/services/comments.ts'
import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'

import Comment from '../Comment/Index'
import { ParentCommentContext } from '../CommentColumn/ParentCommentContext'
import LineWithOverlayText from '../LineWithTextOverlay/Index'

function ParentComment({ spaceId, commentId }) {
  const { currentUser } = useGetCurrentUser()
  const { data: commentData, isLoading, isUninitialized } = useGetAllCommentRepliesQuery(commentId, {
    skip: currentUser === undefined,
  })

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
        <Comment commentData={commentData.comment} replies={[]} isFocusedComment />
      </ParentCommentContext.Provider>
    </>

  )
}

export default memo(ParentComment)
