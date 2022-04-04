import { useCallback } from 'react'
import {
  DIDStore,
} from '@elastosfoundation/did-js-sdk'

// const STORE_PASS = 'secret'

export default () => useCallback(async () => {
  const rootPath = 'root/store'
  const store = await DIDStore.open(rootPath)
  const storeIds = await store.listRootIdentities()
  store.deleteRootIdentity(storeIds[0].id)
  await store.listRootIdentities()
  localStorage.clear()
  store.close()
}, [])
