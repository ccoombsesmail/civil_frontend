/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { BsImageFill } from 'react-icons/bs'
import { Label, UploadInput } from './Style'

const UploadImageInput = ({
  field, onChange, file,
}) => (
  <Label>
    <BsImageFill />
    <img alt="" src={file} />
    <UploadInput type="file" {...field} id={field.name} onChange={onChange} />
  </Label>

)

export default UploadImageInput
