import { useCallback } from 'react'
import {
  DIDStore, Issuer, DIDBackend, DIDURL,
} from '@elastosfoundation/did-js-sdk'

import { AssistDIDAdapter } from './AssistDIDAdapter.ts'

import { GlobalPublicationService } from './services/global.publication.service.tsx'
import sessionActions from '../../redux/actions/session/index'
import { DIDRequest } from './DIDRequest.ts'
import useBindDispatch from '../hooks/redux/useBindDispatch'
import { STORE_PATH } from './constants'

export default () => {
  const { addDIDSession } = useBindDispatch(sessionActions)
  return useCallback(async (docWithVCs) => {
    DIDBackend.initialize(new AssistDIDAdapter('mainnet'))

    const rootPath = STORE_PATH
    const store = await DIDStore.open(rootPath)
    const storePass = 'pwd'
    const rootidentity = await store.loadRootIdentity()
    let doc = await rootidentity.newDid(storePass)
    doc = docWithVCs || doc
    const methodSpecificId = doc.getSubject().getMethodSpecificId()

    const didReq = await DIDRequest.create(doc, doc.getDefaultPublicKeyId(), storePass)
    const pubService = new GlobalPublicationService()
    await pubService.publishDIDFromRequest(methodSpecificId, didReq, 'nothin', false)

    store.close()
  }, [])
}
