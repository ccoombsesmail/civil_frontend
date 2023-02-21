import React, { memo, useCallback, useMemo } from 'react'
import { useGetAllCommentRepliesQuery } from '../../../../../api/services/comments.ts'
import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'

import Comment from '../Comment/Index'
import { ParentCommentContext } from '../CommentColumn/ParentCommentContext'
import LineWithOverlayText from '../LineWithTextOverlay/Index'

function ParentComment({ topicId, commentId, isFocusedComment }) {
  const { currentUser } = useGetCurrentUser()
  const { data: commentData, isLoading, isUninitialized } = useGetAllCommentRepliesQuery(commentId, {
    skip: currentUser === undefined,
  })
  const commentRef = useCallback((node) => {
    if (node !== null) {
      node.scrollIntoView()
    }
  }, [])
  const contextValue = useMemo(() => ({
    commentId,
    topicId,
    isFocusedComment,
  }))

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
        <Comment commentRef={commentRef} commentData={commentData.comment} replies={[]} isFocusedComment />
      </ParentCommentContext.Provider>
    </>

  )
}

export default memo(ParentComment)
