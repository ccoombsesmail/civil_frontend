import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import sessionActions from '../../../../redux/actions/session/index'


import { Formik, Field } from 'formik'

import UploadIconInput from '../UploadIconInput/Index'
import Button from '../../../CommonComponents/Button/Index'
import { FormContainer, Container, ButtonContainer } from './Style'


const UploadIconForm = () => {

  const [file, setFile] = useState(null)

  const onChange = useCallback((e, setFieldValue) => {
    setFieldValue('file', e.currentTarget.files[0])
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFile(reader.result)
    };
    reader.readAsDataURL(file);
    // setFile(e.currentTarget.files[0])
  }, [])
  const dispatch = useDispatch()
  const { uploadUserIcon } = bindActionCreators(sessionActions, dispatch)

  const user = useSelector((s) => s.session.currentUser)
  return (
    <Container>
      <Formik
        initialValues={{
          file: ''
        }}
        validate={(values) => {
          const errors = {}
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
            const formData = new FormData();
            formData.append("image", values.file);
            uploadUserIcon(formData, user?.username)
            setSubmitting(false)
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <>
            <FormContainer >
              <Field type="file" name="fileName" file={file} component={UploadIconInput} onChange={(e) => onChange(e, setFieldValue)} />
              <ButtonContainer>

                <span>
                  Upload A Profile Picture
                </span>
                <Button type="submit" disabled={isSubmitting}>Submit</Button>
              </ButtonContainer>
            </FormContainer>
          </>
        )}
      </Formik>
    </Container>

  )
}

export default UploadIconForm
