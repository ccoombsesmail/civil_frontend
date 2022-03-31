import { useCallback } from 'react'
import {
  DIDStore,
} from '@elastosfoundation/did-js-sdk'

// const STORE_PASS = 'secret'

export default () => useCallback(async () => {
  const rootPath = 'root/store'
  const store = await DIDStore.open(rootPath)
  const storeIds = await store.listRootIdentities()
  console.log(storeIds)
  store.deleteRootIdentity(storeIds[0].id)
  const storeIdsNew = await store.listRootIdentities()
  console.log(storeIdsNew)
  localStorage.clear()
  store.close()
}, [])
