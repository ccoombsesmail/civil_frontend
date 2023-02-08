/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useCallback } from 'react'
import { ErrorMessage } from 'formik'
import { Fade } from 'react-bootstrap'
import { StyledSelect, Label, Container } from './Style'
import Error from '../ErrorMessage/Index'
import { useGetEnumsQueryState } from '../../../../api/services/enums.ts'

const Select = ({
  width, field, form, placeholder, setFieldValue, setFieldTouched, ...props
}) => {
  const [open, isOpen] = useState(false)
  const [value, setValue] = useState('')
  const metaData = form.getFieldMeta(field.name)
  const showError = metaData.error && metaData.touched
  const { data: enums, isUninitialized } = useGetEnumsQueryState()
  const onChange = useCallback((e, setField) => {
    setField(field.name, e.target.value)
    setValue(e.target.value)
  }, [])

  if (isUninitialized) return null
  return (
    <Container width={width}>

      <Fade in={open}>
        <div>
          <Label htmlFor={field.name}>Select A Category</Label>
        </div>
      </Fade>

      <StyledSelect
        {...props}
        width={width}
        {...field}
        id={field.name}
        showError={showError}
        value={value}
        onChange={(e) => onChange(e, setFieldValue)}
        onFocus={() => isOpen(true)}
        onBlur={() => isOpen(false)}
      >
        <option value="">Select A Category*</option>
        {
        enums?.map((val) => <option key={val} value={val}>{val}</option>)
      }
      </StyledSelect>
      <ErrorMessage width={width} name={field.name} component={Error} />
    </Container>
  )
}

export default Select
