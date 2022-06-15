/* eslint-disable max-len */
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { io } from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { DIDBackend, DefaultDIDAdapter } from '@elastosfoundation/did-js-sdk'
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
  DIDBackend.initialize(new DefaultDIDAdapter('mainnet'))
  const dispatch = useDispatch()
  const currentUser = useSelector((s) => s.session.currentUser)
  useSetupInterceptorsEffect()

  const getDefaultDID = useGetDefaultDID()
  const { user } = useUser({ withAssertions: true })

  const {
    getAllEnums,
    getCurrentUser,
    addDIDSession,
    logout,
    upsertDidUser,
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
        getCurrentUser(user?.id)
      } else if (defaultDID) {
        const docExistsButNotValid = currentUser?.doc && !currentUser.doc.isValid()
        if (!currentUser?.doc || docExistsButNotValid) {
          const doc = await defaultDID.resolve()
          const { value: username } = doc.getCredential('username')?.getSubject().getProperties() || {}
          console.log(doc.getCredential('username'))
          // const { value: firstName } = doc.getCredential('firstName')?.getSubject().getProperties() || {}
          // const { value: lastName } = doc.getCredential('lastName')?.getSubject().getProperties() || {}
          const { value: avatar } = doc.getCredential('avatar')?.getSubject().getProperties() || {}
          upsertDidUser({
            userId: doc.getSubject().repr,
            username: username || doc.getSubject().getMethodSpecificId(),
            iconSrc: avatar || '',
          })
          addDIDSession({
            did: defaultDID, doc, username, iconSrc: avatar,
          })
        }
      } else {
        logout()
      }
    }
    setupInitUser()
  }, [user, getDefaultDID])
}
