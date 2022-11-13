import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import topicActionCreators from '../../../../redux/actions/topics'
import subTopicActionCreators from '../../../../redux/actions/subtopics'

import useBindDispatch from '../../../hooks/redux/useBindDispatch'
import {
  Container, Line, MainContent, HeaderContainer,
} from './Style'
import {
  HomePageGrid, Left, Middle, Right,
} from '../../Style'

import Header from './components/Header/Index'
import ParentComment from './components/ParentComment/Index'

import SubTopicsRouter from './components/SubTopicsRouter/Index'
import { uuidRegEx } from '../../../../generic/regex/uuid'
import UserInformationDisplay from '../../../UserInformationDisplay/Index'
import Recommendations from '../RightSection/components/Recommendations/Index'

const SubTopics = () => {
  const { topicId, '*': url } = useParams()
  const [subtopicId, commentId] = url ? url.match(uuidRegEx) : []
  const {
    getAllSubTopics,
    getTopic,
  } = useBindDispatch(
    subTopicActionCreators,
    topicActionCreators,
  )
  const topic = useSelector((s) => s.topics.list)?.find((t) => t.id === topicId)

  const subtopicsEmpty = useSelector((s) => s.subtopics)
  const user = useSelector((s) => s.session.currentUser)

  useEffect(() => {
    getTopic(topicId, user?.id)
    if (subtopicsEmpty) getAllSubTopics(topicId)
  }, [topicId, subtopicId])

  return (
    <Container>
      <HomePageGrid>
        <Left>
          <UserInformationDisplay />
        </Left>
        <Middle>
          <MainContent>
            <HeaderContainer>
              <Header topic={topic} user={user} />
            </HeaderContainer>
            <Line />
            { commentId && <ParentComment topicId={topicId} /> }
          </MainContent>
        </Middle>
        <Right>
          <Recommendations />
        </Right>
      </HomePageGrid>
      <SubTopicsRouter />
    </Container>

  )
}

export default SubTopics
