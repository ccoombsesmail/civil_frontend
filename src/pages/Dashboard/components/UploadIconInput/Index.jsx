/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import { Label, UploadInput } from './Style'

const UploadIconInput = ({
  field, onChange, file, userIcon,
}) => (
  <Label userIcon={userIcon}>
    <img alt="" src={file} />
    <UploadInput type="file" {...field} id={field.name} onChange={onChange} />
  </Label>

)

export default UploadIconInput
