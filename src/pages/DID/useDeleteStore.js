import { useCallback } from 'react'
import {
  DIDStore,
} from '@elastosfoundation/did-js-sdk'
import { STORE_PATH } from './constants'

// const STORE_PASS = 'secret'

export default () => useCallback(async () => {
  const rootPath = STORE_PATH
  const store = await DIDStore.open(rootPath)
  const storeIds = await store.listRootIdentities()
  store.deleteRootIdentity(storeIds[0].id)
  await store.listRootIdentities()
  localStorage.clear()
  store.close()
}, [])
