/* eslint-disable max-len */
import { useCallback } from 'react'
import {
  DIDStore, Issuer, DIDDocument, DIDBackend,
} from '@elastosfoundation/did-js-sdk'
import { useSelector } from 'react-redux'
import { AssistDIDAdapter } from '../AssistDIDAdapter.ts'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import sessionActions from '../../../redux/actions/session'
import userActions from '../../../redux/actions/users/index'

const STORE_PASS = 'pwd'
// const password = 'password'

const addVCToDoc = async (db, issuer, doc, id, value) => {
  const cb = issuer.issueFor(doc.getSubject())
  if (!value) return
  const vc = await cb.id(`#${id}`)
    .type('SelfProclaimedCredential')
    .properties({ value })
    .seal(STORE_PASS)
  vc.getMetadata().attachStore(doc.getStore())
  db.addCredential(vc)
}

export default () => {
  const { addDIDSession, upsertDidUser } = useBindDispatch(sessionActions, userActions)
  const currentUser = useSelector((s) => s.session.currentUser)
  return useCallback(async (props) => {
    console.log(props)
    DIDBackend.initialize(new AssistDIDAdapter('mainnet'))
    const rootPath = 'root/store'
    const store = await DIDStore.open(rootPath)
    const { doc } = currentUser
    const issuer = new Issuer(doc)
    const db = DIDDocument.Builder.newFromDocument(doc).edit()
    const { value: username } = doc.getCredential('username')?.getSubject().getProperties() || {}
    // const { value: firstName } = doc.getCredential('firstName')?.getSubject().getProperties() || {}
    // const { value: lastName } = doc.getCredential('lastName')?.getSubject().getProperties() || {}

    // await addVCToDoc(db, issuer, doc, 'firstName', firstName)
    // await addVCToDoc(db, issuer, doc, 'lastName', lastName)
    // await addVCToDoc(db, issuer, doc, 'username', username)
    await addVCToDoc(db, issuer, doc, 'avatar', props.file)

    const docWithVC = await db.seal(STORE_PASS)
    await docWithVC.publish(STORE_PASS)
    // const { value: usernameAfter } = docWithVC.getCredential('username')?.getSubject().getProperties()
    const { value: avatar } = docWithVC.getCredential('avatar')?.getSubject().getProperties()

    upsertDidUser({
      userId: docWithVC.getSubject().repr,
      username: username || docWithVC.getSubject().getMethodSpecificId(),
      iconSrc: avatar,
    })

    addDIDSession({ did: docWithVC.getSubject(), doc: docWithVC, username })
    store.close()
  }, [])
}
