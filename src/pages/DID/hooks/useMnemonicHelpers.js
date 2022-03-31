import { useCallback } from 'react'
import {
  Mnemonic, DIDStore,
} from '@elastosfoundation/did-js-sdk'

export const useGenerateAndStoreMnemonic = () => useCallback(async () => {
  const rootPath = 'root/store'
  const store = await DIDStore.open(rootPath)
  const mg = Mnemonic.getInstance()
  const mnemonic = mg.generate()
  localStorage.setItem('mnemonic', mnemonic.trim())
  store.close()
  return mnemonic
}, [])

export const useValidateMnemonic = () => useCallback((userEnteredMnemonic) => {
  const prevGeneratedMnemonic = localStorage.getItem('mnemonic')
  console.log(userEnteredMnemonic)
  console.log(prevGeneratedMnemonic)
  console.log(userEnteredMnemonic === prevGeneratedMnemonic)

  return userEnteredMnemonic === prevGeneratedMnemonic
}, [])
