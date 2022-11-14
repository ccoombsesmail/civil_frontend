/* eslint-disable no-case-declarations */
import { useUser } from '@clerk/clerk-react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import {
  CIVIC_USER, CLERK_USER, ELASTOS_USER,
} from '../../../enums/session_type'
import useBindDispatch from '../redux/useBindDispatch'
import sessionActions from '../../../redux/actions/session'
import userActions from '../../../redux/actions/users'

import useGetDefaultDID from '../../DID/hooks/useGetDefaultDID'

export default () => {
  const currentUser = useSelector((s) => s.session.currentUser)

  const {
    getCurrentUser,
    upsertDidUser,
    addDIDSession,
    // logout,
  } = useBindDispatch(sessionActions, userActions)
  const { user: clerkUser, isLoaded, isSignedIn } = useUser({ withAssertions: true })
  const getDefaultDID = useGetDefaultDID()
  const wallet = useWallet()

  useEffect(() => {
    const initUser = async () => {
      const prevSignInMethod = localStorage.getItem('previousSignInMethod')
      switch (prevSignInMethod) {
        case CLERK_USER:
          if (clerkUser) {
            await getCurrentUser(clerkUser?.id)
          }
          break
        case ELASTOS_USER:
          const defaultDID = await getDefaultDID()
          if (defaultDID) {
            const doc = await defaultDID.resolve()
            const { value: username } = doc.getCredential('username')?.getSubject().getProperties() || {}
            await upsertDidUser({
              userId: doc.getSubject().repr,
              username: username || doc.getSubject().getMethodSpecificId(),
              iconSrc: '',
            })
            addDIDSession({
              did: defaultDID, doc, username, iconSrc: '', sessionType: ELASTOS_USER,
            })
            await getCurrentUser(doc.getSubject().repr, true)
          }
          break
        case CIVIC_USER:
          if (!wallet.wallet) wallet.select(localStorage.getItem('walletName2'))
          await wallet.connect()
          break
        default:
          break
      }
    }
    if (isLoaded) initUser()
  }, [isLoaded, wallet])

  useEffect(() => {
    if (wallet.connected && !currentUser) {
      localStorage.setItem('previousSignInMethod', CIVIC_USER)
      localStorage.setItem('walletName2', wallet.wallet.adapter.name)
    }
    const sessionListener = async () => {
      if (wallet.connected && !currentUser) {
        const { publicKey } = wallet
        await upsertDidUser({
          userId: publicKey.toBase58(),
          username: publicKey.toBase58(),
          iconSrc: '',
        })
        await getCurrentUser(publicKey.toBase58(), true)
        console.log(wallet)
        localStorage.setItem('previousSignInMethod', CIVIC_USER)
        localStorage.setItem('walletName2', wallet.wallet.adapter.name)
      } else if (isSignedIn) localStorage.setItem('previousSignInMethod', CLERK_USER)
      else if (currentUser?.ELASTOS_USER) localStorage.setItem('previousSignInMethod', ELASTOS_USER)
    }
    sessionListener()
  }, [wallet.connected, isSignedIn, currentUser])
}
