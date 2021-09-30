import React from 'react'

import { Label, UploadInput } from './Style'


const UploadIconInput = ({
  field, onChange, file
}) => {

  return (
    <Label >
      <img src={file} /> 
      <UploadInput type="file" {...field} id={field.name} onChange={onChange} />
    </Label>

  )
}


export default UploadIconInput