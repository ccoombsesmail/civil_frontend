import React from 'react'
import ThemeButton from '../../../CommonComponents/Button/Index'

import { CREATE_TOPIC } from '../../../App/Modal/Index'
import { HeaderContainer, UserIcon, FlexDiv } from './Style/index'

const Header = ({ user, openModal }) => {
  console.log('')
  console.log(user)
  return (
    <HeaderContainer>
      <UserIcon src={user?.iconSrc} />
      <FlexDiv>
        <p>
          Hey
          {' '}
          <b>{user?.username}</b>
          {'. '}
          Have Something You Would Like To Discuss?
        </p>
        <ThemeButton type="button" onClick={() => openModal(CREATE_TOPIC)} width="100%">
          Create Topic +
        </ThemeButton>
      </FlexDiv>
    </HeaderContainer>
  )
}

export default Header
