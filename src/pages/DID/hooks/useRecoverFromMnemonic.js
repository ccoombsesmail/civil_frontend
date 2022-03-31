import { useCallback } from 'react'
import {
  RootIdentity, DIDStore, DIDBackend,
} from '@elastosfoundation/did-js-sdk'

import { AssistDIDAdapter } from '../AssistDIDAdapter.ts'
import { Logger } from '../logger.ts'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import sessionActions from '../../../redux/actions/session'

const STORE_PASS = 'pwd'

export default () => {
  const { addDIDSession } = useBindDispatch(sessionActions)
  return useCallback(async (mnemonic) => {
    DIDBackend.initialize(new AssistDIDAdapter('mainnet'))
    // DIDBackend.initialize(new DefaultDIDAdapter('https://api.elastos.io/eid'))
    const rootPath = 'root/store'
    const store = await DIDStore.open(rootPath)
    const identity = RootIdentity.createFromMnemonic(mnemonic, 'password', store, STORE_PASS, true)
    // 'debris lend tell project position easily sponsor cabin brave wide alarm witness'
    await identity.synchronize()
    const dids = await store.listDids()

    // const props = {
    //   username: 'JohnBoy',
    //   gender: 'Male',
    //   nation: 'Singapore',
    // }
    if (dids.length > 0) {
      // const rootidentity = await store.loadRootIdentity()
      // const doc = await rootidentity.getDefaultDid().resolve()
      // doc.getMetadata().attachStore(store)
      // const methodSpecificId = doc.getSubject().getMethodSpecificId()
      // const issuer = new Issuer(doc)
      // const cb = issuer.issueFor(doc.getSubject())
      // const vc = await cb.id('#basicProfileInformation')
      //   .type('SelfProclaimedCredential')
      //   .properties(props)
      //   .seal(STORE_PASS)
      // vc.getMetadata().attachStore(doc.getStore())
      // await vc.declare(null, STORE_PASS)
      addDIDSession({ did: dids[0] })
      Logger.log('Restore Mnemonic', dids)
    } else {
      Logger.log('No dids restored.')
    }
    store.close()
    return identity
  }, [])
}
