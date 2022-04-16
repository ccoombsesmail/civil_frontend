/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { ErrorMessage } from 'formik'
import capitalize from '../../../../generic/string/capitalize'
import { StyledInput, Label, Container } from './Style'
import Error from '../ErrorMessage/Index'

const Input = ({
  width, field, form, placeholder, onBlur, label, isDIDForm, ...props
}) => {
  const metaData = form.getFieldMeta(field.name)
  const showError = metaData.error && metaData.touched
  const handleOnBlur = typeof onBlur === 'function' ? onBlur : () => undefined
  return (
    <Container width={width} isDIDForm={isDIDForm}>
      <input
        {...field}
        type="text"
        id={field.name}
        name={field.name}
        placeholder={label}
        {...props}
        // showError={showError}
        onBlur={handleOnBlur}
      />
      <label htmlFor={field.name}>{label}</label>
      {/* <ErrorMessage width={width} name={field.name} component={Error} /> */}
    </Container>
  )
}

export default Input
