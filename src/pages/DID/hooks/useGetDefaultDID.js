import { useCallback } from 'react'
import {
  DIDStore,
} from '@elastosfoundation/did-js-sdk'

export default () => useCallback(async () => {
  try {
    const rootPath = 'root/store'
    const store = await DIDStore.open(rootPath)
    const rootIdentity = await store.loadRootIdentity()
    const did = rootIdentity?.getDefaultDid()
    store.close()
    return did
  } catch {
    console.log('No DID')
    return ''
  }
  // return defaultDID
}, [])
