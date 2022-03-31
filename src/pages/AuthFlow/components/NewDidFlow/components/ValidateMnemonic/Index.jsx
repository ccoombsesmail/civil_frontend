import React, { useState } from 'react'
import useSetWordsOnKeyUp from './hooks/useSetWordsOnKeyUp'
import { WordList, WordInput } from './Style'

const ValidateMnemonic = ({ setValidatedMnemonic }) => {
  const [enteredWords, setEnteredWords] = useState({})
  const [setWordsOnKeyUp] = useSetWordsOnKeyUp(enteredWords, setEnteredWords, setValidatedMnemonic)

  return (
    <div>
      <WordList>
        {Array.from({ length: 12 }, (v, i) => i).map((index) => <WordInput type="text" data-index={index} onKeyUp={setWordsOnKeyUp} />) }
      </WordList>
    </div>
  )
}

export default ValidateMnemonic
