/* eslint-disable react/jsx-props-no-spreading */
import { Field } from 'formik'
import React from 'react'
import { WordList, WordInput } from './Style'

const Input = ({ field }) => <WordInput type="text" {...field} id={field.id} />

const ValidateMnemonic = ({ values }) => {
  console.log(values)
  return (
    <div>
      <WordList>
        {Array.from({ length: 12 }, (v, i) => i).map((index) => (
          <Field
            key={String(index)}
            component={Input}
            name={`words[${index}]`}
            type="text"
          />
        ))}
      </WordList>
    </div>
  )
}

export default ValidateMnemonic
