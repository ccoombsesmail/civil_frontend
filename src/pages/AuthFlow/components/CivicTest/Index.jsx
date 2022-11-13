import React from 'react'
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import Gateway from '../../../../civic/components/Gateway/Gateway'
import { Container } from './Style'

const CivicTest = () => (
  <Container>

    <WalletModalProvider>
      <WalletMultiButton />
      <br />
      <Gateway />
    </WalletModalProvider>
  </Container>

)
export default CivicTest
