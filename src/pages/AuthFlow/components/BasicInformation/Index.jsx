import { Field } from 'formik'
import React, { useState, useCallback } from 'react'
import Input3 from '../../../CommonComponents/Form/Input3/Index'
import { FieldContainer, NamesContainer } from './Style/Index'
import UploadIconInput from '../../../Dashboard/components/UploadIconInput/Index';

const BasicInformation = ({ setFieldValue }) => {
  const [file, setFile] = useState(null)

  const onChange = useCallback((e) => {
    // setFieldValue('file', e.currentTarget.files[0])
    const reader = new FileReader()
    const currFile = e.target.files[0]
    reader.onloadend = () => {
      console.log(reader)
      setFile(reader.result)
      setFieldValue('file', reader.result)
    }
    reader.readAsDataURL(currFile)
  }, [])
  console.log()
  return (
    <FieldContainer>
      <div>
        <Field type="file" name="fileName" file={file} component={UploadIconInput} onChange={(e) => onChange(e)} />
        <span>
          Upload A Profile Picture
        </span>
      </div>
      <NamesContainer>
        <Field
          type="text"
          name="firstName"
          label="First Name"
          component={Input3}
          width="40%"
          isDIDForm
        />
        <Field
          type="text"
          name="lastName"
          component={Input3}
          width="40%"
          placeholder="Last Name"
          label="Last Name"
          isDIDForm
        />
      </NamesContainer>
      <NamesContainer>
        <Field
          type="text"
          name="username"
          component={Input3}
          width="100%"
          label="Username"
          isDIDForm
        />
      </NamesContainer>

    </FieldContainer>

  )
}

export default BasicInformation
