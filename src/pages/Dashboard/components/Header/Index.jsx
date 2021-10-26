import React from 'react'
import ProgressBar from '../../../CommonComponents/ProgressBar/Index'
import useOpenModal from '../../../hooks/useOpenModal'

import { ICON_FORM } from '../../../App/Modal/Index'
import { Container, FlexDiv, UserIcon } from './Style'

const Header = ({ user }) => {
  const openModal = useOpenModal(ICON_FORM)
  return (
    <Container>
      <h1>{user?.username}</h1>
      <FlexDiv>
        <UserIcon src={user?.iconSrc} onClick={openModal} />
        <ProgressBar value={user?.civility} maxValue={20} />
      </FlexDiv>
    </Container>
  )

}

export default Header
