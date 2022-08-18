/* eslint-disable max-len */
import { useCallback } from 'react'
import { toast } from 'react-toastify'
import {
  RootIdentity, DIDStore, Issuer, DIDDocument, DIDBackend,
} from '@elastosfoundation/did-js-sdk'
import { AssistDIDAdapter } from '../AssistDIDAdapter.ts'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import sessionActions from '../../../redux/actions/session'
import userActions from '../../../redux/actions/users/index'
import { STORE_PATH } from '../constants'

const STORE_PASS = 'pwd'
const password = 'password'

const addVCToDoc = async (db, issuer, doc, id, value) => {
  const cb = issuer.issueFor(doc.getSubject())
  if (!value) return {}
  const vc = await cb.id(`#${id}`)
    .type('SelfProclaimedCredential')
    .properties({ value })
    .seal(STORE_PASS)
  vc.getMetadata().attachStore(doc.getStore())
  return db.addCredential(vc)
}

export default () => {
  const { addDIDSession, upsertDidUser } = useBindDispatch(sessionActions, userActions)

  return useCallback(async (mnemonic, props) => {
    DIDBackend.initialize(new AssistDIDAdapter('testnet'))
    const rootPath = STORE_PATH

    const store = await DIDStore.open(rootPath)
    const rootidentity = RootIdentity.createFromMnemonic(mnemonic, password, store, STORE_PASS, true)
    const doc = await rootidentity.newDid(STORE_PASS, 0, true)

    const issuer = new Issuer(doc)
    let db = DIDDocument.Builder.newFromDocument(doc).edit()

    db = await addVCToDoc(db, issuer, doc, 'username', props.username)

    // db = db.removeProof(db.getSubject())
    const docWithVC = await db.seal(STORE_PASS)

    await toast.promise(
      docWithVC.publish(STORE_PASS),
      {
        pending: 'Creating Your Self Soverign Identity...',
        success: 'DID Successfully Published To The Blockchain!',
        error: {
          render({ data: errorData }) {
            const { response } = errorData
            const { data: responseData } = response
            return `${responseData.msg} 🤯 `
          },
        },
      },
    )

    const { value: username } = docWithVC.getCredential('username')?.getSubject().getProperties()
    upsertDidUser({
      userId: docWithVC.getSubject().repr,
      username: username || docWithVC.getSubject().getMethodSpecificId(),
    })

    addDIDSession({ did: docWithVC.getSubject(), doc: docWithVC, username })
    store.close()
  }, [])
}

// if (props.firstName) await addVCToDoc(db, issuer, doc, 'firstName', props.firstName)
// if (props.lastName) await addVCToDoc(db, issuer, doc, 'lastName', props.lastName)