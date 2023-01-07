import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Container, Line, MainContent, HeaderContainer,
} from './Style'
import {
  SubTopicsGrid, Left, Middle, Right,
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

  return (
    <Container>
      <SubTopicsGrid>
        <Left>
          <UserInformationDisplay />
        </Left>
        <Middle>
          <MainContent>
            <HeaderContainer>
              <Header />
            </HeaderContainer>
            <Line />
            { commentId ? (
              <>
                <ParentComment topicId={topicId} commentId={commentId} />
              </>
            ) : null}
          </MainContent>
        </Middle>
        {document.documentElement.clientWidth <= 1250 ? <SubTopicsRouter /> : null }
        <Right>
          <Recommendations />
        </Right>
      </SubTopicsGrid>
      {document.documentElement.clientWidth > 1250 ? <SubTopicsRouter /> : null }
    </Container>

  )
}

export default SubTopics
