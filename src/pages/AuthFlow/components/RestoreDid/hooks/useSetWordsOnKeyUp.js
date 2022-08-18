import { useCallback } from 'react'
import useRecoverFromMnemonic from '../../../../DID/hooks/useRecoverFromMnemonic'

export default (enteredWords, setEnteredWords) => {
  const recoverMnemonic = useRecoverFromMnemonic()
  const setWordsOnKeyUp = useCallback((e) => {
    const { index } = e.target.dataset
    const val = e.target.value
    setEnteredWords(Object.assign(enteredWords, { [index]: val }))
  }, [])

  const restoreFromMnemonic = useCallback(async () => {
    const currentMnemonicString = Object.values(enteredWords).join(' ')
    recoverMnemonic(currentMnemonicString)
  }, [enteredWords])

  return [setWordsOnKeyUp, restoreFromMnemonic]
}
