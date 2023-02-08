/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import { Label, Input } from './Style'

function ImageCheckbox({
  width, field, iconSrc, form, ...props
}) {
  return (
    <>
      <Input type="checkbox" iconSrc={iconSrc} {...field} id={field.name} {...props} />
      <Label iconSrc={iconSrc} htmlFor={field.name} />
    </>
  )
}

export default ImageCheckbox
