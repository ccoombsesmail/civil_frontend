import React, { useState } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Dialog } from 'primereact/dialog'

import {
  Container, UserIcon, UserIconEditContainer,
} from './Style'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { longUsernameDisplay } from '../../../../../generic/string/longUsernameDisplay'
import UploadIconForm from '../UploadIconForm/Index'
import { EditIcon, SolanaIcon } from '../../../../../svgs/svgs'

function Header() {
  const [visible, setVisible] = useState(false)
  const { currentUser: user } = useGetCurrentUser()
  return (
    <Container>
      <Dialog header="Change Profile Icon" visible={visible} onHide={() => setVisible(false)}>
        <UploadIconForm closeModal={() => setVisible(false)} />
      </Dialog>
      <UserIconEditContainer>
        <div className="flex">
          <div className="relative mb-5">
            <EditIcon onClick={() => setVisible(true)} />
            <UserIcon src={user?.iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png'} onClick={() => setVisible(true)} alt="" />
          </div>
          <h1>{longUsernameDisplay(user?.username)}</h1>

        </div>
        <WalletMultiButton />
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
      </UserIconEditContainer>
      {/* <WalletContainer>
        <WalletMultiButton />
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
      </WalletContainer> */}
    </Container>
  )
}

export default Header
