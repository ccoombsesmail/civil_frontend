import { useCallback } from 'react'
import {
  RootIdentity, DIDStore, DIDBackend, Issuer, DIDDocument,
} from '@elastosfoundation/did-js-sdk'

import { AssistDIDAdapter } from '../AssistDIDAdapter.ts'
import { Logger } from '../logger.ts'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import sessionActions from '../../../redux/actions/session'
import userActions from '../../../redux/actions/users/index'
import usePublishDid from '../usePublishDid'

const STORE_PASS = 'pwd'

export default () => {
  const { addDIDSession, upsertDidUser } = useBindDispatch(sessionActions, userActions)
  const publishDID = usePublishDid()
  return useCallback(async (mnemonic) => {
    DIDBackend.initialize(new AssistDIDAdapter('mainnet'))
    // DIDBackend.initialize(new DefaultDIDAdapter('https://api.elastos.io/eid'))
    const rootPath = 'root/store'
    const store = await DIDStore.open(rootPath)
    const identity = RootIdentity.createFromMnemonic('debris lend tell project position easily sponsor cabin brave wide alarm witness', 'password', store, STORE_PASS, true)
    // 'debris lend tell project position easily sponsor cabin brave wide alarm witness'

    await identity.synchronize()
    const dids = await store.listDids()

    const props = {
      username: 'JohnBoy',
      gender: 'Male',
      nation: 'Singapore',
    }
    if (dids.length > 0) {
      const rootidentity = await store.loadRootIdentity()
      const doc = await rootidentity.getDefaultDid().resolve()
      doc.getMetadata().attachStore(store)
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

      // Add or update DID user in databse
      upsertDidUser({
        userId: dids[0].getMethodSpecificId(),
        username: dids[0].getMethodSpecificId(),
      })

      // Add  DID session data to redux store
      addDIDSession({ did: dids[0] })
      Logger.log('Restore Mnemonic', dids)
    } else {
      Logger.log('No dids restored.')
    }
    store.close()
    return identity
  }, [])
}
