/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { useCallback } from 'react'
import {
  Mnemonic, DIDStore,
} from '@elastosfoundation/did-js-sdk'
import { STORE_PATH } from '../constants';

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export const useGenerateAndStoreMnemonic = () => useCallback(async () => {
  const rootPath = STORE_PATH
  const store = await DIDStore.open(rootPath)
  const mg = Mnemonic.getInstance()
  const mnemonic = mg.generate()
  localStorage.setItem('original', mnemonic.trim())
  localStorage.setItem('mnemonic', shuffle(mnemonic.split(' ')).join(' ').trim())
  store.close()
  return mnemonic
}, [])

export const useValidateMnemonic = () => useCallback((userEnteredMnemonic) => {
  const prevGeneratedMnemonic = localStorage.getItem('original')
  return userEnteredMnemonic === prevGeneratedMnemonic
}, [])
