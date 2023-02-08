import React, { useState } from 'react'
import useSetWordsOnKeyUp from './hooks/useSetWordsOnKeyUp'
import { WordList, WordInput } from './Style'
import { OuterContainer, ButtonContainer } from '../Style'

import Button from '../../../CommonComponents/Buttons/ExpandButton/Index'

const RestoreDid = () => {
  const [enteredWords, setEnteredWords] = useState({})
  const [setWordsOnKeyUp, restoreFromMnemonic] = useSetWordsOnKeyUp(enteredWords, setEnteredWords)
  console.log(enteredWords)
  return (
    <OuterContainer>
      <WordList>
        {Array.from({ length: 12 }, (v, i) => i).map((index) => <WordInput placeholder={`${index}.`} key={String(index)} type="text" data-index={index} onKeyUp={setWordsOnKeyUp} />) }
      </WordList>
      <ButtonContainer>
        <Button
          type="button"
          backgroundColor="var(--m-elastos-theme)"
          onClick={restoreFromMnemonic}
        >
          Import
        </Button>
      </ButtonContainer>
    </OuterContainer>
  )
}
export default RestoreDid
