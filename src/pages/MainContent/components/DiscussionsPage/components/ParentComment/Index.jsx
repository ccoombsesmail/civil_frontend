import React, { memo, useCallback } from 'react'
import { useGetAllCommentRepliesQuery } from '../../../../../../api/services/comments.ts'
import { CircleLoading } from '../../../../../../svgs/spinners/CircleLoading'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'

import Comment from '../Comment/Index'
import { ParentCommentContext } from '../CommentColumn/Index'
import LineWithOverlayText from '../LineWithTextOverlay/Index'

const ParentComment = ({ topicId, commentId, isFocusedComment }) => {
  const { currentUser } = useGetCurrentUser()
  const { data: commentData, isLoading, isUninitialized } = useGetAllCommentRepliesQuery(commentId, {
    skip: currentUser === undefined,
  })
  const commentRef = useCallback((node) => {
    if (node !== null) {
      node.scrollIntoView()
    }
  }, [])

  if (isUninitialized) return null
  if (isLoading) return <CircleLoading size="15vw" />
  return (
    <>
      <LineWithOverlayText>
        Discussion Comment
      </LineWithOverlayText>
      <ParentCommentContext.Provider
        value={{
          commentId,
          topicId,
          isFocusedComment,
        }}
      >
        <Comment commentRef={commentRef} commentData={commentData.comment} replies={[]} isFocusedComment />
      </ParentCommentContext.Provider>
    </>

  )
}

export default memo(ParentComment)
