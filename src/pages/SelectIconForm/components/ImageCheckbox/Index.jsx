import React from 'react'

import { Label, Input } from './Style'

const ImageCheckbox =({
  width, field, iconSrc, form, ...props
}) => {
  // const metaData = form.getFieldMeta(field.name)
  // const showError = metaData.error && metaData.touched
  return (
    <>
    <Input type="checkbox" iconSrc={iconSrc} {...field} id={field.name} />
    <Label iconSrc={iconSrc} htmlFor={field.name}></Label>
    </>
  )
}


export default ImageCheckbox