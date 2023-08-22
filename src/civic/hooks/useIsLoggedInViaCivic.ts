import { useCallback } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'



export default () => {
  const wallet = useWallet()
  return useCallback(() => {
    return wallet.connected
  }, [wallet])
}
