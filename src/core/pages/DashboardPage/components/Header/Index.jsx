import React, { useCallback, useMemo } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import ProgressBar from '../../../../CommonComponents/ProgressBar2/Index'

import {
  Container, UserIcon, UserIconEditContainer, WalletContainer,
} from './Style'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { longUsernameDisplay } from '../../../../../generic/string/longUsernameDisplay'
import useModal from '../../../../CommonComponents/Lexical/hooks/useModal.tsx'
import UploadIconForm from '../UploadIconForm/Index'
import { EditIcon, SolanaIcon } from '../../../../../svgs/svgs'
import ExpandButton from '../../../../CommonComponents/Buttons/ExpandButton/Index'

function Header() {
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
      <WalletContainer>
        <WalletMultiButton />
        {/* <ExpandButton icon={<SolanaIcon />}> Manage Wallet </ExpandButton> */}
        {
         JSON.parse(localStorage.getItem('walletName')) === 'Torus' ? (
           <div className="wallet-adapter-dropdown">
             <button
               className="wallet-adapter-button wallet-adapter-button-trigger"
               tabIndex="0"
               type="button"
               onClick={() => window.open('https://solana.tor.us/wallet/home', '_blank')}
             >
               <i className="wallet-adapter-button-start-icon">
                 <SolanaIcon />
               </i>
               Manage Wallet
             </button>
             <ul aria-label="dropdown-list" className="wallet-adapter-dropdown-list false" role="menu">
               <li className="wallet-adapter-dropdown-list-item" role="menuitem">Copy address</li>
               <li className="wallet-adapter-dropdown-list-item" role="menuitem">Change wallet</li>
               <li className="wallet-adapter-dropdown-list-item" role="menuitem">Disconnect</li>
             </ul>

           </div>
         ) : null
        }
      </WalletContainer>
      <ProgressBar userLevelData={user?.userLevelData} />
    </Container>
  )
}

export default Header
