import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import {
  DIDStore, DIDBackend,
} from '@elastosfoundation/did-js-sdk'
import { STORE_PATH } from '../constants'

import { AssistDIDAdapter } from '../AssistDIDAdapter.ts'

export default () => {
  const user = useSelector((s) => s.session.currentUser)
  DIDBackend.initialize(new AssistDIDAdapter('testnet'))

  return useCallback(async () => {
    try {
      const rootPath = STORE_PATH
      const store = await DIDStore.open(rootPath)
      const storeIds = await store.listRootIdentities()
      if (storeIds.length > 0) {
        await store.synchronize()
        store.close()
        return true
      }
      return false
      // return (storeIds.length > 0)
    } catch {
      return false
    }
  }, [user])
}
