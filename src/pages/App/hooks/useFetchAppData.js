/* eslint-disable max-len */
import { useEffect } from 'react'
import { io } from 'socket.io-client'

import enumActions from '../../../redux/actions/enums'
import userActions from '../../../redux/actions/users/index'
import sessionActions from '../../../redux/actions/session'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import useInitSocketEffect from './useInitSocketEffect'

export default () => {
  const URL = `http://${window.location.hostname}:8093`
  const socket = io(URL, { autoConnect: false })

  const {
    getAllEnums,
  } = useBindDispatch(enumActions, sessionActions, userActions)

  useInitSocketEffect(socket)

  useEffect(() => {
    getAllEnums()
  }, [])

  // useEffect(() => {
  //   const setupInitUser = async () => {
  //     const defaultDID = await getDefaultDID()
  //     if (user) {
  //       user.iconSrc = user.profileImageUrl
  //       dispatch(addUserActionCreatorClerk(user))
  //       await getCurrentUser(user?.id)
  //     } else if (defaultDID) {
  //       const docExistsButNotValid = currentUser?.doc && !currentUser.doc.isValid()
  //       if (!currentUser?.doc || docExistsButNotValid) {
  //         const doc = await defaultDID.resolve()
  //         const { value: username } = doc.getCredential('username')?.getSubject().getProperties() || {}
  //         // const { value: firstName } = doc.getCredential('firstName')?.getSubject().getProperties() || {}
  //         // const { value: lastName } = doc.getCredential('lastName')?.getSubject().getProperties() || {}
  //         const { value: avatar } = doc.getCredential('avatar')?.getSubject().getProperties() || {}
  //         await upsertDidUser({
  //           userId: doc.getSubject().repr,
  //           username: username || doc.getSubject().getMethodSpecificId(),
  //           iconSrc: avatar || '',
  //         })
  //         addDIDSession({
  //           did: defaultDID, doc, username, iconSrc: avatar,
  //         })
  //         await getCurrentUser(doc.getSubject().repr, true)
  //       }
  //     } else if (wallet.connected) {
  //       const { publicKey } = wallet
  //       await upsertDidUser({
  //         userId: publicKey.toBase58(),
  //         username: publicKey.toBase58(),
  //         iconSrc: '',
  //       })
  //       addDIDSession({
  //         did: publicKey.toBase58(), doc: undefined, username: publicKey.toBase58(), iconSrc: null,
  //       })
  //       await getCurrentUser(publicKey.toBase58(), true)
  //     } else {
  //       logout()
  //     }
  //   }
  //   setupInitUser()
  // }, [user, getDefaultDID, wallet])
}
