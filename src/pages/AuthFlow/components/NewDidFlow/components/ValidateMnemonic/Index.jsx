/* eslint-disable react/jsx-props-no-spreading */
import { Field } from 'formik'
import React, { useState, useCallback, useRef } from 'react'
import { Word } from '../Style'
import {
  WordList, WordInput, WordSelectionList, Container,
} from './Style'

const Input = ({ field, ...rest }) => (
  <div id={field.name}>
    <WordInput type="text" {...field} {...rest} id={`${field.name}-child`} />
  </div>
)

const ValidateMnemonic = ({ setFieldValue }) => {
  const words = localStorage.getItem('mnemonic')
  const [lastFilledIdx, setLastFilledIdx] = useState(0)
  const selectionListRef = useRef(null)

  const onClick = useCallback((e) => {
    const parent = document.getElementById(`words[${lastFilledIdx}]`)
    const { selected, selectedidx } = e.target.dataset
    if (selected === 'false') {
      setFieldValue(`words[${lastFilledIdx}]`, e.target.innerText)
      const child = document.getElementById(`words[${lastFilledIdx}]-child`)
      setLastFilledIdx((prev) => prev + 1)
      parent.insertBefore(e.target, child)
      e.target.dataset.selectedidx = lastFilledIdx
      e.target.dataset.selected = true
    } else if (selected === 'true' && lastFilledIdx - 1 === Number(selectedidx)) {
      selectionListRef?.current?.prepend(e.target)
      setLastFilledIdx((prev) => prev - 1)
      e.target.dataset.selectedidx = null
      e.target.dataset.selected = false
    }
  }, [lastFilledIdx, selectionListRef])
  return (
    <Container>
      <WordList>
        {Array.from({ length: 12 }, (v, i) => i).map((index) => (
          <Field
            key={String(index)}
            component={Input}
            name={`words[${index}]`}
            type="text"
            disabled
            placeholder={`${index}.`}
          />
        ))}
      </WordList>
      <WordSelectionList ref={selectionListRef}>
        {words?.split(' ').map((word) => (
          <Word onClick={onClick} data-selected={false} data-selectedidx={null}>
            {word}
          </Word>
        ))}
      </WordSelectionList>
    </Container>
  )
}

export default ValidateMnemonic
