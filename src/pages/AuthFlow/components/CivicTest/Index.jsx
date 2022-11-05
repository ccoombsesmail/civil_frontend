import React, { useMemo } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { clusterApiUrl } from '@solana/web3.js'
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import Gateway from '../../../../civic/components/Gateway/Gateway'
import { Container } from './Style'

const CivicTest = () => {
  // const network = WalletAdapterNetwork.Devnet
  // const endpoint = useMemo(() => clusterApiUrl(network), [network])
  // const wallets = useMemo(
  //   () => [
  //     new PhantomWalletAdapter(),
  //     new GlowWalletAdapter(),
  //     new SolflareWalletAdapter({ network }),
  //     new TorusWalletAdapter(),
  //     new SolletWalletAdapter({ network }),
  //   ],
  //   [network],
  // )
  console.log('')
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
