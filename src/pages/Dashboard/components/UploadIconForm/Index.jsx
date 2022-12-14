import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Formik, Field } from 'formik'
import Modal from 'react-bootstrap/Modal'

import ImageCheckbox from '../ImageCheckbox/Index'
import UploadIconInput from '../UploadIconInput/Index'
import Button from '../../../CommonComponents/Button/Index'

import sessionActions from '../../../../redux/actions/session/index'
import useBindDispatch from '../../../hooks/redux/useBindDispatch'

import {
  FormContainer, Container, FlexDiv,
} from './Style'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'

const UploadIconForm = () => {
  const [file, setFile] = useState(null)
  const [selectedIconIdx, setSelectedIconIdx] = useState(null)
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
    if (e.target.checked) {
      setSelectedIconIdx(idx)
      setFieldValue(e.target.name, true)
    } else {
      setSelectedIconIdx(null)
      setFieldValue(e.target.name, false)
    }
  }, [])

  const { uploadUserIcon, updateUserIcon } = useBindDispatch(sessionActions)

  const { currentUser } = useGetCurrentUser()
  
  const user = useSelector((s) => s.users.list).find((u) => u.id === currentUser?.userId)

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
            uploadUserIcon(formData, user?.username)
            setSubmitting(false)
          } else {
            const profileImg = Object.entries(values).find(([, v]) => v === true)?.[0]
            updateUserIcon({ username: user?.username, iconSrc: profileImg })
          }
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <>
            <FormContainer>
              <Modal.Header closeButton>
                <Modal.Title>Choose A Profile Image</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ textAlign: 'center' }}>
                <FlexDiv>
                  <Field type="file" name="fileName" userIcon={user?.iconSrc} file={file} component={UploadIconInput} onChange={(e) => onChange(e, setFieldValue)} />
                  <span>
                    Upload A Profile Picture
                  </span>
                </FlexDiv>
                Or Choose An Avatar
                <section>
                  {
                    new Array(16).fill(0).map((_, idx) => <Field onChange={(e) => onChangeIcon(e, idx, setFieldValue)} disabled={selectedIconIdx !== idx && selectedIconIdx !== null} key={String(idx)} iconSrc={`https://civil-dev.s3.us-west-1.amazonaws.com/profile_images/64_${idx + 1}.png`} name={`profile_img_${idx + 1}`} component={ImageCheckbox} />)
                  }
                </section>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" disabled={isSubmitting}>Submit</Button>
              </Modal.Footer>
            </FormContainer>
          </>
        )}
      </Formik>

    </Container>

  )
}

export default UploadIconForm
