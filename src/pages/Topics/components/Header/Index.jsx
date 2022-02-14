import React from 'react'
import ThemeButton from '../../../CommonComponents/Button/Index'
import UserIcon from '../../../CommonComponents/UserIcon/Index'
import { CREATE_TOPIC } from '../../../App/Modal/Index'
import { HeaderContainer, FlexDiv } from './Style/index'

const Header = ({ user, openModal }) => {
  console.log('')
  return (
    <HeaderContainer>
      <UserIcon width="4vw" iconSrc={user?.iconSrc} username={user?.username} userId={user?.id} />
      <FlexDiv>
        <p className="text-focus-in">
          Hey
          {' '}
          <b>{user?.username || 'Friend'}</b>
          {'! '}
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
