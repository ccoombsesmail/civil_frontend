import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Container, MainContent, HeaderContainer,
} from './Style'
import {
  DiscussionsGrid, Left, Middle, Right,
} from '../Style'

import Header from './components/Header/Index'
import ParentComment from './components/ParentComment/Index'

import DiscussionsRouter from './components/DiscussionsRouter/Index'
import UserInformationDisplay from '../../UserInformationDisplay/Index'
import Recommendations from '../RightSection/components/Recommendations/Index'

function Discussions() {
  const { spaceId, commentId } = useParams()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Container isOpen={isOpen}>
      <DiscussionsGrid isOpen={isOpen}>
        <Left>
        { isOpen ? <UserInformationDisplay isOpen={isOpen} /> : null }
        </Left>
        <Middle>
          <MainContent>
            <HeaderContainer>
              <Header isOpen={isOpen} setIsOpen={setIsOpen} />
              { commentId ? (
                <ParentComment spaceId={spaceId} commentId={commentId} />
              ) : null}
            </HeaderContainer>
             <DiscussionsRouter /> 
          </MainContent>
        </Middle>
        <Right>
          <Recommendations />
        </Right>
      </DiscussionsGrid>
      {/* {document.documentElement.clientWidth > 1250 ? <DiscussionsRouter /> : null } */}
    </Container>

  )
}

export default Discussions
