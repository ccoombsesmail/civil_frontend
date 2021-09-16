import React from 'react'

import { Label } from './Style'

const CheckBoxPressed =({
  width, field, color, text, form, ...props
}) => {
  const metaData = form.getFieldMeta(field.name)
  // const showError = metaData.error && metaData.touched
  return (
    <Label color={color}>
      <input type="checkbox" {...field} id={field.name} />
      <span>{text}</span>
    </Label>
  )
}


export default CheckBoxPressed