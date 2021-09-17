import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from 'react-bootstrap/Modal'

import { Formik, Field } from 'formik'
import Input from '../CommonComponents/Input/Index'
import Button from '../CommonComponents/Button/Index'
import { FormContainer, InputsContainer, Container, Left, Right } from './Style'
import topicsActions from '../../redux/actions/topics'
import uiActions from '../../redux/actions/ui'

const CreateTopicForm = () => {
  const dispatch = useDispatch()
  const { createTopic, closeModal } = bindActionCreators({ ...topicsActions, ...uiActions }, dispatch)
  const user = useSelector((s) => s.session.currentUser)
  return (
    <Container>
      <Formik
        initialValues={{ title: '', description: '', tweetUrl: '' }}
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
                <InputsContainer>
                  <Left>
                    <h2> What do you want to discuss? </h2>
                    <Field type="text" name="title" component={Input} width="100%" />
                    <Field type="text" name="description" component={Input} width="100%" />
                  </Left>
                  <Right>
                    <h2> Link to what you want to discuss here... (optional) </h2>
                    <Field type="text" name="tweetUrl" component={Input} width="100%" />
                  </Right>
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
