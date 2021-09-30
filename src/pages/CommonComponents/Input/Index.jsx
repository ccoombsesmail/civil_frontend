/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { ErrorMessage } from 'formik'
import capitalize from '../../../generic/string/capitalize'
import { StyledInput, Label, Container } from './Style'
import Error from '../ErrorMessage/Index'

const Input = ({
  width, field, form, placeholder, ...props
}) => {
  const metaData = form.getFieldMeta(field.name)
  const showError = metaData.error && metaData.touched

  return (
    <Container>
      <StyledInput
        width={width}
        {...field}
        type="text"
        id={field.name}
        placeholder={placeholder || `Enter A ${capitalize(field.name)}`}
        {...props}
        showError={showError}
      />
      <Label htmlFor={field.name}>{capitalize(field.name)}</Label>
      <ErrorMessage width={width} name={field.name} component={Error} />
    </Container>
  )
}

export default Input
