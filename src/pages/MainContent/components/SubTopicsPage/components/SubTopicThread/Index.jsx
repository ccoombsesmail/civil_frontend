import React, { useEffect, useState, memo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Tab } from 'react-bootstrap'

import useCategorizeComments from '../hooks/useCategorizeComments'

import CommentColumn from '../CommentColumn/Index'
import { ColumnContainer, ThreadContainer } from './Style/index'
import { ThemeTab } from '../../../../../CommonComponents/Tabs/Style'
import { Line } from '../../Style'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'
import { useGetSubTopicQuery } from '../../../../../../api/services/subtopics'
import { useGetAllCommentsQuery } from '../../../../../../api/services/comments'

const SubTopicThread = () => {
  const { subTopicId, topicId } = useParams()
  const [key, setKey] = useState('all')
  const { currentUser } = useGetCurrentUser()

  const { data: subtopic, isLoading: isSubTopicLoading, isUninitialized: isSubTopicUninitialized } = useGetSubTopicQuery(subTopicId, {
    skip: !currentUser || !subTopicId,
  })

  const { data: comments } = useGetAllCommentsQuery(subTopicId, {
    skip: !currentUser,
  })

  const categorizedComments = useCategorizeComments(comments)
  const {
    POSITIVE: positiveComments,
    NEUTRAL: neutralComments,
    NEGATIVE: negativeComments,
    all: allComments,
  } = categorizedComments || {}

  return (

    <ThreadContainer>
      <Line />
      <ThemeTab
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="all" title="All">
          <ColumnContainer>
            <CommentColumn topicId={topicId} numComments={subtopic?.allComments} comments={allComments} commentSentiment="" color="#6A6E70" />
          </ColumnContainer>
        </Tab>
        <Tab eventKey="positive" title="Generally Positive">
          <ColumnContainer>
            <CommentColumn topicId={topicId} numComments={subtopic?.positiveComments} comments={positiveComments} commentSentiment="Generally Positive" color="#6A6E70" />
          </ColumnContainer>
        </Tab>
        <Tab eventKey="neutral" title="Neutral">
          <ColumnContainer>
            <CommentColumn topicId={topicId} numComments={subtopic?.neutralComments} comments={neutralComments} commentSentiment="Neutral" color="#474A4F" />
          </ColumnContainer>
        </Tab>
        <Tab eventKey="negative" title="Generally Negative">
          <ColumnContainer>
            <CommentColumn topicId={topicId} numComments={subtopic?.negativeComments} comments={negativeComments} commentSentiment="Generally Negative" color="#6A6E70" />
          </ColumnContainer>
        </Tab>
      </ThemeTab>
    </ThreadContainer>
  )
}

export default memo(SubTopicThread)
