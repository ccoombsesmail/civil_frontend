import React, { useState } from 'react'
import useSetWordsOnKeyUp from './hooks/useSetWordsOnKeyUp'
import { WordList, WordInput } from './Style'

const RestoreDid = () => {
  const [enteredWords, setEnteredWords] = useState({})
  const [setWordsOnKeyUp, restoreFromMnemonic] = useSetWordsOnKeyUp(enteredWords, setEnteredWords)

  return (
    <div style={{ width: '60vw', marginLeft: '20vw' }}>
      <WordList>
        {Array.from({ length: 12 }, (v, i) => i).map((index) => <WordInput key={String(index)} type="text" data-index={index} onKeyUp={setWordsOnKeyUp} />) }
      </WordList>
      <button type="button" onClick={restoreFromMnemonic}>Import</button>
    </div>
  )
}
export default RestoreDid
