/* eslint-disable no-plusplus */
import React, { useState, useCallback } from 'react'
import { Formik, Field } from 'formik'
import ImageCheckbox from '../ImageCheckbox/Index'
import UploadIconInput from '../UploadIconInput/Index'
import Button from '../../../CommonComponents/Button/Index'

import sessionActions from '../../../../redux/actions/session/index'
import useBindDispatch from '../../../hooks/redux/useBindDispatch'

import {
  FormContainer, Container, FlexDiv, ButtonContainer,
} from './Style'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'

const UploadIconForm = ({ closeModal }) => {
  const [file, setFile] = useState(null)
  const onChange = useCallback((e, setFieldValue) => {
    setFieldValue('file', e.currentTarget.files[0])
    const reader = new FileReader()
    const currFile = e.target.files[0]
    reader.onloadend = () => {
      setFile(reader.result)
    }
    reader.readAsDataURL(currFile)
  }, [])

  const onChangeIcon = useCallback((e, idx, setFieldValue) => {
    for (let i = 1; i < 4; i++) {
      document.getElementById(`profile_icon_${i}`).checked = false
    }
    document.getElementById(`profile_icon_${idx + 1}`).checked = true

    setFieldValue(e.target.name, true)
  }, [])

  const { uploadUserIcon, updateUserIcon } = useBindDispatch(sessionActions)

  const { currentUser: user } = useGetCurrentUser()

  return (
    <Container>
      <Formik
        initialValues={{
          file: '',
        }}
        validate={() => {
          const errors = {}
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (values.file instanceof File) {
            const formData = new FormData()
            formData.append('image', values.file)
            console.log(formData)
            uploadUserIcon(formData, user?.userId)
            setSubmitting(false)
          } else {
            const profileImg = Object.entries(values).find(([, v]) => v === true)?.[0]
            updateUserIcon({ username: user?.username, iconSrc: `https://civil-dev.s3.us-west-1.amazonaws.com/profile_images/${profileImg}.png` })
          }
          closeModal()
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <>
            <FormContainer>
              <FlexDiv>
                <Field
                  type="file"
                  name="fileName"
                  userIcon={user?.iconSrc}
                  file={file}
                  component={UploadIconInput}
                  onChange={(e) => onChange(e, setFieldValue)}
                />
                <span>
                  Upload A Profile Picture
                </span>
              </FlexDiv>
              <h2>
                Or Choose An Avatar
              </h2>
              <section>
                {
                    new Array(16).fill(0).map((_, idx) => (
                      <Field
                        onChange={(e) => onChangeIcon(e, idx, setFieldValue)}
                        key={String(idx)}
                        iconSrc={`https://civil-dev.s3.us-west-1.amazonaws.com/profile_images/profile_icon_${idx + 1}.png`}
                        name={`profile_icon_${idx + 1}`}
                        component={ImageCheckbox}
                      />
                    ))
                  }
              </section>
              <ButtonContainer>
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
