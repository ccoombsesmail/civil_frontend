import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Tab } from 'react-bootstrap'

import topicActionCreators from '../../redux/actions/topics'
import subTopicActionCreators from '../../redux/actions/subtopics'
import opposingRecsActionCreators from '../../redux/actions/opposing_recs'
import recsActionCreators from '../../redux/actions/recs'

import useBindDispatch from '../hooks/redux/useBindDispatch'
import {
  Container, Line, MainContent, HeaderContainer, TabContainer,
} from './Style'
import Header from './components/Header/Index'
import ParentComment from './components/ParentComment/Index'

import SubTopicsRouter from './components/SubTopicsRouter/Index'
import RecommendationsList from '../RecommendationsList/Index'
import { ThemeTab } from '../CommonComponents/Tabs/Style'
import { uuidRegEx } from '../../generic/regex/uuid'

const SubTopics = () => {
  const { topicId, '*': url } = useParams()
  const [key, setKey] = useState('recs')
  const [subtopicId, commentId] = url.match(uuidRegEx)
  console.log(commentId)
  const {
    getAllSubTopics, getAllRecs,
    getTopic, getAllOpposingRecs,
  } = useBindDispatch(
    subTopicActionCreators,
    topicActionCreators,
    opposingRecsActionCreators,
    recsActionCreators,
  )
  const topic = useSelector((s) => s.topics.list)?.find((t) => t.id === topicId)

  const recs = useSelector((s) => s.recommendations.recs)
  const opposingRecs = useSelector((s) => s.recommendations.opposingRecs)

  const subtopicsEmpty = useSelector((s) => s.subtopics)
  const user = useSelector((s) => s.session.currentUser)

  useEffect(() => {
    getTopic(topicId, user?.id)
    getAllOpposingRecs(topicId)
    getAllRecs(topicId)
    if (subtopicsEmpty) getAllSubTopics(topicId)
  }, [topicId, subtopicId])

  return (
    <Container>
      <MainContent>
        <HeaderContainer>
          <Header topic={topic} user={user} />
        </HeaderContainer>
        <Line />
        { commentId && <ParentComment topicId={topicId} /> }
        <SubTopicsRouter />
      </MainContent>
      <TabContainer>
        <ThemeTab
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="recs" title="Recommended Content">
            <RecommendationsList recs={recs} />
          </Tab>
          <Tab eventKey="opposingRecs" title="Opposing Views">
            <RecommendationsList recs={opposingRecs} />
          </Tab>
        </ThemeTab>

      </TabContainer>
    </Container>

  )
}

export default SubTopics
