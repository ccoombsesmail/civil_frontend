import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import { useGetAllSubTopicsQuery } from '../../../../api/services/subtopics'
import { useGetTopicQuery } from '../../../../api/services/topics'

const SubTopics = () => {
  const { topicId, '*': url } = useParams()
  const [subtopicId, commentId] = url ? url.match(uuidRegEx) : []



  return (
    <Container>
      <HomePageGrid>
        <Left>
          <UserInformationDisplay />
        </Left>
        <Middle>
          <MainContent>
            <HeaderContainer>
              <Header />
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
