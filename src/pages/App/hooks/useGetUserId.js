import { useUser } from '@clerk/clerk-react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useEffect, useState } from 'react'
import useGetDefaultDID from '../../DID/hooks/useGetDefaultDID'
import {
  CIVIC_USER, CLERK_USER, ELASTOS_USER,
} from '../../../enums/session_type'

export default () => {
  const [userId, setUserId] = useState(null)

  // For Elastos DID users
  const getDefaultDID = useGetDefaultDID()

  // For Civic DID users
  const wallet = useWallet()
  const { publicKey } = wallet

  // For Clerk Users
  const { user: clerkUser, isLoaded } = useUser({ withAssertions: true })

  useEffect(() => {
    const getUserId = async () => {
      const prevSignInMethod = localStorage.getItem('previousSignInMethod')
      switch (prevSignInMethod) {
        case CLERK_USER:
          setUserId(clerkUser?.id)
          break
        case ELASTOS_USER:
          const defaultDID = await getDefaultDID()
          if (defaultDID) {
            const doc = await defaultDID.resolve()
            setUserId(doc.getSubject().repr)
          } else {
            return null
          }
          break
        case CIVIC_USER:
          setUserId(publicKey?.toBase58())
          if (localStorage.getItem('previousSignInMethod') === CIVIC_USER && localStorage.getItem('walletName2') !== 'null' && localStorage.getItem('walletName2')) wallet.select(localStorage.getItem('walletName2'))
          break
        default:
          break
      }
    }
    if (isLoaded) getUserId()
  }, [wallet?.connected, wallet])

  return { userId }
}
