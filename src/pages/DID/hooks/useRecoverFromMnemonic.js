import { useCallback } from 'react'
import {
  RootIdentity, DIDStore, DIDBackend, DIDDocument,
} from '@elastosfoundation/did-js-sdk'

import { AssistDIDAdapter } from '../AssistDIDAdapter.ts'
import { Logger } from '../logger.ts'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import sessionActions from '../../../redux/actions/session'
import userActions from '../../../redux/actions/users/index'

const STORE_PASS = 'pwd'

export default () => {
  const { addDIDSession, upsertDidUser } = useBindDispatch(sessionActions, userActions)
  return useCallback(async (mnemonic) => {
    DIDBackend.initialize(new AssistDIDAdapter('mainnet'))
    // DIDBackend.initialize(new DefaultDIDAdapter('https://api.elastos.io/eid'))
    const rootPath = 'root/store'
    const store = await DIDStore.open(rootPath)
    const identity = RootIdentity.createFromMnemonic(mnemonic, 'password', store, STORE_PASS, true)
    // 'debris lend tell project position easily sponsor cabin brave wide alarm witness'

    await identity.synchronize()
    const dids = await store.listDids()

    if (dids.length > 0) {
      const doc = DIDDocument(dids[0])
      const { value: username } = doc.getCredential('username')?.getSubject().getProperties()

      upsertDidUser({
        userId: dids[0].getMethodSpecificId(),
        username: dids[0].getMethodSpecificId(),
      })

      addDIDSession({ did: dids[0], doc, username: username || dids[0].getMethodSpecificId() })
      Logger.log('Restore Mnemonic', dids)
    } else {
      Logger.log('No dids restored.')
    }
    store.close()
    return identity
  }, [])
}
