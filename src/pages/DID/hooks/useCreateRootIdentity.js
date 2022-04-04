/* eslint-disable max-len */
import { useCallback } from 'react'
import {
  RootIdentity, DIDStore, Issuer, DIDDocument, DIDBackend,
} from '@elastosfoundation/did-js-sdk'
import { AssistDIDAdapter } from '../AssistDIDAdapter.ts'

const STORE_PASS = 'pwd'
const password = 'password'
export default () => {
  // const publishDID = usePublishDid()
  console.log('create')
  return useCallback(async (mnemonic, props) => {
    DIDBackend.initialize(new AssistDIDAdapter('mainnet'))
    const rootPath = 'root/store'
    const store = await DIDStore.open(rootPath)
    const rootidentity = RootIdentity.createFromMnemonic(mnemonic, password, store, STORE_PASS, true)
    const doc = await rootidentity.newDid(STORE_PASS)

    // const methodSpecificId = doc.getSubject().getMethodSpecificId()
    const issuer = new Issuer(doc)
    const cb = issuer.issueFor(doc.getSubject())
    const vc = await cb.id('#basicProfileInformation')
      .type('SelfProclaimedCredential')
      .properties(props)
      .seal(STORE_PASS)
    vc.getMetadata().attachStore(doc.getStore())
    const db = DIDDocument.Builder.newFromDocument(doc).edit()
    db.addCredential(vc)
    const docWithVC = await db.seal(STORE_PASS)
    await docWithVC.publish(STORE_PASS)

    store.close()
    // await publishDID()
    // return identity
  }, [])
}
