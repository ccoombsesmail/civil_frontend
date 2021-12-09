import React from 'react'
import ThemeButton from '../../../CommonComponents/Button/Index'

import { CREATE_TOPIC } from '../../../App/Modal/Index'
import { HeaderContainer, UserIcon, FlexDiv } from './Style/index'

const Header = ({ user, openModal }) => {
  console.log('')
  return (
    <HeaderContainer>
      <UserIcon src={user?.iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png'} />
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
