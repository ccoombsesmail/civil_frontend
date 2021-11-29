import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Modal } from 'react-bootstrap'

import { Formik, Field } from 'formik'
import Input from '../../CommonComponents/Form/Input/Index'
import Button from '../../CommonComponents/Button/Index'
import { FormContainer, InputWrapper, Container } from './Style'
import sessionActions from '../../../redux/actions/session'
import uiActions from '../../../redux/actions/ui'

const SignUpForm = () => {
  const dispatch = useDispatch()
  const { signUp, closeModal } = bindActionCreators({ ...sessionActions, ...uiActions }, dispatch)
  return (
    <Container>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.username) {
            errors.username = 'Username Is Required'
          }
          if (!values.password) {
            errors.password = 'Password Is Required'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          signUp(values)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <FormContainer>
              <Modal.Body>
                <InputWrapper>
                  <Field type="username" name="username" component={Input} />
                </InputWrapper>
                <InputWrapper>
                  <Field type="password" name="password" component={Input} />
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

export default SignUpForm
