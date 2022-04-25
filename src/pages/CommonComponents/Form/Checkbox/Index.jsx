/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Input, Label } from './Style/Index'

export const Checkbox = ({
  width, field, form, showCheckmark, type, ...props
}) => {
  const metaData = form.getFieldMeta(field.name)
  const showError = metaData.error && metaData.touched
  return (
    <>
      <Input
        id={field.name}
        showCheckmark={showCheckmark}
        {...field}
        {...props}
        type={type || 'checkbox'}
        showError={showError}
      />
      <Label className="cbx" htmlFor={field.name}>
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1" />
          </svg>
        </span>
      </Label>
    </>
  )
}
