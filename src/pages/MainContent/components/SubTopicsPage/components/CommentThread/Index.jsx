import React, { useEffect, useState, memo } from 'react'
import { useParams } from 'react-router-dom'

import { Tab } from 'react-bootstrap'

import useCategorizeComments from '../hooks/useCategorizeComments'
import useBindDispatch from '../../../../../hooks/redux/useBindDispatch'

import subTopicActions from '../../../../../../redux/actions/subtopics'
import commentActions from '../../../../../../redux/actions/comments'
import topicActions from '../../../../../../redux/actions/topics'

import CommentColumn from '../CommentColumn/Index'
import { ColumnContainer, ThreadContainer } from './Style/index'
import { ThemeTab } from '../../../../../CommonComponents/Tabs/Style'
import { Line } from '../../Style'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'
import { useGetAllCommentRepliesQuery } from '../../../../../../api/services/comments'
import { useGetTopicQuery } from '../../../../../../api/services/topics'

const CommentThread = () => {
  const { commentId, topicId, subTopicId } = useParams()
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
  const [key, setKey] = useState('all')

  const {
    POSITIVE: positiveComments,
    NEUTRAL: neutralComments,
    NEGATIVE: negativeComments,
    all: allComments,
  } = useCategorizeComments(comments?.replies)

  return (

    <ThreadContainer>
      <Line />
      <ThemeTab
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="all" title="All">
          <ColumnContainer>
            <CommentColumn numComments={0} comments={allComments} commentSentiment="" color="#6A6E70" />
          </ColumnContainer>
        </Tab>
        <Tab eventKey="positive" title="Generally Positive">
          <ColumnContainer>
            <CommentColumn numComments={0} comments={positiveComments} commentSentiment="Generally Positive" color="#6A6E70" />
          </ColumnContainer>
        </Tab>
        <Tab eventKey="neutral" title="Neutral">
          <ColumnContainer>
            <CommentColumn numComments={0} comments={neutralComments} commentSentiment="Neutral" color="#474A4F" />
          </ColumnContainer>
        </Tab>
        <Tab eventKey="negative" title="Generally Negative">
          <ColumnContainer>
            <CommentColumn numComments={0} comments={negativeComments} commentSentiment="Generally Negative" color="#6A6E70" />
          </ColumnContainer>
        </Tab>
      </ThemeTab>
    </ThreadContainer>
  )
}

export default memo(CommentThread)
