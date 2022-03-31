import { useCallback } from 'react'
import {
  DIDStore, Issuer, DIDBackend, DIDURL,
} from '@elastosfoundation/did-js-sdk'

import { AssistDIDAdapter } from './AssistDIDAdapter.ts'

import { GlobalPublicationService } from './services/global.publication.service.tsx'
import sessionActions from '../../redux/actions/session/index'
import { DIDRequest } from './DIDRequest.ts'
import useBindDispatch from '../hooks/redux/useBindDispatch'

export default () => {
  const { addDIDSession } = useBindDispatch(sessionActions)
  return useCallback(async () => {
  // DIDBackend.initialize(DIDAdapter)
    DIDBackend.initialize(new AssistDIDAdapter('mainnet'))

    const rootPath = 'root/store'
    const store = await DIDStore.open(rootPath)
    const storePass = 'pwd'
    const rootidentity = await store.loadRootIdentity()
    const doc = await rootidentity.newDid(storePass)

    const methodSpecificId = doc.getSubject().getMethodSpecificId()
    const issuer = new Issuer(doc)
    const cb = issuer.issueFor(doc.getSubject())
    // create self-claimed credential
    const props = {
      name: 'John',
      gender: 'Male',
      nation: 'Singapore',
      language: 'English',
      email: 'john@example.com',
      twitter: '@john',
    }

    const didReq = await DIDRequest.create(doc, doc.getDefaultPublicKeyId(), storePass)
    const pubService = new GlobalPublicationService()
    await pubService.publishDIDFromRequest(methodSpecificId, didReq, 'nothin', false)
    // dispatch to redux store here
    const vc = await cb.id('#basicProfile')
      .type('BasicProfileCredential', 'SelfProclaimedCredential')
      .properties(props)
      .seal(storePass)
    vc.getMetadata().attachStore(doc.getStore())
    const didURL = DIDURL.fromDID(doc.getController())
    const res = await vc.declare(didURL, storePass)
    console.log(res)
    addDIDSession(didReq)

    store.close()
  }, [])
}
