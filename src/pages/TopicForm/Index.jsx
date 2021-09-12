import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from 'react-bootstrap/Modal'

import { Formik, Field } from 'formik'
import Input from '../CommonComponents/Input/Index'
import Button from '../CommonComponents/Button/Index'
import { FormContainer, InputWrapper, Container } from './Style'
import topicsActions from '../../redux/actions/topics'
import uiActions from '../../redux/actions/ui'

const CreateTopicForm = () => {
  const dispatch = useDispatch()
  const { createTopic, closeModal } = bindActionCreators({ ...topicsActions, ...uiActions }, dispatch)
  const user = useSelector((s) => s.session.currentUser)
  return (
    <Container>
      {/* <h1>Create Topic</h1> */}
      <Formik
        initialValues={{ title: '', description: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.title) {
            errors.title = 'Title Is Required'
          }
          if (!values.description) {
            errors.description = 'Description Is Required'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          createTopic({ ...values, createdBy: user.username })
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Create Topic</Modal.Title>
            </Modal.Header>

            <FormContainer>
              <Modal.Body>
                <InputWrapper>
                  <Field type="text" name="title" component={Input} width="40%" />
                </InputWrapper>
                <InputWrapper>
                  <Field type="text" name="description" component={Input} width="40%" />
                </InputWrapper>
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
