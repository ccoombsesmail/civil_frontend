/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Label, UploadInput } from './Style'

const UploadImageInput = ({
  field, onChange, icon, fileType, disabled,
}) => (
  <Label>
    {icon}
    <UploadInput data-filetype={fileType} type="file" {...field} id={field.name} onChange={onChange} disabled={disabled} />
  </Label>

)

export default UploadImageInput
