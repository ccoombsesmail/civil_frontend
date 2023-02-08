import React from 'react'
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import Gateway from '../../../../civic/components/UniquenessGateway/UniquenessGateway'
import { Container } from './Style'

function CivicTest() {
  return (
    <Container>

      <WalletModalProvider>
        <WalletMultiButton />
        <br />
        <Gateway />
      </WalletModalProvider>
    </Container>
  )
}
export default CivicTest
