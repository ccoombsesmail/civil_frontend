/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unescaped-entities */
import React, { memo, useEffect, useState} from 'react'
import { Button } from 'primereact/button'

import { Formik } from 'formik'

import { Dialog } from 'primereact/dialog'
import useHandleOnSubmit from './hooks/useHandleOnSubmit'

import {
  FormContainer, Container, InputContainer,
} from './Style/Index'
import useCheckIfTagExistsOnKeyPress from './hooks/useCheckIfTagExistsOnKeyPress'
import useGetCurrentUser from '../../App/hooks/useGetCurrentUser'
import { Footer } from '../SpaceForm/Style'
import FormikController from '../Formik/FormikController/Index'

function CreateTagModal() {
  const { currentUser } = useGetCurrentUser()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (currentUser && !currentUser.tag) {
      setVisible(true)
    }
  }, [currentUser])

  return (
    <Dialog header="Create Tag" visible={visible} onHide={() => setVisible(false)}>
      <CreateTagForm closeModal={() => setVisible(false)} userId={currentUser?.userId} />
    </Dialog>
  )
}

export default memo(CreateTagModal)

function CreateTagForm({ userId, closeModal }) {
  const handleOnSubmit = useHandleOnSubmit(userId, closeModal)
  const { isValid, checkIfTagExistsOnKeyPress } = useCheckIfTagExistsOnKeyPress()
  return (
    <Container>
      <Formik
        initialValues={{
          tag: '',
        }}
        validate={() => {
          if (isValid === false) {
            return { tag: 'Tag Already Exists' }
          }
          return {}
        }}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting, ...rest }) => (
          <FormContainer>
            <InputContainer>
              <p>
                Create a unique tag. This is required to make posts, comment, like, etc.
                The tag you create is unique accross the Civil platform,
                and can be used to "mention" you via "@"
              </p>
              <FormikController
                control="input"
                label="Tag*"
                name="tag"
                type="text"
                onKeyDown={checkIfTagExistsOnKeyPress}
                {...rest}
              />
            </InputContainer>
            <Footer>
              <Button
                onKeyUp={checkIfTagExistsOnKeyPress}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Footer>
          </FormContainer>
        )}
      </Formik>
    </Container>

  )
}
