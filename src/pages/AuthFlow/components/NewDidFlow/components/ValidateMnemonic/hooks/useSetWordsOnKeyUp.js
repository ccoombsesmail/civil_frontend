import { useCallback, useMemo, useState } from 'react'
import { useValidateMnemonic } from '../../../../../../DID/hooks/useMnemonicHelpers'

export default (enteredWords, setEnteredWords, setValidatedMnemonic) => {
  const validateMnemonic = useValidateMnemonic()
  const [count, setCount] = useState(0)
  const setWordsOnKeyUp = useCallback((e) => {
    const { index } = e.target.dataset
    const val = e.target.value
    setEnteredWords(Object.assign(enteredWords, { [index]: val }))
    setCount((prev) => prev + 1)
  }, [])

  const isValidated = useMemo(() => {
    const currentMnemonicString = Object.values(enteredWords).join(' ')
    setValidatedMnemonic(validateMnemonic(currentMnemonicString))
  }, [enteredWords, count])

  return [setWordsOnKeyUp, isValidated]
}
