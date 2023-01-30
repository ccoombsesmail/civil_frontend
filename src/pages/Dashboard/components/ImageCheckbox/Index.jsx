import React from 'react'

import { Label, Input } from './Style'

const ImageCheckbox = ({
  width, field, iconSrc, form, ...props
}) => (
  <>
    <Input type="checkbox" iconSrc={iconSrc} {...field} id={field.name} {...props} />
    <Label iconSrc={iconSrc} htmlFor={field.name} />
  </>
)

export default ImageCheckbox
