/* eslint-disable max-len */
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { io } from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { DIDBackend, DefaultDIDAdapter } from '@elastosfoundation/did-js-sdk'
import { useWallet } from '@solana/wallet-adapter-react'
import enumActions from '../../../redux/actions/enums'
import userActions from '../../../redux/actions/users/index'
import sessionActions, { addUserActionCreatorClerk } from '../../../redux/actions/session'
import useGetDefaultDID from '../../DID/hooks/useGetDefaultDID'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import useSetupInterceptorsEffect from '../../hooks/auth/useSetupInterceptorsEffect'
import useInitSocketEffect from './useInitSocketEffect'

export default () => {
  const URL = `http://${window.location.hostname}:8093`
  const socket = io(URL, { autoConnect: false })
  DIDBackend.initialize(new DefaultDIDAdapter('testnet'))
  const dispatch = useDispatch()
  const currentUser = useSelector((s) => s.session.currentUser)
  useSetupInterceptorsEffect()

  const getDefaultDID = useGetDefaultDID()
  const { user } = useUser({ withAssertions: true })
  const wallet = useWallet()

  const {
    getAllEnums,
    getUser,
    addDIDSession,
    logout,
    upsertDidUser,
    getCurrentUser,
  } = useBindDispatch(enumActions, sessionActions, userActions)

  useInitSocketEffect(socket)

  useEffect(() => {
    getAllEnums()
  }, [])

  useEffect(() => {
    const setupInitUser = async () => {
      const defaultDID = await getDefaultDID()
      if (user) {
        user.iconSrc = user.profileImageUrl
        dispatch(addUserActionCreatorClerk(user))
        await getCurrentUser(user?.id)
      } else if (defaultDID) {
        const docExistsButNotValid = currentUser?.doc && !currentUser.doc.isValid()
        if (!currentUser?.doc || docExistsButNotValid) {
          const doc = await defaultDID.resolve()
          const { value: username } = doc.getCredential('username')?.getSubject().getProperties() || {}
          // const { value: firstName } = doc.getCredential('firstName')?.getSubject().getProperties() || {}
          // const { value: lastName } = doc.getCredential('lastName')?.getSubject().getProperties() || {}
          const { value: avatar } = doc.getCredential('avatar')?.getSubject().getProperties() || {}
          await upsertDidUser({
            userId: doc.getSubject().repr,
            username: username || doc.getSubject().getMethodSpecificId(),
            iconSrc: avatar || '',
          })
          addDIDSession({
            did: defaultDID, doc, username, iconSrc: avatar,
          })
          await getCurrentUser(doc.getSubject().repr, true)
        }
      } else if (wallet.connected) {
        console.log('look here for wallet', wallet)
        const { publicKey } = wallet
        await upsertDidUser({
          userId: publicKey.toBase58(),
          username: publicKey.toBase58(),
          iconSrc: '',
        })
        addDIDSession({
          did: publicKey.toBase58(), doc: undefined, username: publicKey.toBase58(), iconSrc: null,
        })
        await getCurrentUser(publicKey.toBase58(), true)
        console.log(publicKey.toBase58())
      } else {
        logout()
      }
    }
    setupInitUser()
  }, [user, getDefaultDID, wallet])
}
