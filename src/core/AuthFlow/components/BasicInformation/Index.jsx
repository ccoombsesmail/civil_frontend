import { Field } from 'formik'
import React, { useState, useCallback } from 'react'
import { FieldContainer, NamesContainer } from './Style/Index'
import UploadIconInput from '../../../pages/DashboardPage/components/UploadIconInput/Index'
import FormikController from '../../../Forms/Formik/FormikController/Index'

function BasicInformation({ setFieldValue }) {
  const [file, setFile] = useState(null)

  const onChange = useCallback((e) => {
    const reader = new FileReader()
    const currFile = e.target.files[0]
    reader.onloadend = () => {
      setFile(reader.result)
      setFieldValue('file', reader.result)
    }
    reader.readAsDataURL(currFile)
  }, [])
  return (
    <FieldContainer>
      <div>
        <Field type="file" name="fileName" file={file} component={UploadIconInput} onChange={(e) => onChange(e)} />
        <span>
          Upload A Profile Picture
        </span>
      </div>
      <NamesContainer>
        <FormikController
          control="input"
          label="Title*"
          name="title"
          type="text"
        />
        <FormikController
          control="input"
          label="Title*"
          name="title"
          type="text"
        />
      </NamesContainer>
      <NamesContainer>
        <FormikController
          control="input"
          label="Title*"
          name="title"
          type="text"
        />
      </NamesContainer>

    </FieldContainer>

  )
}

export default BasicInformation
