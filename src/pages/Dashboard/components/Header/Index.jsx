import React from 'react'
import ProgressBar from '../../../CommonComponents/ProgressBar2/Index'
import useOpenModal from '../../../hooks/useOpenModal'

import { ICON_FORM } from '../../../App/Modal/Index'
import { Container, FlexDiv, UserIcon } from './Style'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import { longUsernameDisplay } from '../../../../generic/string/longUsernameDisplay'

const Header = () => {
  const openModal = useOpenModal(ICON_FORM)
  const { currentUser: user } = useGetCurrentUser()
  return (
    <Container>
      <FlexDiv>
        <UserIcon src={user?.iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png'} onClick={openModal} alt="" />
        <h1>{longUsernameDisplay(user?.username)}</h1>
      </FlexDiv>

      <ProgressBar userLevelData={user?.userLevelData} />
    </Container>
  )
}

export default Header
