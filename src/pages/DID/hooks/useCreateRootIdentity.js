/* eslint-disable max-len */
import { useCallback } from 'react'
import {
  RootIdentity, DIDStore, Issuer, DIDDocument, DIDBackend,
} from '@elastosfoundation/did-js-sdk'
import { AssistDIDAdapter } from '../AssistDIDAdapter.ts'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import sessionActions from '../../../redux/actions/session'
import userActions from '../../../redux/actions/users/index'

const STORE_PASS = 'pwd'
const password = 'password'

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

  return useCallback(async (mnemonic, props) => {
    DIDBackend.initialize(new AssistDIDAdapter('mainnet'))
    const rootPath = 'root/store'
    const store = await DIDStore.open(rootPath)
    const rootidentity = RootIdentity.createFromMnemonic(mnemonic, password, store, STORE_PASS, true)
    const doc = await rootidentity.newDid(STORE_PASS)

    // const methodSpecificId = doc.getSubject().getMethodSpecificId()
    const issuer = new Issuer(doc)
    const db = DIDDocument.Builder.newFromDocument(doc).edit()

    await addVCToDoc(db, issuer, doc, 'firstName', props.firstName)
    await addVCToDoc(db, issuer, doc, 'lastName', props.lastName)
    await addVCToDoc(db, issuer, doc, 'username', props.username)

    const docWithVC = await db.seal(STORE_PASS)
    await docWithVC.publish(STORE_PASS)
    const { value: username } = docWithVC.getCredential('username')?.getSubject().getProperties()

    upsertDidUser({
      userId: docWithVC.getSubject().getMethodSpecificId(),
      username: username || docWithVC.getSubject().getMethodSpecificId(),
    })

    addDIDSession({ did: docWithVC.getSubject(), doc: docWithVC, username })
    store.close()
  }, [])
}
