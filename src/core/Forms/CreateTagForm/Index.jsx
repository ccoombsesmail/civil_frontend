/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unescaped-entities */
import React, { memo, useCallback, useEffect } from 'react'

import { Formik, Field } from 'formik'

import Button from '../../CommonComponents/Button/Index'
import Input3 from '../../CommonComponents/Form/Input3/Index'
import useModal from '../../CommonComponents/Lexical/hooks/useModal.tsx'

import useHandleOnSubmit from './hooks/useHandleOnSubmit'

import {
  FormContainer, Container, InputContainer,
} from './Style/Index'
import useCheckIfTagExistsOnKeyPress from './hooks/useCheckIfTagExistsOnKeyPress'
import useGetCurrentUser from '../../App/hooks/useGetCurrentUser'
import { Footer } from '../SpaceForm/Style'

function CreateTagModal() {
  const { currentUser } = useGetCurrentUser()
  const [modal, showModal] = useModal()
  const openModal = useCallback((userId) => {
    showModal('Why Are You Reporting This Content?', (onClose) => (
      <CreateTagForm closeModal={onClose} userId={userId} />
    ))
  }, [])

  useEffect(() => {
    if (currentUser && !currentUser.tag) {
      openModal(currentUser.userId)
    }
  }, [currentUser])

  return (
    <>
      { modal }
    </>
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
        {({ isSubmitting }) => (
          <FormContainer>
            <InputContainer>
              <p>
                Create a unique tag. This is required to make posts, comment, like, etc.
                The tag you create is unique accross the Civil platform,
                and can be used to "mention" you via "@"
              </p>
              <Field name="tag" label="Enter Tag" component={Input3} width="50%" onKeyUp={checkIfTagExistsOnKeyPress} validInput={isValid} />
            </InputContainer>
            <Footer>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Footer>
          </FormContainer>
        )}
      </Formik>
    </Container>

  )
}
