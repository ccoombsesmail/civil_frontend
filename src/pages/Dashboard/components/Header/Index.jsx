import React, { useCallback } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import ProgressBar from '../../../CommonComponents/ProgressBar2/Index'

import {
  Container, FlexDiv, UserIcon, UserIconEditContainer,
} from './Style'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import { longUsernameDisplay } from '../../../../generic/string/longUsernameDisplay'
import useModal from '../../../CommonComponents/Lexical/hooks/useModal.tsx'
import UploadIconForm from '../UploadIconForm/Index'
import { EditIcon } from '../../../../svgs/svgs'

const Header = () => {
  const [modal, showModal] = useModal()
  const onClick = useCallback(() => {
    showModal('Change Profile Icon', (onClose) => (
      <UploadIconForm closeModal={onClose} />
    ))
  }, [])
  const { currentUser: user } = useGetCurrentUser()
  return (
    <Container>
      {modal}
      <UserIconEditContainer>
        <EditIcon onClick={onClick} />
        <UserIcon src={user?.iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png'} onClick={onClick} alt="" />
        <h1>{longUsernameDisplay(user?.username)}</h1>

      </UserIconEditContainer>
      <WalletMultiButton />
      <ProgressBar userLevelData={user?.userLevelData} />
    </Container>
  )
}

export default Header
