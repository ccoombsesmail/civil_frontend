import React from 'react'

import useBindDispatch from '../../../../hooks/redux/useBindDispatch'
import uiActionCreators from '../../../../../redux/actions/ui'

import Header from './components/Header/Index'
import { Container, BorderContainer } from './Style'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import SpaceTabs from './components/SpaceTabs/Index'

function Spaces() {
  const { openModal } = useBindDispatch(uiActionCreators)
  const { currentUser } = useGetCurrentUser()

  return (
    <Container className="sm:w-full md:w-full">
      <BorderContainer className="sm:w-full  md:w-full">
        <Header user={currentUser} openModal={openModal} />
        <SpaceTabs />

      </BorderContainer>
    </Container>
  )
}

export default Spaces
