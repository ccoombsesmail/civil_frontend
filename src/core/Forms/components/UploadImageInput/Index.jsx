/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Label, UploadInput } from './Style'

function UploadImageInput({
  field, onChange, icon, fileType, disabled, accept,
}) {
  return (
    <Label>
      {icon}
      <UploadInput accept={accept} data-filetype={fileType} type="file" {...field} id={field.name} onChange={onChange} disabled={disabled} />
    </Label>
  )
}

export default UploadImageInput
