import { useCallback } from 'react'
import { toast } from 'react-toastify'
import {
  RootIdentity, DIDStore, DIDBackend, DIDDocument,
} from '@elastosfoundation/did-js-sdk'

import { AssistDIDAdapter } from '../AssistDIDAdapter.ts'
import { Logger } from '../logger.ts'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import sessionActions from '../../../redux/actions/session'
import userActions from '../../../redux/actions/users/index'
import { STORE_PATH } from '../constants'

const STORE_PASS = 'pwd'

export default () => {
  const { addDIDSession, upsertDidUser } = useBindDispatch(sessionActions, userActions)
  return useCallback(async (mnemonic) => {
    DIDBackend.initialize(new AssistDIDAdapter('testnet'))
    const rootPath = STORE_PATH
    const store = await DIDStore.open(rootPath)
    const identity = RootIdentity.createFromMnemonic(mnemonic, 'password', store, STORE_PASS, true)

    await toast.promise(
      identity.synchronize(),
      {
        pending: 'Restoring Your Identity...',
        success: 'DID Successfully Synced From The Blockchain!',
        error: {
          render({ data: errorData }) {
            const { response } = errorData
            const { data: responseData } = response
            return `${responseData.msg} 🤯 `
          },
        },
      },
    )

    const dids = await store.listDids()
    if (dids.length > 0) {
      const doc = new DIDDocument(dids[0])
      let username = dids[0].getMethodSpecificId()
      if (doc.credentials) username = doc.getCredential('username')?.getSubject()?.getProperties()?.value

      // const { value: username } = doc.getCredential('username')?.getSubject().getProperties()

      upsertDidUser({
        userId: dids[0].repr,
        username,
      })

      addDIDSession({ did: dids[0], doc, username })
      Logger.log('Restore Mnemonic', dids)
    } else {
      Logger.log('No dids restored.')
    }
    store.close()
    return identity
  }, [])
}
