/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react'
import { ErrorMessage } from 'formik'
import capitalize from '../../../generic/string/capitalize'
import { StyledSelect, Label, Container } from './Style'
import Error from '../ErrorMessage/Index'
import { useSelector } from 'react-redux'
import { Fade } from 'react-bootstrap'

const Select = ({
  width, field, form, placeholder, ...props
}) => {
  const [open, isOpen] = useState(false)
  const metaData = form.getFieldMeta(field.name)
  const showError = metaData.error && metaData.touched
  const enums = useSelector(state => state.enums.topicCategories)
  return (
    <Container>
      
      <Fade in={open}> 
        <div>
          <Label htmlFor={field.name}>Select A Category</Label>
        </div>
      </Fade>

      <StyledSelect
        width={width}
        {...field}
        id={field.name}
        {...props}
        showError={showError}
        defaultValue=""
        onFocus={() => isOpen(true)}
        onBlur={() => isOpen(false)} 
      >
      <option value="">Select A Category</option>
      {
        enums?.map(val => <option value={val}>{val}</option>)
      }
      </StyledSelect>
      <ErrorMessage width={width} name={field.name} component={Error} />
    </Container>
  )
}

export default Select
