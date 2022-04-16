import React from 'react'
import { Input, Label } from './Style/Index'

export const Checkbox = ({
  width, field, form, ...props
}) => {
  const metaData = form.getFieldMeta(field.name)
  const showError = metaData.error && metaData.touched
  return (
    <>
      <Input
        type="checkbox"
        id={field.name}
        {...field}
        {...props}
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
