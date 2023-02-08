import React from 'react'
import { ErrorMessage } from 'formik'
import capitalize from '../../../generic/string/capitalize'
import { StyledTextArea, Label, Container } from './Style'
import Error from '../ErrorMessage/Index'

const TextArea = ({
  width, field, placeholder, form, ...props
}) => {
  const metaData = form.getFieldMeta(field.name)
  const showError = metaData.error && metaData.touched
  return (
    <Container>
      <StyledTextArea
        width={width}
        {...field}
        type="text"
        id={field.name}
        placeholder={ placeholder || `What's your take on this?`}
        {...props}
        showError={showError}
      />
      {/* <Label htmlFor={field.name}>{capitalize(field.name)}</Label> */}
      <ErrorMessage width={width} name={field.name} component={Error} />
    </Container>
  )
}

export default TextArea