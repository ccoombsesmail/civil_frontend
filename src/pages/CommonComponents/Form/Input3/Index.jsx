/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { ErrorMessage } from 'formik'
import capitalize from '../../../../generic/string/capitalize'
import {
  StyledInput, Label, Container, OuterContainer,
} from './Style'
import Error from '../ErrorMessage/Index'

const Input = ({
  width, field, form, placeholder, onBlur, label, isDIDForm, validInput = null, ...props
}) => {
  const metaData = form.getFieldMeta(field.name)
  const showError = metaData.error
  const handleOnBlur = typeof onBlur === 'function' ? (e) => {
    onBlur(e)
    form.setFieldTouched(field.name, true, true)
  } : () => {
    form.setFieldTouched(field.name, true, true)
  }
  return (
    <OuterContainer width={width}>
      <Container isDIDForm={isDIDForm} validInput={validInput} showError={showError} width={width}>
        <input
          {...field}
          type="text"
          id={field.name}
          name={field.name}
          placeholder={label}
          {...props}
          onBlur={handleOnBlur}
        />
        <label htmlFor={field.name}>{label}</label>
        {/* { showError && <span>{metaData.error}</span>} */}
      </Container>
      {showError && <ErrorMessage width={width} name={field.name} component={Error} /> }
    </OuterContainer>

  )
}

export default Input
