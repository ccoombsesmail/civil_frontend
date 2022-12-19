/* eslint-disable no-case-declarations */
import { io } from 'socket.io-client'
import { useEffect } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useUser } from '@clerk/clerk-react'
import {
  CIVIC_USER, CLERK_USER, ELASTOS_USER,
} from '../../../enums/session_type'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import sessionActions from '../../../redux/actions/session'
import userActions from '../../../redux/actions/users'

import { useUpsertDidUserMutation } from '../../../api/services/session.ts'
import useInitSocketEffect from './useInitSocketEffect'

import { useGetAllNotificationsQuery } from '../../../api/services/notifications.ts'
import useGetDefaultDID from '../../DID/hooks/useGetDefaultDID'
// import useGetCivicAuthHeader from '../../../civic/hooks/useGetCivicAuthHeader.ts'

export default (userId, userIsLoading, isError) => {
  const URL = `http://${window.location.hostname}:8093`
  const socket = io(URL, { autoConnect: false })
  const [upsertDidUser] = useUpsertDidUserMutation()
  const {
    addDIDSession,
  } = useBindDispatch(sessionActions, userActions)

  const wallet = useWallet()
  const { isSignedIn } = useUser()
  const { data } = useGetAllNotificationsQuery(userId, {
    skip: !userId || userIsLoading,
  })
  useInitSocketEffect(socket, userId)
  const getDefaultDID = useGetDefaultDID()
  // const getCivicAuthHeader = useGetCivicAuthHeader()

  useEffect(() => {
    const initUser = async () => {
      const prevSignInMethod = localStorage.getItem('previousSignInMethod')
      switch (prevSignInMethod) {
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
          }
          break
        default:
          break
      }
    }
    initUser()
  }, [])

  useEffect(() => {
    const sessionListener = async () => {
      if (wallet.connected && userId) {
        const { publicKey } = wallet
        if (isError) {
          await upsertDidUser({
            userId: publicKey.toBase58(),
            username: publicKey.toBase58(),
            iconSrc: '',
          })
        }

        localStorage.setItem('previousSignInMethod', CIVIC_USER)
        localStorage.setItem('walletName2', wallet.wallet.adapter.name)
      } else if (isSignedIn) {
        localStorage.setItem('previousSignInMethod', CLERK_USER)
      } else if (false) localStorage.setItem('previousSignInMethod', ELASTOS_USER)
    }
    sessionListener()
  }, [wallet.connected, isSignedIn, userId, isError])
}
