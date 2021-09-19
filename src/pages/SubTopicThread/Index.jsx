import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { bindActionCreators } from 'redux'

import {Tabs, Tab} from 'react-bootstrap'
import useCategorizeComments from './hooks/useCategorizeComments'

import subTopicActions from '../../redux/actions/subtopics'
import commentActions from '../../redux/actions/comments'
import topicActions from '../../redux/actions/topics'

import usePermission from '../hooks/usePermission'
import CreateCommentForm from '../CommentForm/Index'
import CommentColumn from './components/CommentColumn/Index'
import WavyBackground from '../CommonComponents/WavyBackground/Index'
import { Container, ColumnContainer } from './Style/index'
import { Line } from '../SubTopics/Style'
import { ThemeTab } from '../CommonComponents/Tabs/Style'

const SubTopicThread = () => {
  const { subTopicId, topicId } = useParams()
  const { loggedIn } = usePermission()
  const dispatch = useDispatch()
  const { getSubTopic, getAllComments, getTopic } = bindActionCreators({...subTopicActions, ...commentActions, ...topicActions}, dispatch)
  const subTopic = useSelector(state => state.subtopics.list)?.find((subTopic) => subTopic.id === subTopicId)
  const topic = useSelector(state => state.topics.list)?.find((topic) => topic.id === topicId)
  const user =  useSelector(state => state.session.currentUser)
  const [key, setKey] = useState('all');

  const {positive: positiveComments, neutral: neutralComments, negative: negativeComments} = useCategorizeComments()

   useEffect(() => {
    if (loggedIn && user) {
      getSubTopic(subTopicId)
      getAllComments(subTopicId, user?.id)
      getTopic(topicId)
    }
  }, [loggedIn])

  return (
    <>
    <Container>
      {/* <header>
        <h1> We're Talking About the topic <b>{topic?.title}</b> </h1>
        <h1>The subtopic is <b>{subTopic?.title}</b>. Jump In the discussion...</h1>
      </header> */}
      <CreateCommentForm subTopic={subTopic} />
    </Container>
    <Line />
    
    <ThemeTab
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="all" title='All'>
        <ColumnContainer>
          <CommentColumn comments={positiveComments} commentSentiment={"In Favor"} color="var(--m-secondary-background-color)"  />
          <CommentColumn comments={negativeComments}  commentSentiment={"Disagree"} color="var(--m-primary-color)" />
        </ColumnContainer>
      </Tab>
      <Tab eventKey="positive" title="In Favor">
        <ColumnContainer>
          <CommentColumn comments={positiveComments} commentSentiment={"In Favor"} color="var(--m-secondary-background-color)"  />
        </ColumnContainer>
      </Tab>
      <Tab eventKey="neutral" title="Neutral">
        <ColumnContainer>
          <CommentColumn comments={neutralComments}  commentSentiment={"Neutral"} color="var(--m-primary-background-color)" />
        </ColumnContainer>
      </Tab>
      <Tab eventKey="negative" title="Negative">
        <ColumnContainer>
          <CommentColumn comments={negativeComments}  commentSentiment={"Disagree"} color="var(--m-primary-color)" />
        </ColumnContainer>
      </Tab>
    </ThemeTab>
    {/* <WavyBackground color="blue"top="70%"  /> */}
    </>
  )

}


export default SubTopicThread