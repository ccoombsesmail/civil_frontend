import React, { useEffect, useState, memo } from 'react'
import { useSelector } from 'react-redux'
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
import useSessionType from '../../../../../hooks/permissions/useSessionType'
import { useGetTopicQuery } from '../../../../../../api/services/topics'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'

const SubTopicThread = () => {
  const { subTopicId, topicId } = useParams()
  const { getAllComments, getTopic } = useBindDispatch(
    subTopicActions, commentActions, topicActions,
  )
  const user = useSelector((state) => state.session.currentUser)
  const subtopic = useSelector((state) => state.subtopics)[subTopicId]
  const [key, setKey] = useState('all')
  const sessionType = useSessionType()
  const { currentUser } = useGetCurrentUser()

  const { categorizedComments, isLoading, isUninitialized } = useCategorizeComments(subTopicId, currentUser)
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
