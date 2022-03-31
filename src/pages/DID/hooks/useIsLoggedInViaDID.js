import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import {
  DIDStore,
} from '@elastosfoundation/did-js-sdk'

export default () => {
  const [isLoggedInViaDID, setIsLoggedInViaDID] = useState(false)
  const user = useSelector((s) => s.session.currentUser)

  useEffect(async () => {
    try {
      const rootPath = 'root/store'
      const store = await DIDStore.open(rootPath)
      const storeIds = await store.listRootIdentities()
      store.close()
      setIsLoggedInViaDID(storeIds.length > 0)
      return
    } catch {
      console.log("Noope")
      setIsLoggedInViaDID(false)
    }
  }, [user])
  return isLoggedInViaDID
}
