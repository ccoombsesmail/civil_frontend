// import { useUser } from '@clerk/clerk-react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useEffect, useState, useRef } from 'react'
import {
  CIVIC_USER,
} from '../../../enums/session_type'
import { useUpsertDidUserMutation, useLazyGetCurrentUserQuery } from '../../../api/services/session.ts'

export default () => {
  const [userId, setUserId] = useState(null)
  const [signInMethod, setSignInMethod] = useState(localStorage.getItem('previousSignInMethod') || null)
  const prevSignInMethod = useRef(localStorage.getItem('previousSignInMethod') || null)

  const [upsertDidUser, { isLoading: isUpsertLoading }] = useUpsertDidUserMutation()

  const wallet = useWallet()

  const [trigger, { isLoading: isUserLoading, isUninitialized }] = useLazyGetCurrentUserQuery()

  useEffect(() => {
    const handleStorageChange = async () => {
     
        wallet.select(localStorage.getItem('walletName')?.replace(/\\/g, '').replace(/"/g, ''))
        const { publicKey } = wallet
        await upsertDidUser({
          userId: publicKey.toBase58(),
          username: publicKey.toBase58(),
          iconSrc: '',
        })
        await trigger(publicKey?.toBase58())
        setUserId(publicKey?.toBase58())
        prevSignInMethod.current = signInMethod

    }

    const setupUser = async () => {
      switch (signInMethod) {
        case CIVIC_USER: {
          // wallet.select(localStorage.getItem('walletName')?.replace(/\\/g, '').replace(/"/g, ''))
          console.log("HERE")
          wallet.select("Phantom")
          await wallet.connect()
          const { publicKey } = wallet
          if (publicKey && !isUpsertLoading && !isUserLoading && isUninitialized && prevSignInMethod.current !== null) {
            await trigger(publicKey?.toBase58())
            setUserId(publicKey?.toBase58())
          }

          break
        }
        default:
          setUserId(null)
          break
      }
    }
    if (prevSignInMethod.current === null && signInMethod === CIVIC_USER && !isUpsertLoading) {
      handleStorageChange()
    }
    setupUser()
  }, [wallet, prevSignInMethod, signInMethod, isUpsertLoading, isUserLoading])

  useEffect(() => {
    const sessionListener = async () => {
      if (wallet.connected) {
        setSignInMethod(CIVIC_USER)
        localStorage.setItem('previousSignInMethod', CIVIC_USER)
      }
    }
    sessionListener()
  }, [wallet.connected])

  return { userId }
}
