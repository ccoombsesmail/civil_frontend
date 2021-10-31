import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { Tab } from 'react-bootstrap'

import useCategorizeComments from './hooks/useCategorizeComments'
import usePermission from '../hooks/usePermission'
import useBindDispatch from '../hooks/redux/useBindDispatch'

import subTopicActions from '../../redux/actions/subtopics'
import commentActions from '../../redux/actions/comments'
import topicActions from '../../redux/actions/topics'

import CommentColumn from './components/CommentColumn/Index'
import { ColumnContainer } from './Style/index'
import { Line } from '../SubTopics/Style'
import { ThemeTab } from '../CommonComponents/Tabs/Style'

const SubTopicThread = () => {
  const { subTopicId, topicId } = useParams()
  const { loggedIn } = usePermission()
  const { getSubTopic, getAllComments, getTopic } = useBindDispatch(
    subTopicActions, commentActions, topicActions,
  )
  const user = useSelector((state) => state.session.currentUser)
  const [key, setKey] = useState('all')

  const {
    positive: positiveComments,
    neutral: neutralComments,
    negative: negativeComments,
    all: allComments,
  } = useCategorizeComments()

  useEffect(() => {
    if (loggedIn && user) {
      getSubTopic(subTopicId)
      getAllComments(subTopicId, user?.id)
      getTopic(topicId, user?.id)
    }
  }, [loggedIn])

  return (
    <>
      <Line />
      <ThemeTab
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="all" title="All">
          <ColumnContainer>
            <CommentColumn comments={allComments} commentSentiment="Comments" color="var(--m-primary-background-color)" />
          </ColumnContainer>
        </Tab>
        <Tab eventKey="positive" title="In Favor">
          <ColumnContainer>
            <CommentColumn comments={positiveComments} commentSentiment="In Favor" color="var(--m-secondary-background-color)" />
          </ColumnContainer>
        </Tab>
        <Tab eventKey="neutral" title="Neutral">
          <ColumnContainer>
            <CommentColumn comments={neutralComments} commentSentiment="Neutral" color="var(--m-primary-background-color)" />
          </ColumnContainer>
        </Tab>
        <Tab eventKey="negative" title="Negative">
          <ColumnContainer>
            <CommentColumn comments={negativeComments} commentSentiment="Disagree" color="var(--m-primary-color)" />
          </ColumnContainer>
        </Tab>
      </ThemeTab>
    </>
  )
}

export default SubTopicThread
