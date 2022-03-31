import { useEffect, useState } from 'react'
import {
  DIDStore, DID, DIDDocument
} from '@elastosfoundation/did-js-sdk'

export default () => {
  const [defaultDID, setDefaultDID] = useState(null)
  useEffect(async () => {
    try {
      const rootPath = 'root/store'
      const store = await DIDStore.open(rootPath)
      const rootIdentity = await store.loadRootIdentity()
      const did = rootIdentity?.getDefaultDid()
      store.close()
      setDefaultDID(did)
    } catch {
      console.log("No DID")
    }
 
  }, [])
  return defaultDID
}
