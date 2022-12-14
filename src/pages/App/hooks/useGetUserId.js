import { useUser } from '@clerk/clerk-react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useEffect, useMemo, useState } from 'react'
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

  //For Clerk Users
  const { user: clerkUser, isLoaded } = useUser({ withAssertions: true })

  useEffect(() => {
    const getUserId = async () => {
      const prevSignInMethod = localStorage.getItem('previousSignInMethod')
      console.log(wallet, prevSignInMethod)
      switch (prevSignInMethod) {
        case CLERK_USER:
          setUserId(clerkUser?.id)
        case ELASTOS_USER:
          const defaultDID = await getDefaultDID()
          if (defaultDID) {
            const doc = await defaultDID.resolve()
            setUserId(doc.getSubject().repr)
          } else {
            return null
          }
        case CIVIC_USER:
          setUserId(publicKey?.toBase58())
        default:
          break;
      }
    }
    if (isLoaded) getUserId()
  }, [wallet?.connected, wallet])

  return { userId }
}