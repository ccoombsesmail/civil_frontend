import React, { useState, useEffect } from 'react'
import { useGenerateAndStoreMnemonic } from '../../../../../DID/hooks/useMnemonicHelpers'
import { WordList, Word } from './Style'

const CreateMnemonic = () => {
  const [words, setWords] = useState([])
  const generateAndStoreMnemonic = useGenerateAndStoreMnemonic()
  useEffect(async () => {
    const mnemonicWordsString = await generateAndStoreMnemonic()
    setWords(mnemonicWordsString.split(' '))
  }, [])
  return (
    <div>
      <WordList>
        { words.map((word) => <Word>{word}</Word>) }
      </WordList>
    </div>
  )
}

export default CreateMnemonic
