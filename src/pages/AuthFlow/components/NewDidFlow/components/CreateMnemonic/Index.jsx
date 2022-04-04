import React, { useState, useEffect } from 'react'
import { useGenerateAndStoreMnemonic } from '../../../../../DID/hooks/useMnemonicHelpers'
import { WordList, Word } from './Style'

const CreateMnemonic = () => {
  const [words, setWords] = useState([])
  const generateAndStoreMnemonic = useGenerateAndStoreMnemonic()
  useEffect(() => {
    const genAndSetMnemonic = async () => {
      const mnemonicWordsString = await generateAndStoreMnemonic()
      setWords(mnemonicWordsString.split(' '))
    }
    genAndSetMnemonic()
  }, [])
  return (
    <div>
      <WordList>
        { words.map((word, i) => <Word key={String(i)}>{word}</Word>) }
      </WordList>
    </div>
  )
}

export default CreateMnemonic
