/* eslint-disable no-unused-vars */
import React, { useState, memo } from 'react'
import { useParams } from 'react-router-dom'

import useCategorizeComments from '../hooks/useCategorizeComments'

import CommentColumn from '../CommentColumn/Index'
import { ColumnContainer, ThreadContainer } from './Style/index'
import ParentComment from '../ParentComment/Index'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'
import { useGetAllCommentRepliesQuery } from '../../../../../../api/services/comments.ts'
import { useGetTopicQuery } from '../../../../../../api/services/topics.ts'
import { Container } from '../ParentComment/Style'

const CommentThread = () => {
  const { commentId, topicId } = useParams()
  const { currentUser } = useGetCurrentUser()

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isUninitialized: isCommentsUninitialized,
  } = useGetAllCommentRepliesQuery(commentId, { skip: !currentUser })

  const {
    data: topic,
    isLoading: isTopicLoading,
    isUninitialized: isTopicUninitialized,
  } = useGetTopicQuery(topicId, {
    skip: !currentUser,
  })

  const {
    POSITIVE: positiveComments,
    NEUTRAL: neutralComments,
    NEGATIVE: negativeComments,
    all: allComments,
  } = useCategorizeComments(comments?.replies)

  return (
    <Container>
      <ParentComment topicId={topicId} commentId={commentId} isFocusedComment />
      <ThreadContainer>
        <ColumnContainer>
          <CommentColumn comments={allComments} commentSentiment="All" color="white" topicId={topicId} isReplies />
        </ColumnContainer>
      </ThreadContainer>
    </Container>
  )
}

export default memo(CommentThread)
