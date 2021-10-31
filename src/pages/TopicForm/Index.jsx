import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'

import Modal from 'react-bootstrap/Modal'
import { Formik, Field } from 'formik'
import { Collapse, Fade } from 'react-bootstrap'
import { BsCameraVideoFill } from 'react-icons/bs'
import useBindDispatch from '../hooks/redux/useBindDispatch'
import topicsActions from '../../redux/actions/topics'
import uiActions from '../../redux/actions/ui'

import Input from '../CommonComponents/Input/Index'
import UploadImageInput from './components/UploadImageInput/Index'
import Select from '../CommonComponents/Select/Index'
import RichTextEditor from '../CommonComponents/RichTextEditor/Index'
import Button from '../CommonComponents/Button/Index'

import {
  FormContainer, InputsContainer, Container, Left, Right, Line, Arrow, UploadMediaContainer
} from './Style'
import checkLinkType from './hooks/checkLinkType'

const CreateTopicForm = () => {
  const [open, setOpen] = useState(false)
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

  const [rotate, setRotate] = useState(0)
  const [content, setContent] = useState('')
  const { createTopic, closeModal, uploadTopicImage } = useBindDispatch(topicsActions, uiActions)
  const user = useSelector((s) => s.session.currentUser)
  return (
    <Container>
      <Formik
        initialValues={{
          title: '', description: '', contentUrl: '', summary: '', category: '',
        }}
        validate={(values) => {
          const errors = {}
          if (!values.title) {
            errors.title = 'Title Is Required'
          }
          if (!values.summary) {
            errors.summary = 'Summary Is Required'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          const eLinks = Object.entries(values).map(([k, v]) => (k.includes('Evidence') ? v : null)).filter(Boolean)
          const linkType = checkLinkType(values.contentUrl)
          const data = {
            ...values,
            description: content,
            createdBy: user.username,
            evidenceLinks: eLinks,
            [linkType]: values.contentUrl,
          }
          if (values.file instanceof File) {
            const formData = new FormData()
            formData.append('image', values.file)
            uploadTopicImage(formData).then((res) => createTopic({ ...data, ...res.data }))
          } else {
            createTopic(data)
          }
          setSubmitting(false)
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Create Topic</Modal.Title>
            </Modal.Header>

            <FormContainer>
              <Modal.Body style={{ textAlign: 'center' }}>
                <InputsContainer>
                  <Left>
                    <h2> What do you want to discuss? </h2>
                    <Field type="text" name="title" component={Input} width="100%" placeholder="Enter A Topic Title" />
                    <Field type="text" name="summary" component={Input} width="100%" placeholder="Give A Short Opinion Or Point" />
                    <Field type="text" name="category" component={Select} width="100%" />
                  </Left>
                  <Right>
                    <h2> Link to what you want to discuss here... </h2>
                    <Field type="url" name="contentUrl" placeholder="Link To Content" component={Input} width="100%" />
                    <UploadMediaContainer>
                      <Field type="file" name="fileName" file={file} component={UploadImageInput} onChange={(e) => onChange(e, setFieldValue)} />
                      <BsCameraVideoFill />
                    </UploadMediaContainer>
                  </Right>
                </InputsContainer>
                <Line />
                <RichTextEditor content={content} setContent={setContent} />
                <Arrow
                  size={35}
                  rotate={rotate}
                  onClick={() => {
                    setOpen(!open)
                    setRotate(rotate + 180)
                  }}
                />
                <Fade in={!open}>
                  <div>
                    Enter Supplemental Information
                  </div>
                </Fade>
                <InputsContainer>
                  <Collapse in={open}>
                    <div style={{ whiteSpace: 'nowrap', width: '100%' }}>
                      <h2> Enter Links To Supplemental Evidence... </h2>
                      <Field type="url" name="Evidence Link 1" component={Input} width="100%" />
                      <Field type="url" name="Evidence Link 2" component={Input} width="100%" />
                      <Field type="url" name="Evidence Link 3" component={Input} width="100%" />
                    </div>
                  </Collapse>
                </InputsContainer>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" disabled={isSubmitting} onClick={closeModal}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Modal.Footer>
            </FormContainer>
          </>
        )}
      </Formik>
    </Container>
  )
}

export default CreateTopicForm
