import React from 'react'
import UserIcon from '../../../../../../../CommonComponents/UserIcon/Index'
import { CREATE_TOPIC } from '../../../../../../../App/Modal/Index'
import { HeaderContainer, FlexDiv } from './Style/index'
import ExpandButton from '../../../../../../../CommonComponents/Buttons/ExpandButton/Index'

const Header = ({ user, openModal }) => (
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
      <ExpandButton
        type="button"
        height="2.5vw"
        backgroundColor="var(--m-primary-btn-color)"
        onClick={() => openModal(CREATE_TOPIC)}
        width="100%"
      >
        Create Topic +
      </ExpandButton>
    </FlexDiv>
  </HeaderContainer>
)

export default Header
