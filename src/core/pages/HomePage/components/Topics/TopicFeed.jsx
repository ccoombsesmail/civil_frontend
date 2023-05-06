import React from 'react'


import useBindDispatch from '../../../../hooks/redux/useBindDispatch'
import uiActionCreators from '../../../../../redux/actions/ui'

import Header from './components/Header/Index'
import { Container, BorderContainer } from './Style'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import TopicTabs from './components/TopicTabs/Index'


function Topics() {
  const { openModal } = useBindDispatch(uiActionCreators)
  const { currentUser } = useGetCurrentUser()

  return (
    <Container>
      <BorderContainer>
        <Header user={currentUser} openModal={openModal} />
        <TopicTabs />

      </BorderContainer>
    </Container>
  )
}

export default Topics
