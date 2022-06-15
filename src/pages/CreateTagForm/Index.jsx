import React, { memo } from 'react'

import Modal from 'react-bootstrap/Modal'
import { Formik, Field } from 'formik'

import Button from '../CommonComponents/Button/Index'
import Input3 from '../CommonComponents/Form/Input3/Index'

import useHandleOnSubmit from './hooks/useHandleOnSubmit'

import {
  FormContainer, Container, InputContainer,
} from './Style/Index'

const CreateTagForm = ({ userId }) => {
  const handleOnSubmit = useHandleOnSubmit(userId)

  return (
    <Container>
      <Formik
        initialValues={{
          tag: '',
        }}
        validate={() => {
          const errors = {}
          return errors
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
                  Create A Unique Tag.
                  <Field name="tag" component={Input3} />
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
