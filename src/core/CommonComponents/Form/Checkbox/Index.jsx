/* eslint-disable react/jsx-props-no-spreading */
import React, {useState} from 'react'
import { Input, Label } from './Style/Index'

export function Checkbox({
  width, field, form, showCheckmark, type, ...props
}) {
  const [isChecked, setIsChecked] = useState(false); // initial unchecked state

  const metaData = form.getFieldMeta(field.name)
  const showError = metaData.error && metaData.touched
  return (
    <>
      <Input
        id={field.name}
        showCheckmark={showCheckmark}
        {...field}
        {...props}
        type={'checkbox'}
        showError={showError}
        checked={isChecked}
        value={isChecked ? true : false}
    
      />
      <Label className="cbx" htmlFor={field.name} onClick={() => {
        setIsChecked(prev => {
          form.setFieldValue(field.name, !prev)

          return !prev
        })
        }}>
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1" />
          </svg>
        </span>
      </Label>
    </>
  )
}
