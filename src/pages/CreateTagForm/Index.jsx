import React, { memo } from 'react'

import Modal from 'react-bootstrap/Modal'
import { Formik, Field } from 'formik'

import Button from '../CommonComponents/Button/Index'
import Input3 from '../CommonComponents/Form/Input3/Index'

import useHandleOnSubmit from './hooks/useHandleOnSubmit'

import {
  FormContainer, Container, InputContainer,
} from './Style/Index'
import useCheckIfTagExistsOnKeyPress from './hooks/useCheckIfTagExistsOnKeyPress'

const CreateTagForm = ({ userId }) => {
  const handleOnSubmit = useHandleOnSubmit(userId)
  const { isValid, checkIfTagExistsOnKeyPress } = useCheckIfTagExistsOnKeyPress()
  return (
    <Container>
      <Formik
        initialValues={{
          tag: '',
        }}
        validate={(vals) => {
          console.log(isValid)
          if (isValid === false) {
            console.log("hehe")
            return { tag: 'Tag Already Exists' }
          }
          return {}
        }}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting }) => (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Create Unique Tag</Modal.Title>
            </Modal.Header>
            <FormContainer>
              <Modal.Body>
                <InputContainer>
                  <p>
                    Create a unique tag. This is required to make posts, comment, like, etc.
                    The tag you create is unique accross the Civil platform,
                    and can be used to "mention" you via "@"
                  </p>
                  <Field name="tag" label="Enter Tag" component={Input3} onKeyUp={checkIfTagExistsOnKeyPress} validInput={isValid} />
                </InputContainer>
              </Modal.Body>
              <Modal.Footer>
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

export default memo(CreateTagForm)
