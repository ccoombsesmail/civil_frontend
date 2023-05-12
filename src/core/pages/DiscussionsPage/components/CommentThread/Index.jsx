/* eslint-disable no-unused-vars */
import React, { useState, memo } from 'react'
import { useParams } from 'react-router-dom'

import useCategorizeComments from '../hooks/useCategorizeComments'

import CommentColumn from '../CommentColumn/Index'
import { ColumnContainer, ThreadContainer } from './Style/index'
import ParentComment from '../ParentComment/Index'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { useGetAllCommentRepliesQuery } from '../../../../../api/services/comments.ts'
import { useGetSpaceQuery } from '../../../../../api/services/spaces.ts'
import { Container } from '../ParentComment/Style'
import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'

function CommentThread() {
  const { commentId, spaceId } = useParams()
  const { currentUser } = useGetCurrentUser()

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isUninitialized: isCommentsUninitialized,
  } = useGetAllCommentRepliesQuery(commentId, { skip: !currentUser })

  const {
    data: space,
    isLoading: isSpaceLoading,
    isUninitialized: isSpaceUninitialized,
  } = useGetSpaceQuery(spaceId, {
    skip: !currentUser,
  })

  const {
    POSITIVE: positiveComments,
    NEUTRAL: neutralComments,
    NEGATIVE: negativeComments,
    all: allComments,
  } = useCategorizeComments(comments?.replies)

  if (isCommentsUninitialized) return null
  return (
    <Container>
      <ParentComment spaceId={spaceId} commentId={commentId} isFocusedComment />
      <ThreadContainer>
        <ColumnContainer>
         {
         isCommentsLoading ? <CircleLoading size={30} /> : <CommentColumn comments={allComments} commentSentiment="All" color="white" spaceId={spaceId} isReplies />
        }
        
        </ColumnContainer>
      </ThreadContainer>
    </Container>
  )
}

export default memo(CommentThread)
