import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useWallet } from '@solana/wallet-adapter-react'



export default () => {
  const wallet = useWallet()
  const { publicKey } = wallet
  console.log(wallet)
  return useCallback(() => {
    return wallet.connected
  }, [wallet])
}
