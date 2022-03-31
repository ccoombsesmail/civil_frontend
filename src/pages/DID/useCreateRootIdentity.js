import { useCallback } from 'react'
import {
  RootIdentity, DIDStore,
} from '@elastosfoundation/did-js-sdk'
import usePublishDid from './usePublishDid'

const STORE_PASS = 'pwd'
const password = 'password'
export default () => {
  const publishDID = usePublishDid()
  return useCallback(async (mnemonic) => {
    const rootPath = 'root/store'
    const store = await DIDStore.open(rootPath)
    const identity = RootIdentity.createFromMnemonic(mnemonic, password, store, STORE_PASS, true)
    store.close()
    await publishDID()
    return identity
  }, [])
}
