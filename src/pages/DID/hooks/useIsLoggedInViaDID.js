import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import {
  DIDStore,
} from '@elastosfoundation/did-js-sdk'
import { STORE_PATH } from '../constants'

export default () => {
  const user = useSelector((s) => s.session.currentUser)

  return useCallback(async () => {
    try {
      const rootPath = STORE_PATH
      const store = await DIDStore.open(rootPath)
      const storeIds = await store.listRootIdentities()
      store.close()
      return (storeIds.length > 0)
    } catch {
      return false
    }
  }, [user])
}
